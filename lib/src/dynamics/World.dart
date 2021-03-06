// Copyright 2012 Google Inc. All Rights Reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * The world class manages all physics entities, dynamic simulation,
 * and asynchronous queries. The world also contains efficient memory
 * management facilities.
 *
 * Author: Daniel Murphy
 */

part of box2d;

class World {
  static const int WORLD_POOL_SIZE = 100;
  static const int WORLD_POOL_CONTAINER_SIZE = 10;

  static const int NEW_FIXTURE = 0x0001;
  static const int LOCKED = 0x0002;
  static const int CLEAR_FORCES = 0x0004;

  int _flags;

  ContactManager _contactManager;

  Body _bodyList;
  Joint _jointList;

  int _bodyCount;
  int _jointCount;

  final vec2 _gravity;
  bool _allowSleep;

  DebugDraw _debugDraw;

  FixtureDestructionListener _fixtureDestructionListener;
  JointDestructionListener _jointDestructionListener;

  final DefaultWorldPool _pool;

  /**
   * This is used to compute the time step ratio to
   * support a variable time step.
   */
  num _inverseTimestep;

  /**
   * This is for debugging the solver.
   */
  bool _warmStarting;

  /**
   * This is for debugging the solver.
   */
  bool _continuousPhysics;

  List<List<ContactRegister>> _contactStacks;

  /** Pooling */
  final vec2 center;
  final vec2 axis;

  final TimeStep timestep;
  final vec2 cA;
  final vec2 cB;
  final WorldQueryWrapper wqwrapper;

  final TimeOfImpactInput toiInput;
  final TimeOfImpactOutput toiOutput;
  final Sweep backup;
  final TimeOfImpactSolver toiSolver;
  List<Contact> contacts;
  final Island island;
  List<Body> stack;

  /**
   * Constructs a world object.
   *
   * gravity
   *   the world gravity vector.
   * doSleep
   *   improve performance by not simulating inactive bodies.
   */
  World(vec2 gravity, bool doSleep, DefaultWorldPool argPool) :
    _pool = argPool,
    _jointDestructionListener = null,
    _fixtureDestructionListener = null,
    _debugDraw = null,

    _bodyList = null,
    _jointList = null,

    _bodyCount = 0,
    _jointCount = 0,

    _warmStarting = true,
    _continuousPhysics = true,

    _allowSleep = doSleep,
    _gravity = gravity,

    _flags = CLEAR_FORCES,

    _inverseTimestep = 0,

    _contactStacks = new List<List<ContactRegister>>(ShapeType.TYPE_COUNT),

    // Initialize Pool Objects.
    center = new vec2.zero(),
    axis = new vec2.zero(),
    timestep = new TimeStep(),
    cA = new vec2.zero(),
    cB = new vec2.zero(),
    wqwrapper = new WorldQueryWrapper(),
    toiInput = new TimeOfImpactInput(),
    toiOutput = new TimeOfImpactOutput(),
    backup = new Sweep(),
    toiSolver = new TimeOfImpactSolver(),
    contacts = new List<Contact>(Settings.MAX_TIME_OF_IMPACT_CONTACTS),
    island = new Island(),
    stack = new List<Body>(10) {

    _contactManager = new ContactManager(this);

    // Initialize settings.
    for (int i = 0; i < _contactStacks.length; i++) {
      _contactStacks[i] = new List<ContactRegister>(ShapeType.TYPE_COUNT);
    }
    _initializeRegisters();
  }

  void _addType(Queue<Contact> creatorStack, int type1, int type2) {
    ContactRegister register = new ContactRegister();
    register.creator = creatorStack;
    register.primary = true;
    _contactStacks[type1][type2] = register;

    if (type1 != type2) {
      ContactRegister register2 = new ContactRegister();
      register2.creator = creatorStack;
      register2.primary = false;
      _contactStacks[type2][type1] = register2;
    }
  }

  void _initializeRegisters() {
    _addType(_pool.getCircleContactStack(), ShapeType.CIRCLE, ShapeType.CIRCLE);
    _addType(_pool.getPolyCircleContactStack(), ShapeType.POLYGON,
        ShapeType.CIRCLE);
    _addType(_pool.getPolyContactStack(), ShapeType.POLYGON, ShapeType.POLYGON);
  }

  Contact popContact(Fixture fixtureA, Fixture fixtureB) {
    int type1 = fixtureA.type;
    int type2 = fixtureB.type;

    ContactRegister reg = _contactStacks[type1][type2];
    Queue<Contact> creator = reg.creator;
    if (creator != null) {

      // Ensure that the creator isn't depleted of contact stacks.
      if (creator.isEmpty) {
        creator = _getFreshContactStack(type1, type2);
      }

      if (reg.primary) {
        Contact c = creator.removeFirst();
        c.init(fixtureA, fixtureB);
        return c;
      } else {
        Contact c = creator.removeFirst();
        c.init(fixtureB, fixtureA);
        return c;
      }
    } else {
      return null;
    }
  }

  /** Returns a newly stocked contact stack of the appropriate type. */
  Queue<Contact> _getFreshContactStack(int type1, int type2) {
    if (type1 == ShapeType.CIRCLE && type2 == ShapeType.CIRCLE) {
      return _pool.getCircleContactStack();
    } else if (type1 == ShapeType.POLYGON && type2 == ShapeType.POLYGON) {
      return _pool.getPolyContactStack();
    } else {
      return _pool.getPolyCircleContactStack();
    }
  }

  void pushContact(Contact contact) {
    if (contact.manifold.pointCount > 0) {
      contact.fixtureA.body.awake = true;
      contact.fixtureB.body.awake = true;
    }

    int type1 = contact.fixtureA.type;
    int type2 = contact.fixtureB.type;

    Queue<Contact> creator = _contactStacks[type1][type2].creator;
    creator.addFirst(contact);
  }


  /**
   * Register a contact filter to provide specific control over collision.
   * Otherwise the default filter is used (_defaultFilter). The listener is
   * owned by you and must remain in scope.
   */
  void set contactFilter(ContactFilter filter) {
    _contactManager.contactFilter = filter;
  }

  /**
   * Register a contact event listener. The listener is owned by you and must
   * remain in scope.
   */
  void set contactListener(ContactListener listener) {
    print('Setting contactListener to $listener');
    _contactManager.contactListener = listener;
  }

  ContactListener get contactListener => _contactManager.contactListener;

  /**
   * Register a routine for debug drawing. The debug draw functions are called
   * inside with World.DrawDebugData method. The debug draw object is owned
   * by you and must remain in scope.
   */
  void set debugDraw(DebugDraw debugDraw) {
    _debugDraw = debugDraw;
  }

  /**
   * Create a rigid body given a definition. No reference to the definition
   * is retained.
   */
  Body createBody(BodyDef def) {
    assert (locked == false);
    if (locked) {
      return null;
    }
    Body b = new Body(def, this);

    // add to world doubly linked list
    b.prev = null;
    b.next = _bodyList;
    if (_bodyList != null) {
      _bodyList.prev = b;
    }
    _bodyList = b;
    ++_bodyCount;

    return b;
  }

  /**
   * Create a joint to constrain bodies together. No reference to the definition
   * is retained. This may cause the connected bodies to cease colliding.
   *
   * Warning: This function is locked during callbacks.
   */
  Joint createJoint(JointDef def) {
    assert (locked == false);
    if (locked) {
      return null;
    }

    Joint j = new Joint.create(this, def);

    // Connect to the world list.
    j._prev = null;
    j._next = _jointList;
    if (_jointList != null) _jointList._prev = j;
    _jointList = j;
    ++_jointCount;

    // Connect to the bodies' doubly linked lists.
    j.edgeA.joint = j;
    j.edgeA.other = j.bodyB;
    j.edgeA.prev = null;
    j.edgeA.next = j.bodyA.jointList;
    if (j.bodyA.jointList != null) {
      j.bodyA.jointList.prev = j.edgeA;
    }
    j.bodyA.jointList = j.edgeA;

    j.edgeB.joint = j;
    j.edgeB.other = j.bodyA;
    j.edgeB.prev = null;
    j.edgeB.next = j.bodyB.jointList;
    if (j.bodyB.jointList != null) {
      j.bodyB.jointList.prev = j.edgeB;
    }
    j.bodyB.jointList = j.edgeB;

    Body bodyA = def.bodyA;
    Body bodyB = def.bodyB;

    // If the joint prevents collisions, then flag any contacts for filtering.
    if (def.collideConnected == false) {
      ContactEdge edge = bodyB.contactList;
      while (edge != null) {
        if (edge.other == bodyA) {
          // Flag the contact for filtering at the next time step (where either
          // body is awake).
          edge.contact.flagForFiltering();
        }

        edge = edge.next;
      }
    }

    // Note: creating a joint doesn't wake the bodies.

    return j;
  }

  /**
   * Destroy a joint. This may cause the connected bodies to begin colliding.
   *
   * Warning: This function is locked during callbacks.
   */
  void destroyJoint(Joint joint) {
    assert (locked == false);
    if (locked) {
      return;
    }

    bool collideConnected = joint.collideConnected;

    // Remove from the doubly linked list.
    if (joint._prev != null) joint._prev._next = joint._next;

    if (joint._next != null) joint._next._prev = joint._prev;

    if (joint == _jointList) _jointList = joint._next;

    // Disconnect from island graph.
    Body bodyA = joint.bodyA;
    Body bodyB = joint.bodyB;

    // Wake up connected bodies.
    bodyA.awake = true;
    bodyB.awake = true;

    // Remove from body 1.
    if (joint.edgeA.prev != null) {
      joint.edgeA.prev.next = joint.edgeA.next;
    }

    if (joint.edgeA.next != null) {
      joint.edgeA.next.prev = joint.edgeA.prev;
    }

    if (joint.edgeA == bodyA.jointList) {
      bodyA.jointList = joint.edgeA.next;
    }

    joint.edgeA.prev = null;
    joint.edgeA.next = null;

    // Remove from body 2
    if (joint.edgeB.prev != null) {
      joint.edgeB.prev.next = joint.edgeB.next;
    }

    if (joint.edgeB.next != null) {
      joint.edgeB.next.prev = joint.edgeB.prev;
    }

    if (joint.edgeB == bodyB.jointList) {
      bodyB.jointList = joint.edgeB.next;
    }

    joint.edgeB.prev = null;
    joint.edgeB.next = null;

    Joint.destroy(joint);

    assert (_jointCount > 0);
    --_jointCount;

    // If the joint prevents collisions, then flag any contacts for filtering.
    if (collideConnected == false) {
      ContactEdge edge = bodyB.contactList;
      while (edge != null) {
        if (edge.other == bodyA) {
          // Flag the contact for filtering at the next time step (where either
          // body is awake).
          edge.contact.flagForFiltering();
        }

        edge = edge.next;
      }
    }
  }

  /**
   * Destroy a rigid body given a definition. No reference to the definition
   * is retained. This function is locked during callbacks.
   *
   * warning: This automatically deletes all associated shapes.
   * warning: This function is locked during callbacks.
   */
  void destroyBody(Body body) {
    assert (_bodyCount > 0);
    assert (locked == false);
    if (locked) {
      return;
    }

    // Delete the attached joints.
    JointEdge je = body.jointList;
    while (je != null) {
      JointEdge je0 = je;
      je = je.next;
      if (_jointDestructionListener != null) {
        _jointDestructionListener(je0.joint);
      }

      destroyJoint(je0.joint);
    }
    body.jointList = null;

    // Delete the attached contacts.
    ContactEdge ce = body.contactList;
    while (ce != null) {
      ContactEdge ce0 = ce;
      ce = ce.next;
      _contactManager.destroy(ce0.contact);
    }
    body.contactList = null;

    Fixture f = body.fixtureList;
    while (f != null) {
      Fixture f0 = f;
      f = f.next;

      if (_fixtureDestructionListener != null) {
        _fixtureDestructionListener(f0);
      }

      f0.destroyProxy(_contactManager.broadPhase);
      f0.destroy();
      // TODO djm recycle fixtures (here or in that destroy method)
    }
    body.fixtureList = null;
    body.fixtureCount = 0;

    // Remove world body list.
    if (body.prev != null) {
      body.prev.next = body.next;
    }

    if (body.next != null) {
      body.next.prev = body.prev;
    }

    if (body == _bodyList) {
      _bodyList = body.next;
    }

    --_bodyCount;
  }

  /**
   * Take a time step. This performs collision detection, integration,
   * and constraint solution.
   *
   * param timeStep
   *   the amount of time to simulate, this should not vary.
   * param velocityIterations
   *   for the velocity constraint solver.
   * param positionIterations
   *   for the position constraint solver.
   */
  void step(num dt, int velocityIterations, int positionIterations) {

    // If new fixtures were added, we need to find the new contacts.
    if ((_flags & NEW_FIXTURE) == NEW_FIXTURE) {
      _contactManager.findNewContacts();
      _flags &= ~NEW_FIXTURE;
    }

    _flags |= LOCKED;

    timestep.dt = dt;
    timestep.velocityIterations = velocityIterations;
    timestep.positionIterations = positionIterations;
    if (dt > 0.0) {
      timestep.inv_dt = 1.0 / dt;
    } else {
      timestep.inv_dt = 0.0;
    }

    timestep.dtRatio = _inverseTimestep * dt;
    timestep.warmStarting = _warmStarting;

    // Update contacts. This is where some contacts are destroyed.
    _contactManager.collide();

    // Integrate velocities, solve velocity constraints, and integrate
    // positions.
    if (timestep.dt > 0.0) {
      solve(timestep);
    }

    // Handle TimeOfImpact events.
    if (_continuousPhysics && timestep.dt > 0.0) {
      solveTimeOfImpact();
    }

    if (timestep.dt > 0.0) {
      _inverseTimestep = timestep.inv_dt;
    }

    if ((_flags & CLEAR_FORCES) == CLEAR_FORCES) {
      clearForces();
    }

    _flags &= ~LOCKED;
  }

  /**
   * Call this after you are done with time steps to clear the forces.
   * You normally call this after each call to Step, unless you are
   * performing sub-steps. By default, forces will be automatically cleared,
   * so you don't need to call this function.
   *
   * see setAutoClearForces
   */
  void clearForces() {
    for (Body body = _bodyList; body != null; body = body.next) {
      body._force.splat(0.0);
      body._torque = 0.0;
    }
  }

  /**
   * Call this to draw shapes and other debug draw data.
   */
  void drawDebugData() {
    if (_debugDraw == null) {
      return;
    }

    final int drawFlags = _debugDraw.flags;

    if ((drawFlags & DebugDraw.e_shapeBit) == DebugDraw.e_shapeBit) {
      Transform xf = new Transform();
      Color3 color = new Color3();
      for (Body b = _bodyList; b != null; b = b.next) {
        xf.setFrom(b.originTransform);
        for (Fixture f = b.fixtureList; f != null; f = f.next) {
          if (b.active == false) {
            color.setFromRGBF(0.5, 0.5, 0.3);
            drawShape(f, xf, color);
          } else if (b.type == BodyType.STATIC) {
            color.setFromRGBF(0.5, 0.9, 0.3);
            drawShape(f, xf, color);
          } else if (b.type == BodyType.KINEMATIC) {
            color.setFromRGBF(0.5, 0.5, 0.9);
            drawShape(f, xf, color);
          } else if (b.awake == false) {
            color.setFromRGBF(0.9, 0.9, 0.9);
            drawShape(f, xf, color);
          } else {
            color.setFromRGBF(0.9, 0.7, 0.7);
            drawShape(f, xf, color);
          }
        }
      }
    }

    if ((drawFlags & DebugDraw.e_jointBit) == DebugDraw.e_jointBit) {
      for (Joint j = _jointList; j != null; j = j._next)
        drawJoint(j);
    }

    if ((drawFlags & DebugDraw.e_pairBit) == DebugDraw.e_pairBit) {
      Color3 color = new Color3.fromRGBF(0.3, 0.9, 0.9);
      for (Contact c = _contactManager.contactList; c != null; c = c.next) {
        cA.copyFrom(c.fixtureA.box.center);
        cB.copyFrom(c.fixtureB.box.center);

        _debugDraw.drawSegment(cA, cB, color);
      }
    }

    if ((drawFlags & DebugDraw.e_aabbBit) == DebugDraw.e_aabbBit) {
      Color3 color = new Color3.fromRGBF(0.9, 0.3, 0.9);

      for (Body b = _bodyList; b != null; b = b.next) {
        if (!b.active) {
          continue;
        }

        for (Fixture f = b.fixtureList; f != null; f = f.next) {
          AxisAlignedBox aabb = f.proxy.box;

          List<vec2> vs = new List<vec2>(4);
          vs[0] = new vec2(aabb.lowerBound.x, aabb.lowerBound.y);
          vs[1] = new vec2(aabb.upperBound.x, aabb.lowerBound.y);
          vs[2] = new vec2(aabb.upperBound.x, aabb.upperBound.y);
          vs[3] = new vec2(aabb.lowerBound.x, aabb.upperBound.y);

          if (0 != (drawFlags & DebugDraw.e_lineDrawingBit)) {
            _debugDraw.drawPolygon(vs, 4, color);
          } else {
            _debugDraw.drawSolidPolygon(vs, 4, color);
          }
        }
      }
    }

    if ((drawFlags & DebugDraw.e_centerOfMassBit) ==
        DebugDraw.e_centerOfMassBit) {
      Transform xf = new Transform();
      final Color3 color = new Color3.fromRGB(1, 0, 0);
      for (Body b = _bodyList; b != null; b = b.next) {
        xf.setFrom(b.originTransform);
        xf.position.copyFrom(b.worldCenter);
        _debugDraw.drawTransform(xf, color);
      }
    }
  }

  /**
   * Query the world for all fixtures that potentially overlap the
   * provided AABB.
   *
   * param callback
   *   a user implemented callback class.
   * param aabb
   *   the query box.
   */
  void queryAABB(QueryCallback callback, AxisAlignedBox aabb) {
    wqwrapper.broadPhase = _contactManager.broadPhase;
    wqwrapper.callback = callback;
    _contactManager.broadPhase.query(wqwrapper, aabb);
  }

  /**
   * Get the world contact list. With the returned contact, use Contact.getNext
   * to get the next contact in the world list. A null contact indicates the
   * end of the list.
   *
   * return the head of the world contact list.
   * warning contacts are
   */
  Contact get contactList => _contactManager.contactList;

  /**
   * Get the number of broad-phase proxies.
   */
  int get proxyCount => _contactManager.broadPhase.proxyCount;

  /**
   * Get the number of contacts (each may have 0 or more contact points).
   */
  int get contactCount => _contactManager.contactCount;

  /**
   * Is the world locked (in the middle of a time step).
   */
  bool get locked => (_flags & LOCKED) == LOCKED;

  /**
   * Set flag to control automatic clearing of forces after each time step.
   */
  void set autoClearForces(bool flag) {
    if (flag) {
      _flags |= CLEAR_FORCES;
    } else {
      _flags &= ~CLEAR_FORCES;
    }
  }

  Joint get jointList => _jointList;

  int get jointCount => _jointCount;

  /**
   * Get the flag that controls automatic clearing of forces after each time
   * step.
   */
  bool get autoClearForces => (_flags & CLEAR_FORCES) == CLEAR_FORCES;

  void solve(TimeStep timeStep) {
    // Size the  for the worst case.
    island.init(_bodyCount, _contactManager.contactCount, _jointCount,
        _contactManager.contactListener);

    // Clear all the island flags.
    for (Body b = _bodyList; b != null; b = b.next) {
      b.flags &= ~Body.ISLAND_FLAG;
    }
    for (Contact c = _contactManager.contactList; c != null; c = c.next) {
      c.flags &= ~Contact.ISLAND_FLAG;
    }
    for (Joint j = jointList; j != null; j = j._next) {
      j.islandFlag = false;
    }

    // Build and simulate all awake islands.
    int stackSize = _bodyCount;
    if (stack.length < stackSize) {
      stack = new List<Body>(stackSize);
    }

    for (Body seed = _bodyList; seed != null; seed = seed.next) {
      if ((seed.flags & Body.ISLAND_FLAG) == Body.ISLAND_FLAG) {
        continue;
      }

      if (seed.awake == false || seed.active == false) {
        continue;
      }

      // The seed can be dynamic or kinematic.
      if (seed.type == BodyType.STATIC) {
        continue;
      }

      // Reset island and stack.
      island.clear();
      int stackCount = 0;
      stack[stackCount++] = seed;
      seed.flags |= Body.ISLAND_FLAG;

      // Perform a depth first search (DFS) on the constraint graph.
      while (stackCount > 0) {
        // Grab the next body off the stack and add it to the island.
        Body b = stack[--stackCount];
        assert (b.active);
        island.addBody(b);

        // Make sure the body is awake.
        b.awake = true;

        // To keep islands as small as possible, we don't
        // propagate islands across static bodies.
        if (b.type == BodyType.STATIC) {
          continue;
        }

        // Search all contacts connected to this body.
        for (ContactEdge ce = b.contactList; ce != null; ce = ce.next) {
          Contact contact = ce.contact;

          // Has this contact already been added to an island?
          if ((contact.flags & Contact.ISLAND_FLAG) == Contact.ISLAND_FLAG) {
            continue;
          }

          // Is this contact solid and touching?
          if (contact.enabled == false || contact.touching == false) {
            continue;
          }

          // Skip sensors.
          bool sensorA = contact.fixtureA.isSensor;
          bool sensorB = contact.fixtureB.isSensor;
          if (sensorA || sensorB) {
            continue;
          }

          island.addContact(contact);
          contact.flags |= Contact.ISLAND_FLAG;

          Body other = ce.other;

          // Was the other body already added to this island?
          if ((other.flags & Body.ISLAND_FLAG) == Body.ISLAND_FLAG) {
            continue;
          }

          assert (stackCount < stackSize);
          stack[stackCount++] = other;
          other.flags |= Body.ISLAND_FLAG;
        }

        // Search all joints connect to this body.
        for (JointEdge je = b.jointList; je != null; je = je.next) {
          if (je.joint.islandFlag == true) {
            continue;
          }

          Body other = je.other;

          // Don't simulate joints connected to inactive bodies.
          if (other.active == false) {
            continue;
          }

          island.addJoint(je.joint);
          je.joint.islandFlag = true;

          if (((other.flags & Body.ISLAND_FLAG) == Body.ISLAND_FLAG)) {
            continue;
          }

          assert (stackCount < stackSize);
          stack[stackCount++] = other;
          other.flags |= Body.ISLAND_FLAG;
        }
      }

      island.solve(timeStep, _gravity, _allowSleep);

      // Post solve cleanup.
      for (int i = 0; i < island.bodyCount; ++i) {
        // Allow static bodies to participate in other islands.
        Body b = island.bodies[i];
        if (b.type == BodyType.STATIC) {
          b.flags &= ~Body.ISLAND_FLAG;
        }
      }
    }

    // Synchronize fixtures, check for out of range bodies.
    for (Body b = _bodyList; b != null; b = b.next) {
      // If a body was not in an island then it did not move.
      if ((b.flags & Body.ISLAND_FLAG) == 0) {
        continue;
      }

      if (b.type == BodyType.STATIC) {
        continue;
      }

      // Update fixtures (for broad-phase).
      b.synchronizeFixtures();
    }

    // Look for new contacts.
    _contactManager.findNewContacts();
  }

  void solveTimeOfImpact() {
    // Prepare all contacts.
    for (Contact c = _contactManager.contactList; c != null; c = c.next) {
      // Enable the contact
      c.flags |= Contact.ENABLED_FLAG;

      // Set the number of TimeOfImpact events for this contact to zero.
      c.toiCount = 0;
    }

    // Initialize the TimeOfImpact flag.
    for (Body body = _bodyList; body != null; body = body.next) {
      // Kinematic, and static bodies will not be affected by the TimeOfImpact
      // event.  If a body was not in an island then it did not move.
      if ((body.flags & Body.ISLAND_FLAG) == 0 || body.type
          == BodyType.KINEMATIC
          || body.type == BodyType.STATIC) {
        body.flags |= Body.TO_I_FLAG;
      }
      else {
        body.flags &= ~Body.TO_I_FLAG;
      }
    }

    // Collide non-bullets.
    for (Body body = _bodyList; body != null; body = body.next) {
      if ((body.flags & Body.TO_I_FLAG) == Body.TO_I_FLAG) {
        continue;
      }

      if (body.bullet == true) {
        continue;
      }

      solveTimeOfImpactGivenBody(body);

      body.flags |= Body.TO_I_FLAG;
    }

    // Collide bullets.
    for (Body body = _bodyList; body != null; body = body.next) {
      if ((body.flags & Body.TO_I_FLAG) == Body.TO_I_FLAG) {
        continue;
      }

      if (body.bullet == false) {
        continue;
      }

      solveTimeOfImpactGivenBody(body);

      body.flags |= Body.TO_I_FLAG;
    }
  }

  void solveTimeOfImpactGivenBody(Body body) {
    // Find the minimum contact.
    Contact toiContact = null;
    num toi = 1.0;
    Body toiOther = null;
    bool found;
    int count;
    int iter = 0;

    bool bullet = body.bullet;

    // Iterate until all contacts agree on the minimum TimeOfImpact. We have
    // to iterate because the TimeOfImpact algorithm may skip some intermediate
    // collisions when objects rotate through each other.
    do {
      count = 0;
      found = false;
      for (ContactEdge ce = body.contactList; ce != null; ce = ce.next) {
        if (ce.contact == toiContact) {
          continue;
        }

        Body other = ce.other;
        int type = other.type;

        // Only bullets perform TimeOfImpact with dynamic bodies.
        if (bullet == true) {
          // Bullets only perform TimeOfImpact with bodies that have their
          // TimeOfImpact resolved.
          if ((other.flags & Body.TO_I_FLAG) == 0) {
            continue;
          }

          // No repeated hits on non-static bodies
          if (type != BodyType.STATIC && (ce.contact.flags &
                Contact.BULLET_HIT_FLAG) != 0) {
            continue;
          }
        } else if (type == BodyType.DYNAMIC) {
          continue;
        }

        // Check for a disabled contact.
        Contact contact = ce.contact;
        if (contact.enabled == false) {
          continue;
        }

        // Prevent infinite looping.
        if (contact.toiCount > 10) {
          continue;
        }

        Fixture fixtureA = contact.fixtureA;
        Fixture fixtureB = contact.fixtureB;

        // Cull sensors.
        if (fixtureA.isSensor || fixtureB.isSensor) {
          continue;
        }

        Body bodyA = fixtureA.body;
        Body bodyB = fixtureB.body;

        // Compute the time of impact in interval [0, minTimeOfImpact]
        toiInput.proxyA.setFromShape(fixtureA.shape);
        toiInput.proxyB.setFromShape(fixtureB.shape);
        toiInput.sweepA.setFrom(bodyA.sweep);
        toiInput.sweepB.setFrom(bodyB.sweep);
        toiInput.tMax = toi;

        _pool.timeOfImpact.timeOfImpact(toiOutput, toiInput);

        if (toiOutput.state == TimeOfImpactOutputState.TOUCHING &&
            toiOutput.t < toi) {
          toiContact = contact;
          toi = toiOutput.t;
          toiOther = other;
          found = true;
        }

        ++count;
      }

      ++iter;
    } while (found && count > 1 && iter < 50);

    if (toiContact == null) {
      body.advance(1.0);
      return;
    }

    backup.setFrom(body.sweep);
    body.advance(toi);
    toiContact.update(_contactManager.contactListener);
    if (toiContact.enabled == false) {
      // Contact disabled. Backup and recurse.
      body.sweep.setFrom(backup);
      solveTimeOfImpactGivenBody(body);
    }

    ++toiContact.toiCount;

    // Update all the valid contacts on this body and build a contact island.
    if (contacts == null || contacts.length <
        Settings.MAX_TIME_OF_IMPACT_CONTACTS){
      contacts = new List<Contact>(Settings.MAX_TIME_OF_IMPACT_CONTACTS);
    }

    count = 0;
    for (ContactEdge ce = body.contactList; ce != null && count
        < Settings.MAX_TIME_OF_IMPACT_CONTACTS; ce = ce.next) {
      Body other = ce.other;
      int type = other.type;

      // Only perform correction with static bodies, so the
      // body won't get pushed out of the world.
      if (type == BodyType.DYNAMIC) {
        continue;
      }

      // Check for a disabled contact.
      Contact contact = ce.contact;
      if (contact.enabled == false) {
        continue;
      }

      Fixture fixtureA = contact.fixtureA;
      Fixture fixtureB = contact.fixtureB;

      // Cull sensors.
      if (fixtureA.isSensor || fixtureB.isSensor) {
        continue;
      }

      // The contact likely has some new contact points. The listener
      // gives the user a chance to disable the contact.
      if (contact != toiContact) {
        contact.update(_contactManager.contactListener);
      }

      // Did the user disable the contact?
      if (contact.enabled == false) {
        // Skip this contact.
        continue;
      }

      if (contact.touching == false) {
        continue;
      }

      contacts[count] = contact;
      ++count;
    }

    // Reduce the TimeOfImpact body's overlap with the contact island.
    toiSolver.initialize(contacts, count, body);

    num k_toiBaumgarte = 0.75;
    // bool solved = false;
    for (int i = 0; i < 20; ++i) {
      bool contactsOkay = toiSolver.solve(k_toiBaumgarte);
      if (contactsOkay) {
        // solved = true;
        break;
      }
    }

    if (toiOther.type != BodyType.STATIC) {
      toiContact.flags |= Contact.BULLET_HIT_FLAG;
    }
  }

  void drawShape(Fixture fixture, Transform xf, Color3 color) {
    switch (fixture.type) {
      case ShapeType.CIRCLE:
        final CircleShape circle = fixture.shape;

        // vec2 center = Mul(xf, circle.p);
        Transform.mulToOut(xf, circle.position, center);
        num radius = circle.radius;
        axis.copyFrom(xf.rotation.col0);

        if (0 != (_debugDraw.flags & DebugDraw.e_lineDrawingBit)) {
          _debugDraw.drawCircle(center, radius, color, axis);
        } else {
          _debugDraw.drawSolidCircle(center, radius, color, axis);
        }
        break;

      case ShapeType.POLYGON:
        final PolygonShape poly = fixture.shape;
        int vertexCount = poly.vertexCount;
        assert (vertexCount <= Settings.MAX_POLYGON_VERTICES);
        List<vec2> vertices =
            new List<vec2>(vertexCount);
        for (int i = 0; i < vertexCount; i++) {
          vertices[i] = new vec2.zero();
        }

        for (int i = 0; i < vertexCount; ++i) {
          assert(poly.vertices[i] != null);
          assert(vertices[i] != null);
          Transform.mulToOut(xf, poly.vertices[i], vertices[i]);
        }

        if (0 != (_debugDraw.flags & DebugDraw.e_lineDrawingBit)) {
          _debugDraw.drawPolygon(vertices, vertexCount, color);
        } else {
          if (vertexCount > 2) {
            _debugDraw.drawSolidPolygon(vertices, vertexCount, color);
          } else {
            _debugDraw.drawPolygon(vertices, vertexCount, color);
          }
        }
        break;
    }
  }

  /** Draws a joint for debugging purposes. */
  //TODO(gregbglw): Draw more types of joints.
  void drawJoint(Joint joint) {
    Body bodyA = joint.bodyA;
    Body bodyB = joint.bodyB;
    Transform xf1 = bodyA.originTransform;
    Transform xf2 = bodyB.originTransform;
    vec2 x1 = new vec2.copy(xf1.position);
    vec2 x2 = new vec2.copy(xf2.position);
    vec2 p1 = new vec2.zero();
    vec2 p2 = new vec2.zero();
    joint.getAnchorA(p1);
    joint.getAnchorB(p2);

    // Set the drawing color.
    Color3 color = new Color3.fromRGBF(0.5, 0.3, 0.3);

    switch (joint.type) {
      case JointType.DISTANCE :
        _debugDraw.drawSegment(p1, p2, color);
        break;

      case JointType.PULLEY :
        throw new UnimplementedError();
        //vec2 s1 = pulley.getGroundAnchorA();
        //vec2 s2 = pulley.getGroundAnchorB();
        //_debugDraw.drawSegment(s1, p1, color);
        //_debugDraw.drawSegment(s2, p2, color);
        //_debugDraw.drawSegment(s1, s2, color);
        //break;

      case JointType.FRICTION:
        _debugDraw.drawSegment(x1, x2, color);
        break;

      case JointType.CONSTANT_VOLUME :
        // Nothing to see here.
      case JointType.MOUSE :
        // Don't draw anything for mouse. Already have cursor!
        break;
      default :
        vec2 p1t = new vec2.copy(p1); // copies since drawSegment modifies
        vec2 p2t = new vec2.copy(p2);
        _debugDraw.drawSegment(x1, p1, color);
        _debugDraw.drawSegment(p1t, p2, color);
        _debugDraw.drawSegment(x2, p2t, color);
        break;
    }
  }
}

class WorldQueryWrapper implements TreeCallback {
  BroadPhase broadPhase;
  QueryCallback callback;

  WorldQueryWrapper() { }

  bool treeCallback(DynamicTreeNode node) {
    Fixture fixture = node.userData;
    return callback.reportFixture(fixture);
  }
}

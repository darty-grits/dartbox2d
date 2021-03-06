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

part of racer;

class Car {
  Car(World world) {
    final BodyDef def = new BodyDef();
    def.type = BodyType.DYNAMIC;
    _body = world.createBody(def);
    _body.userData = "Car";
    _body.angularDamping = 3;

    final List<vec2> vertices = new List<vec2>(8);
    vertices[0] = new vec2( 1.5, 0.0);
    vertices[1] = new vec2( 3.0, 2.5);
    vertices[2] = new vec2( 2.8, 5.5);
    vertices[3] = new vec2( 1.0, 10.0);
    vertices[4] = new vec2(-1.0, 10.0);
    vertices[5] = new vec2(-2.8, 5.5);
    vertices[6] = new vec2(-3.0, 2.5);
    vertices[7] = new vec2(-1.5, 0.0);

    final PolygonShape shape = new PolygonShape();
    shape.setFrom(vertices, vertices.length);

    final Fixture fixture = _body.createFixtureFromShape(shape, 0.1);

    final RevoluteJointDef jointDef = new RevoluteJointDef();
    jointDef.bodyA = _body;
    jointDef.enableLimit = true;
    jointDef.lowerAngle = 0.0;
    jointDef.upperAngle = 0.0;
    jointDef.localAnchorB.splat(0.0);

    _blTire = new Tire(world, _maxForwardSpeed, _maxBackwardSpeed,
        _backTireMaxDriveForce, _backTireMaxLateralImpulse);
    jointDef.bodyB = _blTire._body;
    jointDef.localAnchorA.setComponents(-3.0, 0.75);
    world.createJoint(jointDef);

    _brTire = new Tire(world, _maxForwardSpeed, _maxBackwardSpeed,
        _backTireMaxDriveForce, _backTireMaxLateralImpulse);
    jointDef.bodyB = _brTire._body;
    jointDef.localAnchorA.setComponents(3.0, 0.75);
    world.createJoint(jointDef);

    _flTire = new Tire(world, _maxForwardSpeed, _maxBackwardSpeed,
        _frontTireMaxDriveForce, _frontTireMaxLateralImpulse);
    jointDef.bodyB = _flTire._body;
    jointDef.localAnchorA.setComponents(-3.0, 8.5);
    _flJoint = world.createJoint(jointDef);

    _frTire = new Tire(world, _maxForwardSpeed, _maxBackwardSpeed,
        _frontTireMaxDriveForce, _frontTireMaxLateralImpulse);
    jointDef.bodyB = _frTire._body;
    jointDef.localAnchorA.setComponents(3.0, 8.5);
    _frJoint = world.createJoint(jointDef);
  }

  void _updateFriction() {
    _blTire.updateFriction();
    _brTire.updateFriction();
    _flTire.updateFriction();
    _frTire.updateFriction();
  }

  void _updateDrive(int controlState) {
    _blTire.updateDrive(controlState);
    _brTire.updateDrive(controlState);
    _flTire.updateDrive(controlState);
    _frTire.updateDrive(controlState);
  }

  void update(num time, int controlState) {
    _updateFriction();
    _updateDrive(controlState);

    // Steering.
    double desiredAngle = 0.0;
    switch (controlState & (ControlState.LEFT | ControlState.RIGHT)) {
      case ControlState.LEFT: desiredAngle = _lockAngle; break;
      case ControlState.RIGHT: desiredAngle = -_lockAngle; break;
    }
    final double turnPerTimeStep = _turnSpeedPerSec * 1000 / time;
    final double angleNow = _flJoint.jointAngle;
    double angleToTurn = desiredAngle - angleNow;
    angleToTurn = clamp(angleToTurn, -turnPerTimeStep, turnPerTimeStep);
    final double angle = angleNow + angleToTurn;
    _flJoint.setLimits(angle, angle);
    _frJoint.setLimits(angle, angle);
  }

  final double _maxForwardSpeed = 250.0;
  final double _maxBackwardSpeed = -40.0;
  final double _backTireMaxDriveForce = 300.0;
  final double _frontTireMaxDriveForce = 500.0;
  final double _backTireMaxLateralImpulse = 8.5;
  final double _frontTireMaxLateralImpulse = 7.5;

  final double _lockAngle = (math.PI / 180) * 35;
  final double _turnSpeedPerSec = (math.PI / 180) * 160;

  Body _body;
  Tire _blTire, _brTire, _flTire, _frTire;
  RevoluteJoint _flJoint, _frJoint;
}

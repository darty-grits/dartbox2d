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

class Tire {
  Tire(World world, this._maxForwardSpeed, this._maxBackwardSpeed,
      this._maxDriveForce, this._maxLateralImpulse)
      : _groundAreas = new Set<GroundArea>() {
    BodyDef def = new BodyDef();
    def.type = BodyType.DYNAMIC;
    _body = world.createBody(def);
    _body.userData = "Tire";

    PolygonShape polygonShape = new PolygonShape();
    polygonShape.setAsBox(0.5, 1.25);
    Fixture fixture = _body.createFixtureFromShape(polygonShape, 1.0);
    fixture.userData = this;

    _currentTraction = 1.0;
  }

  void addGroundArea(GroundArea ga) {
    // TODO: If http://dartbug.com/4210 is fixed, check the return value of add
    // before calling _updateTraction().
    _groundAreas.add(ga);
    _updateTraction();
  }

  void removeGroundArea(GroundArea ga) {
    if (_groundAreas.remove(ga)) {
      _updateTraction();
    }
  }

  void updateFriction() {
    final Vector impulse = _lateralVelocity.mulLocal(-_body.mass);
    if (impulse.length > _maxLateralImpulse) {
      impulse.mulLocal(_maxLateralImpulse / impulse.length);
    }
    _body.applyLinearImpulse(impulse.mulLocal(_currentTraction),
                             _body.worldCenter);
    _body.applyAngularImpulse(
        0.1 * _currentTraction * _body.inertia * (-_body.angularVelocity));

    Vector currentForwardNormal = _forwardVelocity;
    final double currentForwardSpeed = currentForwardNormal.length;
    currentForwardNormal.normalize();
    final double dragForceMagnitude = -2 * currentForwardSpeed;
    _body.applyForce(
        currentForwardNormal.mulLocal(_currentTraction * dragForceMagnitude),
        _body.worldCenter);
  }

  void updateDrive(int controlState) {
    double desiredSpeed = 0.0;
    switch (controlState & (ControlState.UP | ControlState.DOWN)) {
      case ControlState.UP: desiredSpeed = _maxForwardSpeed; break;
      case ControlState.DOWN: desiredSpeed = _maxBackwardSpeed; break;
      default: return;
    }

    Vector currentForwardNormal = _body.getWorldVector(new Vector(0.0, 1.0));
    final double currentSpeed =
        Vector.dot(_forwardVelocity, currentForwardNormal);
    double force = 0.0;
    if (desiredSpeed < currentSpeed) {
      force = -_maxDriveForce;
    } else if (desiredSpeed > currentSpeed) {
      force = _maxDriveForce;
    }

    if (force.abs() > 0) {
      _body.applyForce(currentForwardNormal.mulLocal(_currentTraction * force),
                       _body.worldCenter);
    }
  }

  void updateTurn(int controlState) {
    double desiredTorque = 0.0;
    switch (controlState & (ControlState.LEFT | ControlState.RIGHT)) {
      case ControlState.LEFT: desiredTorque = 15.0; break;
      case ControlState.RIGHT: desiredTorque = -15.0; break;
    }
    _body.applyTorque(desiredTorque);
  }

  void _updateTraction() {
    if (_groundAreas.isEmpty()) {
      _currentTraction = 1.0;
    } else {
      _currentTraction = 0.0;
      _groundAreas.forEach((element) {
        _currentTraction = Math.max(_currentTraction, element.frictionModifier);
      });
    }
  }

  Vector get _lateralVelocity {
    final Vector currentRightNormal = _body.getWorldVector(_worldLeft);
    return currentRightNormal.mulLocal(Vector.dot(currentRightNormal,
                                                  _body.linearVelocity));
  }

  Vector get _forwardVelocity {
    final Vector currentForwardNormal = _body.getWorldVector(_worldUp);
    return currentForwardNormal.mulLocal(Vector.dot(currentForwardNormal,
                                                    _body.linearVelocity));
  }

  Body _body;
  final double _maxForwardSpeed;
  final double _maxBackwardSpeed;
  final double _maxDriveForce;
  final double _maxLateralImpulse;
  double _currentTraction;
  final Set<GroundArea> _groundAreas;

  // Cached Vectors to reduce unnecessary object creation.
  final Vector _worldLeft = new Vector(1.0, 0.0);
  final Vector _worldUp = new Vector(0.0, 1.0);
}

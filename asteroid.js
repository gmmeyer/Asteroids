(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  // MovingObject = require('./moving_object.js')
  // Game = require('./game.js')
  Function.prototype.inherits = function(SuperClass){
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate;
  };

  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, color){
    Asteroids.MovingObject.call(this, pos, vel, radius, color);
  }

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLOR = "green";
  Asteroid.RADIUS = 10;

  Asteroid.randomAsteroid = function(dimX,dimY) {
    pos = ['x','y'];
    pos[0] = Math.random() * (dimX[1] - dimX[0]) + dimX[0];
    pos[1] = Math.random() * (dimY[1] - dimY[0]) + dimY[0];
    new_asteroid = new Asteroid(pos, _randomVec(), Asteroid.RADIUS, Asteroid.COLOR);
    return new_asteroid;
  }

  _randomVec = function(){
    thisFast = 2;
    vel = ['delta_x/t', 'delta_y/t'];
    vel[0] = Math.random() * (thisFast + thisFast) - thisFast;
    vel[1] = Math.random() * (thisFast + thisFast) - thisFast;
    return vel;
  }

})(this);


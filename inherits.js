Function.prototype.inherits = function(SuperClass){
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate;
};

//
//
// function MovingObject() {};
//
// function Ship () {};
// Ship.inherits(MovingObject);
//
// function Asteroid () {};
// Asteroid.inherits(MovingObject);
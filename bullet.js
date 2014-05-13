(function(root){

  var Asteroids = root.Asteroids = (root.Asteroids || {})

  Function.prototype.inherits = function(SuperClass){
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate;
  };


  var Bullet = Asteroids.Bullet = function (pos, vel, radius, color) {
    Asteroids.MovingObject.call(this, pos, vel, radius, color);
    this.decay = 0;
  };

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.RADIUS = 3;
  Bullet.COLOR = 'orange';

  Bullet.placeBullet = function(magX, magY, x, y){
  	var pos = [x,y]
    var vel = [magX * 10, magY * 10]
    var newBullet = new Bullet(pos, vel, Bullet.RADIUS, Bullet.COLOR);
    return newBullet;
  };

})(this)
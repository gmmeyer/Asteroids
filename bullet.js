(function(root){

  var Asteroids = root.Asteroids = (root.Asteroids || {})

  Function.prototype.inherits = function(SuperClass){
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate;
  };


  var Bullet = Asteroids.Bullet = function (pos, vel, radius, color) {
    Asteroids.MovingObject.call(this, pos, vel, radius, color)
  };

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype = Object.create(Asteroids.MovingObject.prototype);

  Bullet.RADIUS = 5;
  Bullet.COLOR = 'orange';

  Bullet.placeBullet = function(magX, magY, x, y){
  	var pos = [x,y]
    var vel = [magX * 5, magY * 5]
    // console.log(pos);
    console.log(vel);
    var newBullet = new Bullet(pos, vel, Bullet.RADIUS, Bullet.COLOR);
    // console.log(newBullet);
    return newBullet;
  };

})(this)
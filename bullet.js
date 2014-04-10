(function(root){
  var Asteroids = root.Asteroids = {root.Asteroids || {}}

  var Bullet = Asteroids.Bullet = function(){
    Asteroids.MovingObject.call(this, pos, vel, radius, color)
  }

  Bullet.prototype = Object.create(Asteroids.MovingObject.prototype);

  Bullet.placeBullet = function(magX, magY, x, y){
  	var pos = [x,y]
  	var vel = [magX * 5, magY * 5]
    var newBullet = new Bullet(pos, vel, Ship.RADIUS, Ship.COLOR);
    return newBullet;
  }




})(this)
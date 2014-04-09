(function(root){
  var Asteroids = root.Asteroids = {root.Asteroids || {}}

  var Bullet = Asteroids.Bullet = function(){
    Asteroids.MovingObject.call(this, pos, vel, radius, color)
  }

  Bullet.prototype = Object.create(Asteroids.MovingObject.prototype);




})(this)
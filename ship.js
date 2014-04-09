(function(root){

  var Asteroids = root.Asteroids = (root.Asteroids || {})

  Function.prototype.inherits = function(SuperClass){
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate;
  };

  var Ship = Asteroids.Ship = function(pos, vel, radius, color){
    Asteroids.MovingObject.call(this, pos, vel, radius, color);
  }

  Ship.RADIUS = 10;
  Ship.COLOR = 'red';

  Ship.placeShip = function(x,y){
    pos = [x/2,y/2];
    var newShip = new Ship(pos, [0,0], Ship.RADIUS, Ship.COLOR);
    return newShip;
  }

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.fireBullet = function(){
    var ship_speed = Math.sqrt(Math.pow(this.vel[0],2) + Math.pow(this.vel[1],2))
    var bullet_vector = [this.vel[0] / ship_speed, this.vel[1] / ship_speed]

  }



  //Ship.prototype = Object.create(Asteroids.MovingObject.prototype);

  Ship.prototype.power = function(impulse){
    new_vel = [,]
    new_vel[0] = this.vel[0] + impulse[0]
    new_vel[1] = this.vel[1] + impulse[1]
    if( new_vel[0] < 3 && new_vel[0] > -3 ){
      this.vel[0] += impulse[0]
    }
    if(new_vel[1]< 3 && new_vel[1] > -3){
      this.vel[1] += impulse[1]
    }
    //console.log(impulse)
  }

  // Ship.prototype.draw = function(ctx){
  //   ctx.fillStyle = this.color;
  //   ctx.beginPath();
  //
  //   ctx.arc(
  //     this.pos[0],
  //     this.pos[1],
  //     this.radius,
  //     0,
  //     2*Math.PI,
  //     false
  //   );
  //
  //   ctx.fill();
  // }
})(this)
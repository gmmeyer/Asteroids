(function(root){

  var Asteroids = root.Asteroids = (root.Asteroids || {})

  Function.prototype.inherits = function(SuperClass){
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate;
  };

  var Ship = Asteroids.Ship = function(pos, vel, radius, color){
    Asteroids.MovingObject.call(this, pos, vel, radius, color);
    this.shipSpeed = 0
    this.direction = [0,1]
  }

  Ship.RADIUS = 10;
  Ship.COLOR = 'red';

  Ship.placeShip = function(x,y){
    pos = [x/2,y/2];
    var newShip = new Ship(pos, [0,0], Ship.RADIUS, Ship.COLOR);
    return newShip;
  }

  Ship.inherits(Asteroids.MovingObject);



  //fire bullet
  Ship.prototype.fireBullet = function() {
    return Asteroids.Bullet.placeBullet(this.vel[0],this.vel[1],this.pos[0],this.pos[1])
    // var bulletVector = [this.vel[0] / this.shipSpeed, this.vel[1] / this.shipSpeed]
    // if(this.vel === [0,0]){
    //   return;
    // }
    // else{
    //   return Asteroids.Bullet.placeBullet(bulletVector[0],bulletVector[1],this.pos[0],this.pos[1])
    // }
  }

  Ship.prototype.power = function(impulse){
    new_vel = [,]
    new_vel[0] = this.vel[0] + impulse[0]
    new_vel[1] = this.vel[1] + impulse[1]
    if( new_vel[0] < 4 && new_vel[0] > -4 ){
      this.vel[0] += impulse[0]
    }
    if(new_vel[1]< 4 && new_vel[1] > -4){
      this.vel[1] += impulse[1]
    }

    this.shipSpeed = Math.sqrt(Math.pow(this.vel[0],2) + Math.pow(this.vel[1],2));
    if(this.shipSpeed === 0){
      this.direction = this.direction;
    }
    else{
      this.direction[0] = this.vel[0] / this.shipSpeed
      this.direction[1] = this.vel[1] / this.shipSpeed
    }

  }

  // Ship.prototype.draw = function(ctx){
  //   ctx.strokeStyle = this.color;

  //   if(this.direction === [0,0]){
  //     var angle = 0
  //   }
  //   else if (this.vel[1] == 0){
  //     var angle = 0
  //   } else {
  //     var angle = Math.acos(this.vel[1]/(this.direction[0]*this.direction[1]))
  //   }

  //   console.log(angle);

  //   var moveTo = [this.pos[0] + Math.cos(angle)*this.direction[0]*Ship.RADIUS,
  //                   this.pos[1] + Math.cos(angle)*this.direction[1]*Ship.RADIUS];

  //   var bottomRight = [this.pos[0] + Math.cos(2.4+angle)*this.direction[0]*Ship.RADIUS, 
  //                   this.pos[1] + Math.cos(2.4+angle)*this.direction[1]*Ship.RADIUS];

  //   var bottomLeft = [this.pos[0] + Math.cos(3.84*angle)*this.direction[0]*Ship.RADIUS, 
  //                   this.pos[1] + Math.cos(3.84*angle)*this.direction[1]*Ship.RADIUS];

  //   console.log(moveTo);
  //   console.log(bottomRight);
  //   console.log(bottomLeft);
    
  //   ctx.beginPath();
  //   ctx.moveTo(moveTo[0],moveTo[1]);
  //   ctx.lineTo(bottomRight[0],bottomRight[1]);
  //   ctx.lineTo(bottomLeft[0],bottomRight[1]);
  //   ctx.closePath();
    
  //   ctx.stroke();
  // }
})(this)
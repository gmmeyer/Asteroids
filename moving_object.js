(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  // Asteroid = require('./asteroid.js')
  // Game = require('./game.js')

  var MovingObject = Asteroids.MovingObject = function(pos,vel,radius,color){
    //pos[x,y]
    //vel[delta_x/t, delta_y/t]
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  _offScreen = function(pos, min, max){
    if(pos < min){
      pos = max
    }
    else if(pos > max ){
      pos = min
    } else {
      pos = pos
    }
    return pos
  }

  MovingObject.prototype.move = function(x_max, y_max){
    var newPos = [,]
    newPos[0] = this.pos[0] + this.vel[0];
    newPos[1] = this.pos[1] + this.vel[1];
    if (newPos[0] === NaN || newPos[1] === NaN){
      console.log('wut')
    }
    newPos[0] = _offScreen(newPos[0], 0, x_max)
    newPos[1] = _offScreen(newPos[1], 0, y_max)
    //console.log(newPos)

    this.pos = newPos
  }

  MovingObject.prototype.draw = function(ctx){
    ctx.strokeStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2*Math.PI,
      false
    );

    ctx.stroke();
  }

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var xSide = Math.pow((otherObject.pos[0] - this.pos[0]), 2);
    var ySide = Math.pow((otherObject.pos[1] - this.pos[1]), 2);
    var dist = Math.sqrt(xSide + ySide);
    var trueDist = dist - (otherObject.radius + this.radius);
    if (trueDist > 0){
      return false;
    } else{
      return true;
    }
  }

})(this);

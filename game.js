(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  // Asteroid = require('./asteroid.js')
  // MovingObject = require('./moving_object.js')

  var Game = Asteroids.Game = function(ctx, numAsteroids){
    this.ctx = ctx;
    this.asteroids = [];
    this.numAsteroids = numAsteroids;
    this.intervalID = false
    this.ship = Asteroids.Ship.placeShip(Game.DIM_X, Game.DIM_Y);
    //return this.Game
  }

  Game.DIM_X = 700;
  Game.DIM_Y = 700;
  Game.FPS = 50;

  // Game.DIM_X = function(){
  //   return 500;
  // }
  //
  // Game.DIM_Y = function(){
  //   return 500;
  // }

  Game.prototype.addAsteroids = function(numAsteroids){
    for(i = 0; i < numAsteroids; i++){
      this.asteroids.push( Asteroids.Asteroid.randomAsteroid([0,Game.DIM_X], [0, Game.DIM_Y]) );
    }
    return this.asteroids;
  }

  Game.prototype.draw = function(){
    var ctx = this.ctx.getContext("2d");
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,Game.DIM_X,Game.DIM_Y);
    // ctx.fillRect();
    // ctx.strokeStyle = 'black'
    // ctx.fill()
    for(i=0; i<this.asteroids.length; i++){
      this.asteroids[i].draw(ctx);
    }
    this.ship.draw(ctx);
  }

  Game.prototype.move = function(){
    this.ship.move(Game.DIM_X,Game.DIM_Y);
    for(i=0; i < this.asteroids.length; i++){
      this.asteroids[i].move(Game.DIM_X,Game.DIM_Y);
    }
  }

  Game.prototype.step = function(){
    this.bindKeyHandlers();
    //console.log(this.ship.vel)
    this.move();
    this.draw();
    if(key.isPressed("M")) alert('shift is pressed, OMGZ!');
    this.checkCollisions();
    //this.addAsteroids(this.numAsteroids);
  }

  Game.prototype.pause = function(){
    if(this.intervalID){
      clearInterval(this.invervalID);
      this.intervalID = false;
    }
    else{
      game = this
      this.intervalID = setInterval(game.step.bind(game), Game.FPS);
    }

  }

  Game.prototype.start = function(){
    var game = this;
    this.addAsteroids(this.numAsteroids);
    this.intervalID = setInterval(game.step.bind(game), Game.FPS);
  }

  Game.prototype.checkCollisions = function(){
    for(i=0; i<this.asteroids.length; i++){
      if(this.ship.isCollidedWith(this.asteroids[i])){
        alert ("GAME OVER. LUSER LOSES.");
      }
    }
  }

  Game.prototype.bindKeyHandlers = function(){
    //if()
  //   key('W',game_name.ship.power([0,1]))
    //console.log(this._directionKey)
    var vector = this._directionKey()
    if(!(vector === [0,0])){
      var vector_speed = Math.sqrt(Math.pow(vector[0],2) + Math.pow(vector[1],2))
      vector = [vector[0] / vector_speed,vector[1]/ vector_speed]
      console.log(vector)
      this.ship.power(vector)
    }
    if(key.isPressed("Space")){
      this.ship.power([1,0]);
    }
    if(key.isPressed("end")){
      this.pause();
    }

  }

  Game.prototype._directionKey = function(){
    dir = [0,0]
    if(key.isPressed("W") || key.isPressed("Up")){
      dir[1] += .5;
    }
    if(key.isPressed("A") || key.isPressed("Left")){
      dir[0] += -.5;
    }
    if(key.isPressed("S") || key.isPressed("Right")){
      dir[1] += -.5;
    }
    if(key.isPressed("D") || key.isPressed("Down")){
      dir[0] += .5;
    }
    //console.log(dir)
    return dir
  }


})(this);


// (function(global){
//   bindKeyHandlers(game_name){
//     key('W',this.ship.power([0,1]))
//     key(38,this.ship.power([0,1]))
//   }
// }
(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx, numAsteroids){
    this.ctx = ctx;
    this.asteroids = [];
    this.numAsteroids = numAsteroids;
    this.intervalID = false
    this.ship = Asteroids.Ship.placeShip(Game.DIM_X, Game.DIM_Y);
    this.bullets = [];
    //return this.Game
  }

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.FPS = 50;

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
    for(i=0; i<this.bullets.length; i++){
      this.bullets[i].draw(ctx);
    }
  }

  Game.prototype.move = function(){
    this.ship.move(Game.DIM_X,Game.DIM_Y);
    for(i=0; i < this.asteroids.length; i++){
      this.asteroids[i].move(Game.DIM_X,Game.DIM_Y);
    }
  }

  Game.prototype.step = function(){
    this.bindKeyHandlers();
    this.move();
    this.draw();
    this.checkCollisions();
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
        this.ship = Asteroids.Ship.placeShip(Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y);
      }
    }
  }

  Game.prototype.bindKeyHandlers = function(){
    var vector = this._directionKey()
    if(!(vector === [0,0])){
      var vector_speed = Math.sqrt(Math.pow(vector[0],2) + Math.pow(vector[1],2))
      vector[0] = vector[0]/vector_speed
      vector[1] = vector[1]/vector_speed
      this.ship.power(vector)
    }

  }

  Game.prototype._directionKey = function(){
    $(document.body).on('keydown', function(e) {
      switch (e.which) {
        // key code for left arrow
        case 32:
          console.log(e)
          e.preventDefault()
      }
    });
    dir = [0,0]
    if(key.isPressed("W") || key.isPressed("Up")){
      dir[1] -= .5;
    }
    if(key.isPressed("A") || key.isPressed("Left")){
      dir[0] -= .5;
    }
    if(key.isPressed("S") || key.isPressed("Right")){
      dir[1] += .5;
    }
    if(key.isPressed("D") || key.isPressed("Down")){
      dir[0] += .5;
    }
    if(key.isPressed('space')) {
      // .stopPropagation();
      this.bullets.push(this.ship.fireBullet());
      if(this.bullets.length > 10){
        this.bullets.shift()
      }
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
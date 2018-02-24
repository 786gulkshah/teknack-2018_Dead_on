            var gameState12=function(game){
                console.log("Hard_Play");
            }
            gameState12.prototype={
                preload : preload12,
                create : create12,
                update : update12,
                createTimer: createTimer1,
                 updateTimer: updateTimer1
            }; 

        function preload12(){
             game.load.image('background', 'assets/bgm6.jpg');
  game.load.image('arrow', 'assets/arroww.png');
   game.load.image('ground', 'assets/platform.png');
   game.load.image('bow','assets/bow3.png');
   game.load.audio('collide',['assets/audio/collide.mp3', 'assets/audio/collide.ogg']);
    game.load.image('board','assets/ball14.png');
            
        }

        var arrow,platforms;
var bulletPool,boardHit3,boardHit1,boardHit2;
var diamond1,diamond2,diamond3;
var score3=0,result;


        function create12(){

            game.scale.pageAlignVertically = true;
            game.scale.pageAlignHorizontally = true;
            game.scale.setShowAll();
            game.scale.refresh();

  game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'background');
 sound = game.add.audio('collide');
 platforms = game.add.group();
 platforms.enableBody = true;

//left side
var ground = platforms.create(0, 0,'ground');
 ground.scale.setTo(0.01, 20);
ground.body.immovable = true;

//top 
var ground1=platforms.create(0,0,'ground');
ground1.scale.setTo(2, 0.08);
ground1.body.immovable = true;
//right side
var ground2=platforms.create(game.world.width-4,0,'ground');
ground2.scale.setTo(0.3, 20);
ground2.body.immovable = true;


//bottom
var ground3=platforms.create(0,game.world.height -5,'ground');
ground3.scale.setTo(2, 2);
ground3.body.immovable = true;


     diamond1 = game.add.group();
       diamond1.enableBody = true;

  diamond2 = game.add.group();
     diamond2.enableBody = true;

     diamond3 = game.add.group();
     diamond3.enableBody = true;

      boardHit1 = diamond1.create(500, 50, 'board');
        boardHit1.body.gravity.y = 300;
             boardHit1.body.bounce.y = 1;
             boardHit1.scale.setTo(0.5,0.5);
         
         boardHit2 = diamond2.create(550, 50, 'board');
        boardHit2.body.gravity.y = 300;
             boardHit2.body.bounce.y = 1;
        boardHit2.scale.setTo(1,1);

             boardHit3 = diamond3.create(400, 50, 'board');
        boardHit3.body.gravity.y = 300;
             boardHit3.body.bounce.y = 1;
             boardHit3.scale.setTo(1.5,1.5);

   game.physics.enable(diamond1, Phaser.Physics.ARCADE); 

   game.physics.enable(diamond2, Phaser.Physics.ARCADE); 

   game.physics.enable(diamond3, Phaser.Physics.ARCADE); 

    SHOT_DELAY = 900; // milliseconds (10 bullets/3 seconds)
    BULLET_SPEED = 500; // pixels/second
    NUMBER_OF_BULLETS = 1;
    GRAVITY = 980; // pixels/second/second

    // Create an object representing our gun
    gun = game.add.sprite(70, 450, 'bow');

    // Set the pivot point to the center of the gun
    gun.anchor.setTo(0.5, 0.5);

    // Create an object pool of bullets
    bulletPool = game.add.group();
    for(var i = 0; i < NUMBER_OF_BULLETS; i++) {
        // Create each bullet and add it to the group.
         bullet = game.add.sprite(0, 0, 'arrow');
bullet.scale.setTo(1.8,1.2);
        bulletPool.add(bullet);

        // Set its pivot point to the center of the bullet
        bullet.anchor.setTo(0.5, 0.5);

        // Enable physics on the bullet
        game.physics.enable(bullet, Phaser.Physics.ARCADE);

        // Set its initial state to "dead".
        bullet.kill();
    }
    game.input.activePointer.x = game.width/2;
    game.input.activePointer.y = game.height/2 - 100;
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });

    var me = this;
 
    me.startTime = new Date();
    me.totalTime = 120;
    me.timeElapsed = 0;
 
    me.createTimer();
 
    me.gameTimer = game.time.events.loop(100, function(){
        me.updateTimer();
    });

        }

        function update12(){
            var me=this;
   game.physics.arcade.collide(diamond1, platforms, function(diamond, platforms) {
        //gotHit(bullet,diamond)
        console.log("board ground");

        //bullet.kill();
    }, null, this);
game.physics.arcade.collide(diamond2, platforms, function(diamond, platforms) {
        //gotHit(bullet,diamond)
        console.log("board ground");

        //bullet.kill();
    }, null, this);
game.physics.arcade.collide(diamond3, platforms, function(diamond, platforms) {
        //gotHit(bullet,diamond)
        console.log("board ground");

        //bullet.kill();
    }, null, this);

 game.physics.arcade.collide(bullet, platforms, function(bullet, platforms) {
        //gotHit(bullet,diamond)
        console.log("bullet ground");

        bullet.kill();
    }, null, this);
  /*  game.physics.arcade.collide(bullet, diamond, function(bullet, diamond) {
        gotHit4(bullet,boardHit1);
gotHit2(bullet,boardHit2);
gotHit3(bullet,boardHit3);

         bullet.kill();
         boardHit1.kill();
         boardHit2.kill();
         boardHit3.kill();
         
          moveBoard();
    }, null, this);
*/
game.physics.arcade.collide(bullet,diamond1,function (bullet,boardHit1) {
gotHit4(bullet,boardHit1);
bullet.kill();
         boardHit1.kill();

      moveBoard1();
  // body...
},null,this);
game.physics.arcade.collide(bullet,diamond2,function (bullet,boardHit2) {
gotHit2(bullet,boardHit2);
bullet.kill();
         boardHit2.kill();
         moveBoard2();
  // body...
},null,this);

game.physics.arcade.collide(bullet,diamond3,function (bullet,boardHit3) {
gotHit3(bullet,boardHit3);
bullet.kill();
         boardHit3.kill();
         moveBoard3();
  // body...
},null,this);

    // Rotate all living bullets to match their trajectory
    bulletPool.forEachAlive(function(bullet) {
        bullet.rotation = Math.atan2(bullet.body.velocity.y, bullet.body.velocity.x);
    });
    gun.rotation = game.physics.arcade.angleToPointer(gun);

    // Shoot a bullet
    if (game.input.activePointer.isDown) {
        shootBullet();
    }
    if(me.timeElapsed >= me.totalTime){
    //Do what you need to do
    game.state.start('gameState14');
}
        }

function moveBoard1() {
 var p =Math.random()*100;
    var q =Math.random()*200;
boardHit1 = diamond1.create(500+q, 50+p, 'board');
     boardHit1.body.gravity.y = 300;
             boardHit1.body.bounce.y = 1;
             boardHit1.scale.setTo(0.5,0.5);

}
function moveBoard2(){
  var p =Math.random()*100;
    var q =Math.random()*200;
  boardHit2 = diamond2.create(550+q, 50+p, 'board');
     boardHit2.body.gravity.y = 300;
                  boardHit2.body.bounce.y = 1;
                  boardHit2.scale.setTo(1,1);
}

function moveBoard3() {
  var p =Math.random()*100;
    var q =Math.random()*200;
                  boardHit3 = diamond3.create(400+q, 50+p, 'board');
     boardHit3.body.gravity.y = 300;
             boardHit3.body.bounce.y = 1;
             boardHit3.scale.setTo(1.5,1.5);
  // body...
}
function shootBullet(){
    if (this.lastBulletShotAt === undefined) lastBulletShotAt = 0;
    if (game.time.now - lastBulletShotAt < SHOT_DELAY) return;
    lastBulletShotAt = game.time.now;

    // Get a dead bullet from the pool
    var bullet = bulletPool.getFirstDead();

    // If there aren't any bullets available then don't shoot
    if (bullet === null || bullet === undefined) return;
    bullet.revive();
     bullet.checkWorldBounds = true;
    bullet.outOfBoundsKill = true;

    // Set the bullet position to the gun position.
    bullet.reset(gun.x, gun.y);
    bullet.rotation = gun.rotation;

    // Shoot it in the right direction
    bullet.body.velocity.x = Math.cos(bullet.rotation) * BULLET_SPEED;
    bullet.body.velocity.y = Math.sin(bullet.rotation) * BULLET_SPEED;
}

function gotHit4(arrow,boardHit1){
    score3 += 30;
    scoreText.text = 'Score: ' + score3;

    if(score3>=300){
        game.state.start('gameState14');
    }
}

function gotHit2(arrow,boardHit2){
    score3 += 20;
    scoreText.text = 'Score: ' + score3;

    if(score3>=300){
        game.state.start('gameState14');
    }
}

function gotHit3(arrow,boardHit3){
    score3 -= 10;
    scoreText.text = 'Score: ' + score3;

    if(score3>=300){
        game.state.start('gameState14');
    }
}

function createTimer1(){
 
    var me = this;
 
    me.timeLabel = me.game.add.text(me.game.width/2+300, 16, "00:00",  { fontSize: '32px', fill: '#fff' });
   // me.timeLabel.anchor.setTo(0.5, 0.5);
    me.timeLabel.align = 'center';
 
}

function updateTimer1(){
 
    var me = this;
 
    var currentTime = new Date();
    var timeDifference = me.startTime.getTime() - currentTime.getTime();
 
    //Time elapsed in seconds
    me.timeElapsed = Math.abs(timeDifference / 1000);
 
    //Time remaining in seconds
    var timeRemaining = me.totalTime - me.timeElapsed;
 
    //Convert seconds into minutes and seconds
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = Math.floor(timeRemaining) - (60 * minutes);
 
    //Display minutes, add a 0 to the start if less than 10
    result = (minutes < 10) ? "0" + minutes : minutes;
 
    //Display seconds, add a 0 to the start if less than 10
    result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
 
    me.timeLabel.text = result;
 
}
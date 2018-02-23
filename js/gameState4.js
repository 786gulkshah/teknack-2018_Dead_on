var gameState4=function(game){
    console.log("Easy_Play");
}
gameState4.prototype={
    preload : preload4,
    create : create4,
    update : update4,
    createTimer: createTimer1,
    updateTimer: updateTimer1
}; 

function preload4(){
   game.load.image('background', 'assets/bgm6.jpg');
    game.load.image('arrow', 'assets/arroww.png');
    game.load.image('board','assets/ball14.png');
    game.load.image('bow','assets/bow3.png');
    game.load.audio('collide',['assets/audio/collide.mp3', 'assets/audio/collide.ogg']);
}

var arrow,sprite,i;
var boardHit,boardHit1;
var bulletPool;
var score=0, result;
var sound;


function create4(){
    game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.setShowAll();
    game.scale.refresh();


    game.physics.startSystem(Phaser.Physics.ARCADE);
    background = game.add.sprite(0, 0, 'background');
            //var background = game.add.sprite(0, 0, 'background');

            //background.scale.setTo(window.innerWidth * scaleRatio, window.innerHeight * scaleRatio);
    sound = game.add.audio('collide');
    diamond = game.add.group();
    diamond.enableBody = true;
     
    boardHit = diamond.create(500, 300, 'board');
    boardHit.scale.setTo(0.5,0.5);
            //boardHit.body.immovable = true;
    game.physics.enable(diamond, Phaser.Physics.ARCADE);
    SHOT_DELAY = 900; // milliseconds (10 bullets/3 seconds)
    BULLET_SPEED = 500; // pixels/second
    NUMBER_OF_BULLETS = 1;
    GRAVITY = 980; // pixels/second/second

    // Create an object representing our gun
    // gun = game.add.sprite(50, 450, 'arrow');
    gun = game.add.sprite(70, 450, 'bow');
    //gun = game.add.sprite(window.innerWidth * scaleRatio-1047, window.innerWidth * scaleRatio-845, 'bow');
    // gun = game.add.sprite((window.innerWidth * scaleRatio/2)-500, (window.innerWidth * scaleRatio/2)-200, 'bow');
       
   
    // Set the pivot point to the center of the gun
    gun.anchor.setTo(0.5, 0.5);

    // Create an object pool of bullets
    bulletPool = game.add.group();
    for(var i = 0; i < NUMBER_OF_BULLETS; i++) {
        // Create each bullet and add it to the group.
        bullet = game.add.sprite(0, 0, 'arrow');
        bulletPool.add(bullet);
        bullet.scale.setTo(1.8,1.2);
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
    me.totalTime = 60;
    me.timeElapsed = 0;
 
    me.createTimer();
 
    me.gameTimer = game.time.events.loop(100, function(){
        me.updateTimer();
    });

}
function update4(){
    var me = this;
    game.physics.arcade.collide(bulletPool, diamond, function(bullet, sprite) {
        gotHit(bullet,diamond);
        boardHit.kill();
        // Kill the bullet
        bullet.kill();
    createBoard(diamond);   
    }, null, this);
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
    console.log("Score easy :"+score +"score med"+score1);
        game.state.start('gameState6');
        //score=1;
    }

}
function createBoard(diamond){
    var p =Math.random()*200;
    var g = Math.random()*400;
    for ( i = 0; i <1; i++){
        boardHit = diamond.create( 200+g, 250+p ,'board');
        console.log("p:"+p +"g: "+g);
        boardHit.scale.setTo(0.5,0.5);
    }
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
function gotHit(bullet,diamond){
    sound.play();
    score += 10;
    scoreText.text = 'Score: ' + score;

    if(score>=300){
    	console.log("Score easy :"+score +"score med"+score1 );
        game.state.start('gameState6');
        //score=1;
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







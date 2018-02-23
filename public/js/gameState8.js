var gameState8=function(game){
	console.log("Medium_Play");
}
gameState8.prototype={
   	preload : preload8,
   	create : create8,
   	update : update8,
    createTimer: createTimer1,
    updateTimer: updateTimer1
}; 
function preload8(){
    game.load.image('background', 'assets/bgm6.jpg');
    game.load.image('arrow', 'assets/arroww.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('bow','assets/bow3.png');
    game.load.image('board','assets/ball14.png');
    game.load.audio('collide',['assets/audio/collide.mp3', 'assets/audio/collide.ogg']);
			
}

var arrow,platforms;
//var boardHit,boardHit1;
var bulletPool,boardHit;
var diamond,result;
var score1=0;
var sound;


function create8(){
    game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.setShowAll();
    game.scale.refresh();

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'background');
 
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


    sound = game.add.audio('collide');

    // var ground = platforms.create(0, game.world.height - 64, 'ground');
    // ground.scale.setTo(2, 2);
    // ground.body.immovable = true;

    // var ground1=platforms.create(0,0,'ground');
    // ground1.scale.setTo(2, 2);
    // ground1.body.immovable = true;
     ///var flag=1;
    diamond = game.add.group();
    diamond.enableBody = true;
     //diamond.immovable=true;
    boardHit = diamond.create(500, 50, 'board');
    boardHit.scale.setTo(0.5,0.5);
    boardHit.body.gravity.y = 300;
    boardHit.body.bounce.y = 1;
    
    game.physics.enable(diamond, Phaser.Physics.ARCADE); 
     
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

function update8(){
    var me=this;

    game.physics.arcade.collide(diamond, platforms, function(diamond, platforms) {
        //gotHit1(bullet,diamond)
        console.log("board ground");
        //bullet.kill();
    }, null, this);

    game.physics.arcade.collide(bullet, platforms, function(bullet, platforms) {
        //gotHit1(bullet,diamond)
        console.log("bullet ground");
            bullet.kill();
    }, null, this);
    game.physics.arcade.collide(bullet, diamond, function(bullet, diamond) {
        gotHit1(bullet,diamond);
        bullet.kill();
        boardHit.kill();
        moveBoard();
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
    game.state.start('gameState10');
    console.log("Score Medium :"+score1  +  "score easy "+score );
    }
}
function moveBoard() {
    var p =Math.random()*100;
    var q =Math.random()*200;
    boardHit = diamond.create(500+q, 50+p, 'board');
    boardHit.scale.setTo(0.5,0.5);
    
    boardHit.body.gravity.y = 300;
    boardHit.body.bounce.y = 1;

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
function gotHit1(arrow,boardHit){
    sound.play();
    score1 += 10;
    scoreText.text = 'Score: ' + score1;

    if(score1>=300){
    	console.log("Score Medium :"+score1 +"score easy"+score);
        game.state.start('gameState10');
    }
}
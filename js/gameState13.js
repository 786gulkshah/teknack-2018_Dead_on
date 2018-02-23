
var gameState13=function(game){
                console.log("Hard_HowTo");
            }
            gameState13.prototype={
                preload : preload13,
                create : create13,
                update : update13
            }

        function preload13(){
             game.load.image('background','assets/sky.png');

           
        }
        function create13(){
            game.physics.startSystem(Phaser.Physics.ARCADE);
            background = game.add.sprite(0, 0, 'background');

            game.scale.pageAlignVertically = true;
            game.scale.pageAlignHorizontally = true;
            game.scale.setShowAll();
            game.scale.refresh();

            console.log('Hard_Help');

            playButton = game.add.button(250,500, 'playButton', actionOnClick, this);
            backButton = game.add.button(20,20, 'backButton', actionOnClick, this);
           
            playButton.onInputDown.add(playdown, this);
            backButton.onInputDown.add(backdown, this);   

            function playdown() {
                console.log('play button down');
                game.state.start('gameState12');
            }

            function backdown() {
                console.log('back button down');
                game.state.start('gameState11');
            }

            function actionOnClick(){
               
            }

            scoreText = game.add.text(game.width/2-100, 50, 'Hard : Help', { fontSize: '32px', fill: '#ff0' });
            //game.state.start('gameState8');

            var i1 = game.add.text(100, 100,' 1. You can shoot only one arrow at a time', { fontSize: '16px', fill: '#fff' });
            var i2 = game.add.text(100, 150,' 2. Click to shoot the arrow', { fontSize: '16px', fill: '#fff' });
            var i3 = game.add.text(100, 200,' 3. Three distinct targets bring particular points', { fontSize: '16px', fill: '#fff' });
            var i4 = game.add.text(100, 250,' 4. Smallest target is worth 30 points, ', { fontSize: '16px', fill: '#fff' });
            var i5 = game.add.text(100, 300,'     the other is worth 20 points; ', { fontSize: '16px', fill: '#fff' });
            var i6 = game.add.text(100, 350,'     while the largest takes away 10 points ', { fontSize: '16px', fill: '#fff' });
            var i7 = game.add.text(100, 400,' 5. Challenge: Score 300 points in a minute', { fontSize: '16px', fill: '#f00' });
        }
        function update13(){

        }

//var game = new Phaser.Game(800, 600, Phaser.AUTO);

var gameState1= function(game){
    			console.log("Home");
			}
			gameState1.prototype={
    			preload : preload1,
    			create : create1,
    			update : update1
			};
			function preload1() {

				game.load.image('background','assets/sky.png');
				game.load.image('logo','assets/logo2.png');
				game.load.image('playButton','assets/buttons/playBtn.png',75,75);
				game.load.image('quitButton','assets/buttons/quitBtn.png',75,75);
			}

			var button;
			function create1(){

				game.scale.pageAlignVertically = true;
				game.scale.pageAlignHorizontally = true;
				game.scale.setShowAll();
				game.scale.refresh();
				
				game.add.image(0,0,'background');
				game.add.image(240, 80, 'logo');
				playButton = game.add.button(250,400, 'playButton', actionOnClick, this);
				quitButton = game.add.button(250,500, 'quitButton', actionOnClick, this);
				playButton.onInputDown.add(playdown, this);
				quitButton.onInputDown.add(quitdown, this);	

			function playdown() {
				console.log('play button down');
				game.state.start('gameState2');
			}

			function quitdown() {
				console.log('quit button down: Go to Teknack page');
			}

			
			function actionOnClick() {
				//console.log('Button pressed');
			}
			
		}
		function update1(){

		}

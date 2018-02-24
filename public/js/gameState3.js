			var gameState3=function(game){
    			console.log("Easy_Home");
			}
			gameState3.prototype={
    			preload : preload3,
    			create : create3,
    			update : update3
			};

		function preload3(){
     		game.load.image('background','assets/sky.png');
			game.load.image('playButton','assets/buttons/playBtn.png',75,75);
			game.load.image('helpButton','assets/buttons/helpBtn.png',75,75);
			game.load.image('backButton','assets/buttons/back2Btn.png',75,75);

		}
		function create3(){
				game.scale.pageAlignVertically = true;
				game.scale.pageAlignHorizontally = true;
				game.scale.setShowAll();
				game.scale.refresh();

				game.add.image(0,0,'background');
				playButton = game.add.button(250, 300, 'playButton', actionOnClick, this);
				helpButton = game.add.button(250, 400, 'helpButton', actionOnClick, this);
				backButton = game.add.button(20, 20, 'backButton', actionOnClick, this);
				playButton.onInputDown.add(playdown, this);
				helpButton.onInputDown.add(helpdown, this);	
				backButton.onInputDown.add(backdown, this);	

			function playdown() {
				console.log('play button down');
				game.state.start('gameState4');
			}

			function helpdown() {
				console.log('help button down');
				game.state.start('gameState5');
			}

			function backdown() {
				console.log('back button down');
				game.state.start('gameState2');
			}

			function actionOnClick(){
				
			}

			//scoreText = game.add.text(16, 16, 'Easy : Home', { fontSize: '32px', fill: '#fff' });

		}
		function update3(){

		}

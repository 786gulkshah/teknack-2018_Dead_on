var gameState2= function(game){
    			console.log("Modes");
			}
			gameState2.prototype={
		    	preload : preload2,
		    	create : create2,
		    	update : update2
			}; 
		function preload2(){
     		game.load.image('background','assets/sky.png');
			game.load.image('easyButton','assets/buttons/easyBtn.png',75,75);
			game.load.image('mediumButton','assets/buttons/mediumBtn.png',75,75);
			game.load.image('hardButton','assets/buttons/hardBtn.png',75,75);
			game.load.image('backButton','assets/buttons/back2Btn.png',75,75);	
		}
		function create2(){
				game.scale.pageAlignVertically = true;
				game.scale.pageAlignHorizontally = true;
				game.scale.setShowAll();
				game.scale.refresh();

				game.add.image(0,0,'background');
				easyButton = game.add.button(150,250, 'easyButton', actionOnClick, this);
				mediumButton = game.add.button(250,350, 'mediumButton', actionOnClick, this);
				hardButton = game.add.button(350,450, 'hardButton', actionOnClick, this);
				backButton = game.add.button(20, 20, 'backButton', actionOnClick, this);
				easyButton.onInputDown.add(easydown, this);
				mediumButton.onInputDown.add(mediumdown, this);	
				hardButton.onInputDown.add(harddown, this);
				backButton.onInputDown.add(backdown, this);	

			function easydown() {
				console.log('easy button down');
				game.state.start('gameState3');
			}

			function mediumdown() {
				console.log('medium button down');
				game.state.start('gameState7');
			}

			function harddown() {
				console.log('hard button down');
				game.state.start('gameState11');
			}

			function backdown() {
				console.log('back button down');
				game.state.start('gameState1');
			}

			function actionOnClick(){

			}
		}
		function update2(){

		}

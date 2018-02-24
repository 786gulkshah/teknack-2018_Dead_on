			var gameState11=function(game){
    			console.log("Hard_Home");
			}
			gameState11.prototype={
    			preload : preload11,
    			create : create11,
    			update : update11
			};

		function preload11(){
     		game.load.image('background','assets/sky.png');
			game.load.image('playButton','assets/buttons/playBtn.png',75,75);
			game.load.image('helpButton','assets/buttons/helpBtn.png',75,75);
			game.load.image('backButton','assets/buttons/back2Btn.png',75,75);
		}
		function create11(){
				game.scale.pageAlignVertically = true;
				game.scale.pageAlignHorizontally = true;
				game.scale.setShowAll();
				game.scale.refresh();

				game.add.image(0,0,'background');
				playButton = game.add.button(250,300, 'playButton', actionOnClick, this);
				helpButton = game.add.button(250,400, 'helpButton', actionOnClick, this);
				backButton = game.add.button(20,20, 'backButton', actionOnClick, this);
				playButton.onInputDown.add(playdown, this);
				helpButton.onInputDown.add(helpdown, this);	
				backButton.onInputDown.add(backdown, this);	

			function playdown() {
				console.log('play button down');
				game.state.start('gameState12');
			}

			function helpdown() {
				console.log('help button down');
				game.state.start('gameState13');
			}

			function backdown() {
				console.log('back button down');
				game.state.start('gameState2');
			}
			function actionOnClick(){
				
			}
}
		function update11(){

		}

			var gameState9=function(game){
    			console.log("Medium_HowTo");
			}
			gameState9.prototype={
    			preload : preload9,
    			create : create9,
    			update : update9
			};

		function preload9(){
     		game.load.image('background','assets/sky.png');
			
		}
		function create9(){
			game.physics.startSystem(Phaser.Physics.ARCADE);
    		background = game.add.sprite(0, 0, 'background');

			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
			game.scale.setShowAll();
			game.scale.refresh();

			console.log('Medium_Help');

		    playButton = game.add.button(250,500, 'playButton', actionOnClick, this);
            backButton = game.add.button(20,20, 'backButton', actionOnClick, this);
           
            playButton.onInputDown.add(playdown, this);
            backButton.onInputDown.add(backdown, this);   

			function playdown() {
				console.log('play button down');
				game.state.start('gameState8');
			}

			function backdown() {
				console.log('back button down');
				game.state.start('gameState7');
			}

			function actionOnClick(){
				
			}
			scoreText = game.add.text(game.width/2-100, 50, 'Medium : Help', { fontSize: '32px', fill: '#ff0' });
          
		
			//scoreText = game.add.text(16, 16, 'Medium : Help', { fontSize: '32px', fill: '#fff' });
	        var i1 = game.add.text(100, 100,' 1. You can shoot only one arrow at a time', { fontSize: '16px', fill: '#fff' });
            var i2 = game.add.text(100, 150,' 2. Click to shoot the arrow', { fontSize: '16px', fill: '#fff' });
            var i3 = game.add.text(100, 200,' 3. Score is shown on left top corner', { fontSize: '16px', fill: '#fff' });
            var i4 = game.add.text(100, 250,' 4. Time remaining is shown on right top corner ', { fontSize: '16px', fill: '#fff' });
            var i5 = game.add.text(100, 300,' 5. Challenge: Score 300 points in a minute', { fontSize: '16px', fill: '#f00' });
      
			//game.state.start('gameState8');
		}
		function update9(){

		}

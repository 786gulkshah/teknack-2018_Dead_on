			var gameState5=function(game){
    			console.log("Easy_HowTo");
			}
			gameState5.prototype={
    			preload : preload5,
    			create : create5,
    			update : update5
    		};

		function preload5(){
          game.load.image('background','assets/sky.png');
       
		}
		function create5(){

			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
			game.scale.setShowAll();
			game.scale.refresh();	

	  		game.physics.startSystem(Phaser.Physics.ARCADE);
            background = game.add.sprite(0, 0, 'background');

			console.log("Easy_Help");
			
			 playButton = game.add.button(250,500, 'playButton', actionOnClick, this);
            backButton = game.add.button(20,20, 'backButton', actionOnClick, this);
           
            playButton.onInputDown.add(playdown, this);
            backButton.onInputDown.add(backdown, this);   

			function playdown() {
				console.log('play button down');
				game.state.start('gameState4');
			}

			function backdown() {
				console.log('back button down');
				game.state.start('gameState3');
			}

			function actionOnClick(){
				
			}

			scoreText = game.add.text(game.width/2-100, 50, 'Easy : Help', { fontSize: '32px', fill: '#ff0' });
            //game.state.start('gameState8');

            var i1 = game.add.text(100, 100,' 1. You can shoot only one arrow at a time', { fontSize: '16px', fill: '#fff' });
            var i2 = game.add.text(100, 150,' 2. Click to shoot the arrow', { fontSize: '16px', fill: '#fff' });
            var i3 = game.add.text(100, 200,' 3. Score is shown on left top corner', { fontSize: '16px', fill: '#fff' });
            var i4 = game.add.text(100, 250,' 4. Time remaining is shown on right top corner ', { fontSize: '16px', fill: '#fff' });
            var i5 = game.add.text(100, 300,' 5. Challenge: Score 300 points in a minute', { fontSize: '16px', fill: '#f00' });
        	//game.state.start('gameState4');
		}
		function update5(){

		}

			var gameState14=function(game){
    			console.log("Hard_WL");
			}
			gameState14.prototype={
		    	preload : preload14,
		    	create : create14,
		    	update : update14
			}; 

		function preload14(){
     		game.load.image('background','assets/sky.png');
			game.load.image('playAgainButton','assets/buttons/playABtn.png',75,75);
			game.load.image('modesButton','assets/buttons/modesBtn.png',75,75);
			
		}
		function create14(){

				game.scale.pageAlignVertically = true;
				game.scale.pageAlignHorizontally = true;
				game.scale.setShowAll();
				game.scale.refresh();

				game.add.image(0,0,'background');
				 if(score3 < 300){
        		scoreText3 = game.add.text(400, 100,'You Lost!! :(',{fontSize:'32px',fill:'#FFF'});
        		scoreText3.anchor.setTo(0.5,0.5);  
        		scoreText4 = game.add.text(400, 150,'You Score :-  ' + score3,{fontSize:'32px',fill:'#FFF'});
        		scoreText4.anchor.setTo(0.5,0.5);  
        		scoreText5 = game.add.text(400, 200,'Time Remaining:- 00:00 ',{fontSize:'32px',fill:'#FFF'});
        		scoreText5.anchor.setTo(0.5,0.5);   
        		//console.log("score3" + score3);
        		//mytext =game.add.text(400,100,"Hard_WL");
        		score3 =0;

    		}
    		else{
         		scoreText3 = game.add.text(400, 100,'You Won!! :)',{fontSize:'32px',fill:'#FFF'});
        		scoreText3.anchor.setTo(0.5,0.5);  
        		scoreText4 = game.add.text(400, 150,'You Score :-  ' + score3,{fontSize:'32px',fill:'#FFF'});
        		scoreText4.anchor.setTo(0.5,0.5);  
        		scoreText5 = game.add.text(400, 200,'Time Remaining:-  '+result,{fontSize:'32px',fill:'#FFF'});
        		scoreText5.anchor.setTo(0.5,0.5);  
        	//	console.log("score3" + score3);
        		score3 =0; 
			}
				playAgainButton = game.add.button(300,300, 'playAgainButton', actionOnClick, this);
				modesButton = game.add.button(300,400, 'modesButton', actionOnClick, this);
				playAgainButton.onInputDown.add(playagaindown, this);
				modesButton.onInputDown.add(modesdown, this);	

			function playagaindown() {
				console.log('play again button down');
				game.state.start('gameState12');
			}

			function modesdown() {
				console.log('modes button down');
				game.state.start('gameState2');
			}

			function actionOnClick(){
				
			}

		}
		function update14(){

		}
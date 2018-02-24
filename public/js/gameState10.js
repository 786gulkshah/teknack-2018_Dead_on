			var gameState10=function(game){
    			console.log("Medium_WL");
			}
			gameState10.prototype={
		    	preload : preload10,
		    	create : create10,
		    	update : update10
			}; 

		function preload10(){
     		game.load.image('background','assets/sky.png');
			game.load.image('playAgainButton','assets/buttons/playABtn.png',75,75);
			game.load.image('modesButton','assets/buttons/modesBtn.png',75,75);
			
		}
		function create10(){
			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
			game.scale.setShowAll();
			game.scale.refresh();

			//scoreText3 = game.add.text(400, 100,'Medium_WL',{fontSize:'32px',fill:'#FFF'});
console.log("Score Medium :"+score1 +"score easy"+score);
			game.add.image(0,0,'background');
			if(score1 < 300){
        		scoreText = game.add.text(400, 100,'You Lost!! :(',{fontSize:'32px',fill:'#FFF'});
        		scoreText.anchor.setTo(0.5,0.5);  
        		scoreText1 = game.add.text(400, 150,'You Score :-  ' + score1,{fontSize:'32px',fill:'#FFF'});
        		scoreText1.anchor.setTo(0.5,0.5);  
        		scoreText2 = game.add.text(400, 200,'Time Remaining:- 00:00 ',{fontSize:'32px',fill:'#FFF'});
        		scoreText2.anchor.setTo(0.5,0.5);   
        		score1 =0;
    		}
    		else{
         		scoreText = game.add.text(400, 100,'You Won!! :)',{fontSize:'32px',fill:'#FFF'});
        		scoreText.anchor.setTo(0.5,0.5);  
        		scoreText1 = game.add.text(400, 150,'You Score :-  ' + score1,{fontSize:'32px',fill:'#FFF'});
        		scoreText1.anchor.setTo(0.5,0.5);  
        		scoreText2 = game.add.text(400, 200,'Time Remaining:-  '+result,{fontSize:'32px',fill:'#FFF'});
        		scoreText2.anchor.setTo(0.5,0.5);  
        		score1 =0; 
			}

				playAgainButton = game.add.button(300,300, 'playAgainButton', actionOnClick, this);
				modesButton = game.add.button(300,400, 'modesButton', actionOnClick, this);
				playAgainButton.onInputDown.add(playagaindown, this);
				modesButton.onInputDown.add(modesdown, this);	

			function playagaindown() {
				console.log('play again button down');
				game.state.start('gameState8');
			}

			function modesdown() {
				console.log('modes button down');
				game.state.start('gameState2');
			}

			function actionOnClick(){
				
			}
		}
		function update10(){

		}

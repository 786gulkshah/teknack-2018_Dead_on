			var gameState6=function(game){
    			console.log("Easy_WL");
			}
			gameState6.prototype={
		    	preload : preload6,
		    	create : create6,
		    	update : update6
			}; 
//var score;
		function preload6(){
			
		 	game.load.image('background','assets/sky.png');
			game.load.image('playAgainButton','assets/buttons/playABtn.png',75,75);
			game.load.image('modesButton','assets/buttons/modesBtn.png',75,75);

		}
		function create6(){
			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
			game.scale.setShowAll();
			game.scale.refresh();
		
			//scoreText3 = game.add.text(400, 100,'Easy_WL',{fontSize:'32px',fill:'#FFF'});
console.log("Score easy :"+score +"score med"+score1);
			game.add.image(0,0,'background');
			if(score < 300){
        		scoreText = game.add.text(400, 100,'You Lost!! :(',{fontSize:'32px',fill:'#FFF'});
        		scoreText.anchor.setTo(0.5,0.5);  
        		scoreText1 = game.add.text(400, 150,'You Score :-  ' + score,{fontSize:'32px',fill:'#FFF'});
        		scoreText1.anchor.setTo(0.5,0.5);  
        		scoreText2 = game.add.text(400, 200,'Time Remaining:- 00:00 ',{fontSize:'32px',fill:'#FFF'});
        		scoreText2.anchor.setTo(0.5,0.5);   
        		score =0;
    		}
    		else{
         		scoreText = game.add.text(400, 100,'You Won!! :)',{fontSize:'32px',fill:'#FFF'});
        		scoreText.anchor.setTo(0.5,0.5);  
        		scoreText1 = game.add.text(400, 150,'You Score :-  ' + score,{fontSize:'32px',fill:'#FFF'});
        		scoreText1.anchor.setTo(0.5,0.5);  
        		scoreText2 = game.add.text(400, 200,'Time Remaining:-  '+result,{fontSize:'32px',fill:'#FFF'});
        		scoreText2.anchor.setTo(0.5,0.5); 
        		score =0;  
			}

				playAgainButton = game.add.button(300,300, 'playAgainButton', actionOnClick, this);
				modesButton = game.add.button(300,400, 'modesButton', actionOnClick, this);
				playAgainButton.onInputDown.add(playagaindown, this);
				modesButton.onInputDown.add(modesdown, this);	

			function playagaindown() {
				console.log('play again button down');
				game.state.start('gameState4');
			}

			function modesdown() {
				console.log('modes button down');
				game.state.start('gameState2');
			}

			function actionOnClick(){
				
			}
		}
		function update6(){

		}

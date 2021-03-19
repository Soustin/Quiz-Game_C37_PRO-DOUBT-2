class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
            
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // gameState = 2;

            if(player.index !== null){
                for(var i = 0; i < fruitGroup.length; i++){
                    if(fruitGroup.get(i).isTouching(players)){
                        fruitGroup.get(i).destroy();
                        // score = score+1;
                        player.score = player.score+1;
                        player.update();
                    }
                    // if(fruitGroup.get(i).isTouching(players)){
                    //     fruitGroup.get(i).destroy();
                    //     // score = score+1;
                    //     player.score = player.score+1;
                    //     player.update();
                    // }
                }
            }

            // Differentiate the main player by printing the name of the player on the basket. 
            if(index === player.index){
                fill(7, 42, 8);
                textSize(35);
                textFont("Italics")
                strokeWeight(8)
                stroke(40, 188, 20)
                text(allPlayers[plr].name, x-0, y+20)
            }

            textSize(40);
            text("Player : " + allPlayers.player1.name + " Score : " + allPlayers.player1.score, 50, 50);
            text("Player : " + allPlayers.player2.name + " Score : "+ allPlayers.player2.score, 650, 50);

        }


        // Give movements for the players using arrow keys
        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.distance -= 10;
            player.update();
        }
        if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.distance += 10;
            player.update();
        }



        // Create and spawn fruits randomly
        if(frameCount % 20 === 0){
            fruits = createSprite(random(100, 1000), 0, 100, 100);
            fruits.velocityY = 6;
            var rand = Math.round(random(1, 5));
            switch(rand){
                case 1: fruits.addImage("fruit1", fruit1_img);
                break;
                case 2: fruits.addImage("fruit1", fruit2_img);
                break;
                case 3: fruits.addImage("fruit1", fruit3_img);
                break;
                case 4: fruits.addImage("fruit1", fruit4_img);
                break;
                case 5: fruits.addImage("fruit1", fruit5_img);
                break;
            }
            fruitGroup.add(fruits);
        }

        // if(player.touches(fruitGroup) === 1){
        //     player.rank(1);
        // }

        // if(allPlayers[plr].score >= 10){
        //     this.end();
        // }
        
    }

    end(){
       console.log("Game Ended");
       game.update(2);
       clear();

       fill("blue");
       textSize(70);
       textFont("Aharoni");
       text("Game Over", 300, 300)
    }
}
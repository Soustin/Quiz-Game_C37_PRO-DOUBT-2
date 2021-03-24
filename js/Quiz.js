class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();

            // if(contestantCount === 4){
            //     gameState = 1
            // }
        }
    }

    play(){

        // var question = new Question();
        question.hide();
        background("pink");
        fill(0);
        textSize(30);

        Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      var display_Answers = 80;

      fill("Blue");
      text("RESULT PAGE", 350, 30);
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",80,50);

      for(var plr in allContestants){
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer1)
          fill("Green")
        else
          fill("red");

        display_Answers+=40;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer1, 350,display_Answers);
        
    }

    //   if(question.submit.mousePressed()){
    //       question.inputQ1 = allContestants[plr].answer1;
    //   }
    }
        
    }

}
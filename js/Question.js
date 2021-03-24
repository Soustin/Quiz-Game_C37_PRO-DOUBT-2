class Question{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');

        this.Q1 = createElement('h2');
        this.Q1o1 = createElement('h3');
        this.Q1o2 = createElement('h3');
        this.inputQ1 = createInput("Your Answer");
        
        // this.Q2 = createElement('h2');
        // this.Q2o1 = createElement('h5');
        // this.Q2o2 = createElement('h5');
        // this.inputQ2 = createInput("Your Answer");
        
        // this.Q3 = createElement('h2');
        // this.Q3o1 = createElement('h5');
        // this.Q3o2 = createElement('h5');
        // this.inputQ3 = createInput("Your Answer");
        
        // this.Q4 = createElement('h2');
        // this.Q4o1 = createElement('h5');
        // this.Q4o2 = createElement('h5');
        // this.inputQ4 = createInput("Your Answer");
        
        // this.Q5 = createElement('h2');
        // this.Q5o1 = createElement('h5');
        // this.Q5o2 = createElement('h5');
        // this.inputQ5 = createInput("Your Answer");

        // this.Q6 = createElement('h2');
        // this.Q6o1 = createElement('h5');
        // this.Q6o2 = createElement('h5');
        // this.inputQ6 = createInput("Your Answer");

        // this.Q7 = createElement('h2');
        // this.Q7o1 = createElement('h5');
        // this.Q7o2 = createElement('h5');
        // this.inputQ7 = createInput("Your Answer");

        // this.Q8 = createElement('h2');
        // this.Q8o1 = createElement('h5');
        // this.Q8o2 = createElement('h5');
        // this.inputQ8 = createInput("Your Answer");
        
        // this.Q9 = createElement('h2');
        // this.Q9o1 = createElement('h5');
        // this.Q9o2 = createElement('h5');
        // this.inputQ9 = createInput("Your Answer");

        // this.Q10 = createElement('h2');
        // this.Q10o1 = createElement('h5');
        // this.Q10o2 = createElement('h5');
        // this.inputQ10 = createInput("Your Answer");

        this.reset = createButton('Reset');

        this.submit = createButton('Submit');
    }

    hide(){
        this.title.hide();
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){

        // contestant.name();
        // contestant.answer();
        // contestant.index();
        
        // if(gameState == 0){
            this.title.html("My Marvel Quiz");
            this.title.position(350, 50)

            this.input.position(50, 30);
            this.input.style('width', '200px');
            this.input.style('height', '20px');
            this.input.style('background', 'lavender');

            this.button.position(75, 70);
            this.button.style('width', '150px');
            this.button.style('height', '20px');
            this.button.style('background', 'lavender');

            this.submit.position(680, 300);
            this.submit.style('width', '100px');
            this.submit.style('height', '20px');
            this.submit.style('background', 'lavender');

            this.Q1.html("Q1. In 'Thor: Ragnarok' who is Thor's opponent in the gladiator ring on the planet Sakaar? ")
            this.Q1.position(45, 100);
            this.Q1.style('font-family', 'Italics');
            this.Q1.style('font-size', '20px');
            this.Q1.style('color', 'red');

            this.inputQ1.position(650, 250);

            // contestant.answer = this.inputQ1.val();

            this.Q1o1.html("(i) Loki")
            this.Q1o1.position(65, 200);
            this.Q1o1.style('width', '200px');
            this.Q1o1.style('height', '40px');
            this.Q1o1.style('background', rgb(130, 0, 172));

            this.Q1o2.html("(ii) Hulk")
            this.Q1o2.position(65, 300);
            this.Q1o2.style('width', '200px');
            this.Q1o2.style('height', '40px');
            this.Q1o2.style('background', rgb(130, 0, 172));

            // this.Q1.hide();
            // this.Q2.hide();
            // this.Q3.hide();
            // this.Q4.hide();
            // this.Q5.hide();
            // this.Q6.hide();
            // this.Q7.hide();
            // this.Q8.hide();
            // this.Q9.hide();
            // this.Q10.hide();
            // this.inputQ1.hide();
            // this.inputQ2.hide();
            // this.inputQ3.hide();
            // this.inputQ4.hide();
            // this.inputQ5.hide();
            // this.inputQ6.hide();
            // this.inputQ7.hide();
            // this.inputQ8.hide();
            // this.inputQ9.hide();
            // this.inputQ10.hide();

            // this.Q1o1.hide();
            // this.Q1o2.hide();
            // this.Q2o1.hide();
            // this.Q2o2.hide();
            // this.Q3o1.hide();
            // this.Q3o2.hide();           
            // this.Q4o1.hide();
            // this.Q4o2.hide();
            // this.Q5o1.hide();
            // this.Q5o2.hide();
            // this.Q6o1.hide();
            // this.Q6o2.hide();
            // this.Q7o1.hide();
            // this.Q7o2.hide();
            // this.Q8o1.hide();
            // this.Q8o2.hide();
            // this.Q9o1.hide();
            // this.Q9o2.hide();
            // this.Q10o1.hide();
            // this.Q10o2.hide();
        // }

        // if(gameState === 1){
            
            // this.Q1.hide();
            // this.Q1o1.hide();
            // this.Q1o2.hide();

        //     this.Q2.hide();
        //     this.Q3.hide();
        //     this.Q4.hide();
        //     this.Q5.hide();
        //     this.Q6.hide();
        //     this.Q7.hide();
        //     this.Q8.hide();
        //     this.Q9.hide();
        //     this.Q10.hide();

        //     this.Q2o1.hide();
        //     this.Q2o2.hide();
        //     this.Q3o1.hide();
        //     this.Q3o2.hide();           
        //     this.Q4o1.hide();
        //     this.Q4o2.hide();
        //     this.Q5o1.hide();
        //     this.Q5o2.hide();
        //     this.Q6o1.hide();
        //     this.Q6o2.hide();
        //     this.Q7o1.hide();
        //     this.Q7o2.hide();
        //     this.Q8o1.hide();
        //     this.Q8o2.hide();
        //     this.Q9o1.hide();
        //     this.Q9o2.hide();
        //     this.Q10o1.hide();
        //     this.Q10o2.hide();


        //     this.Q2.html("Q2. What Is Anthony Stark's Super Hero Name? ")
        //     this.Q2.position(45, 100);
        //     this.Q2.style('font-family', 'Italics');
        //     this.Q2.style('font-size', '20px');
        //     this.Q2.style('color', 'red');
        //     this.inputQ2.position(375, 300);

        //     this.Q2o1.html("(i) War Machine");
        //     this.Q2o1.position(65, 300);
        //     this.Q2o1.style('width', '200px');
        //     this.Q2o1.style('height', '40px');
        //     this.Q2o1.style('background', rgb(130, 0, 172));

        //     this.Q2o2.html("(ii) Iron Man");
        //     this.Q2o2.position(65, 300);
        //     this.Q2o2.style('width', '200px');
        //     this.Q2o2.style('height', '40px');
        //     this.Q2o2.style('background', rgb(130, 0, 172));

        //     this.Q3.html("Q3. Whose entire skeletal system was fused with the metal adamantium? ")
        //     this.Q3.position(45, 100);
        //     this.Q3.style('font-family', 'Italics');
        //     this.Q3.style('font-size', '20px');
        //     this.Q3.style('color', 'red');
        //     this.inputQ3.position(375, 300);

        //     this.Q3o1.html("(i) Thor")
        //     this.Q3o1.position(65, 300);
        //     this.Q3o1.style('width', '200px');
        //     this.Q3o1.style('height', '40px');
        //     this.Q3o1.style('background', rgb(130, 0, 172));

        //     this.Q3o2.html("(ii) Wolverine")
        //     this.Q3o2.position(65, 300);
        //     this.Q3o2.style('width', '200px');
        //     this.Q3o2.style('height', '40px');
        //     this.Q3o2.style('background', rgb(130, 0, 172));

        //     this.Q4.html("Q4. Who was born with their powers? ")
        //     this.Q4.position(45, 100);
        //     this.Q4.style('font-family', 'Italics');
        //     this.Q4.style('font-size', '20px');
        //     this.Q4.style('color', 'red');
        //     this.inputQ4.position(375, 300);

        //     this.Q4o1.html("(ii) Mistique");
        //     this.Q4o1.position(65, 300);
        //     this.Q4o1.style('width', '200px');
        //     this.Q4o1.style('height', '40px');
        //     this.Q4o1.style('background', rgb(130, 0, 172));

        //     this.Q4o2.html("(i) Hulk")
        //     this.Q4o2.position(65, 300);
        //     this.Q4o2.style('width', '200px');
        //     this.Q4o2.style('height', '40px');
        //     this.Q4o2.style('background', rgb(130, 0, 172));

        //     this.Q5.html("Q5. T'Challa aka Black Panther is the heir of the throne of what country? ")
        //     this.Q5.position(45, 100);
        //     this.Q5.style('font-family', 'Italics');
        //     this.Q5.style('font-size', '20px');
        //     this.Q5.style('color', 'red');
        //     this.inputQ5.position(375, 300);

        //     this.Q5o1.html("(i) Peru")
        //     this.Q5o1.position(65, 300);
        //     this.Q5o1.style('width', '200px');
        //     this.Q5o1.style('height', '40px');
        //     this.Q5o1.style('background', rgb(130, 0, 172));

        //     this.Q5o2.html("(ii) Wakanda")
        //     this.Q5o2.position(65, 300);
        //     this.Q5o2.style('width', '200px');
        //     this.Q5o2.style('height', '40px');
        //     this.Q5o2.style('background', rgb(130, 0, 172));

        //     this.Q6.html("Q6. What was Ant Man aka Scott Lang's former profession? ")
        //     this.Q6.position(45, 100);
        //     this.Q6.style('font-family', 'Italics');
        //     this.Q6.style('font-size', '20px');
        //     this.Q6.style('color', 'red');
        //     this.inputQ7.position(375, 300);

        //     this.Q6o1.html("(i) Theif")
        //     this.Q6o1.position(65, 300);
        //     this.Q6o1.style('width', '200px');
        //     this.Q6o1.style('height', '40px');
        //     this.Q6o1.style('background', rgb(130, 0, 172));

        //     this.Q6o2.html("(ii) Murderer")
        //     this.Q6o2.position(65, 300);
        //     this.Q6o2.style('width', '200px');
        //     this.Q6o2.style('height', '40px');
        //     this.Q6o2.style('background', rgb(130, 0, 172));

        //     this.Q7.html("Q7. In X-men, who established and ran the school for the mutants? ")
        //     this.Q7.position(45, 100);
        //     this.Q7.style('font-family', 'Italics');
        //     this.Q7.style('font-size', '20px');
        //     this.Q7.style('color', 'red');
        //     this.inputQ7.position(375, 300);

        //     this.Q1o2.html("(i) Professor Charles Francis Xavier aka Proffeser X or X-Mansion")
        //     this.Q7o1.position(65, 300);
        //     this.Q7o1.style('width', '200px');
        //     this.Q7o1.style('height', '40px');
        //     this.Q7o1.style('background', rgb(130, 0, 172));

        //     this.Q7o2.html("(ii) Murderer")
        //     this.Q7o2.position(65, 300);
        //     this.Q7o2.style('width', '200px');
        //     this.Q7o2.style('height', '40px');
        //     this.Q7o2.style('background', rgb(130, 0, 172));

        //     this.Q8.html("Q8. In the Guardians of the Galaxy' movie series, what is Peter Quill's prized possession? ")
        //     this.Q8.position(45, 100);
        //     this.Q8.style('font-family', 'Italics');
        //     this.Q8.style('font-size', '20px');
        //     this.Q8.style('color', 'red');
        //     this.inputQ8.position(375, 300);

        //     this.Q8o1.html("(i) A Diskman")
        //     this.Q8o1.position(65, 300);
        //     this.Q8o1.style('width', '200px');
        //     this.Q8o1.style('height', '40px');
        //     this.Q8o1.style('background', rgb(130, 0, 172));

        //     this.Q8o2.html("(ii) A Walkman")
        //     this.Q8o2.position(65, 300);
        //     this.Q8o2.style('width', '200px');
        //     this.Q8o2.style('height', '40px');
        //     this.Q8o2.style('background', rgb(130, 0, 172));

        //     this.Q9.html("Q9. What is the name of the super secret crime-fighting organization who ran The Avenger Initiative? ")
        //     this.Q9.position(45, 100);
        //     this.Q9.style('font-family', 'Italics');
        //     this.Q9.style('font-size', '20px');
        //     this.Q9.style('color', 'red');
        //     this.inputQ9.position(375, 300);

        //     this.Q9o1.html("(i) G.A.U.R.D")
        //     this.Q9o1.position(65, 300);
        //     this.Q9o1.style('width', '200px');
        //     this.Q9o1.style('height', '40px');
        //     this.Q9o1.style('background', rgb(130, 0, 172));

        //     this.Q9o2.html("(ii) S.H.I.E.L.D")
        //     this.Q9o2.position(65, 300);
        //     this.Q9o2.style('width', '200px');
        //     this.Q9o2.style('height', '40px');
        //     this.Q9o2.style('background', rgb(130, 0, 172));

        //     this.Q10.html("Q10. Which Avenger started out as a carnival sideshow act billed as 'The World's Greatest Marksman.'? ")
        //     this.Q10.position(45, 100);
        //     this.Q10.style('font-family', 'Italics');
        //     this.Q10.style('font-size', '20px');
        //     this.Q10.style('color', 'red');
        //     this.inputQ10.position(375, 300);

        //     this.Q10o1.html("(i) Hawkeye")
        //     this.Q10o1.position(65, 300);
        //     this.Q10o1.style('width', '200px');
        //     this.Q10o1.style('height', '40px');
        //     this.Q10o1.style('background', rgb(130, 0, 172));

        //     this.Q10o2.html("(ii) Falcon")
        //     this.Q10o2.position(65, 300);
        //     this.Q10o2.style('width', '200px');
        //     this.Q10o2.style('height', '40px');
        //     this.Q10o2.style('background', rgb(130, 0, 172));

        // if(this.inputQ1.value()){
            
        //    this.Q2.visible = true;
        //     this.Q2o1.visible = true;
        //     this.Q2o2.visible = true;
              
        // }

        // if(this.Q2o2.mousePressed){

        //     this.Q3.visible = true;
        //     this.Q3o1.visible = true;
        //     this.Q3o2.visible = true;
            
        // }

        // if(this.Q3o2.mousePressed){

        //     this.Q4.visible = true;
        //     this.Q4o1.visible = true;
        //     this.Q4o2.visible = true;
            
        // }

        // if(this.Q4o1.mousePressed){
            
        //     this.Q5.visible = true;
        //     this.Q5o1.visible = true;
        //     this.Q5o2.visible = true;
            
        // }

        // if(this.Q5o2.mousePressed){

        //     this.Q6.visible = true;
        //     this.Q6o1.visible = true;
        //     this.Q6o2.visible = true;
            
        // }

        // if(this.Q6o1.mousePressed){

        //     this.Q7.visible = true;
        //     this.Q7o1.visible = true;
        //     this.Q7o2.visible = true;

        // }

        // if(this.Q7o1.mousePressed){

        //     this.Q8.visible = true;
        //     this.Q8o1.visible = true;
        //     this.Q8o2.visible = true;
            
        // }

        // if(this.Q8o2.mousePressed){
            
        //     this.Q9.visible = true;
        //     this.Q9o1.visible = true;
        //     this.Q9o2.visible = true;
            
        // }

        // if(this.Q9o2.mousePressed){
            
        //     this.Q10.visible = true;
        //     this.Q10o1.visible = true;
        //     this.Q10o2.visible = true;
            
        // }

            this.button.mousePressed(() => {
                this.title.hide();
                this.input.hide();
                // this.Q1.display();
                // this.Q1o1.display();
                // this.Q1o2.display();
                // this.inputQ1.hide();
                this.button.hide();
                contestant.name = this.input.value();
                contestantCount += 1;
                contestant.index = contestantCount;
                contestant.update();
                contestant.updateCount(contestantCount);
                this.greeting.html("Hello " + contestant.name)
                this.greeting.position(300,50);
                this.greeting.style('color', 'white');
                this.greeting.style('font-size', '100px');
                this.greeting.style('font-family', 'Aharoni');
                // if(contestantCount === 4){
                //     gameState = 1;
                //     gameState.update(1);
                // }
            });

            this.submit.mousePressed(() => {
                // question.Q1.hide();
                // question.Q1o1.hide();
                // question.Q1o2.hide();
                // question.inputQ1.hide();
                // question.submit.hide();
                allContestants.answer1 = this.inputQ1.value();
                gameState.update(2);
            })

            this.reset.mousePressed(() => {
                contestant.updateCount(0);
                quiz.update(0);
            })
            
        }
    // }
}    
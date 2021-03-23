class Question{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');

        this.Q1 = createElement('h2');
        this.Q1o1 = createElement('Loki');
        this.Q1o2 = createElement('Hulk');
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

            this.input.position(350, 150);
            this.input.style('width', '200px');
            this.input.style('height', '20px');
            this.input.style('background', 'lavender');

            this.button.position(375, 200);
            this.button.style('width', '150px');
            this.button.style('height', '20px');
            this.button.style('background', 'lavender');

            this.submit.position(350, 250);
            this.submit.style('width', '200px');
            this.submit.style('height', '20px');
            this.submit.style('background', 'lavender');

            

        // if(gameState === 1){

            this.Q1.html("Q1. In 'Thor: Ragnarok' who is Thor's opponent in the gladiator ring on the planet Sakaar? ")
            this.Q1.position(45, 100);
            this.Q1.style('font-family', 'Italics');
            this.Q1.style('font-size', '20px');
            this.Q1.style('color', 'red');

            this.inputQ1.position(375, 300);

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
            
            this.Q1.hide();
            this.Q1o1.hide();
            this.Q1o2.hide();
            this.button.mousePressed(() => {
                this.title.hide();
                this.input.hide();
                this.Q1.display();
                this.Q1o1.display();
                this.Q1o2.display();
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

        }
    // }
}    
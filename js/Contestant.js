class Contestant{
    constructor(){
        this.name  = null;
        this.answer = 0;
        this.index = null;
    }
    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value", function(data){
            contestantCount=data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        })
    }

    update(name, answer){
        var contestantIndex= "player " +contestantCount;
        database.ref(contestantIndex).set({
            name: this.name,
            answer: this.answer
        })
    }
}
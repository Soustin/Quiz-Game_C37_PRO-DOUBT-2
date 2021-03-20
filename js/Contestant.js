class Contestant{
    constructor(){
        this.name  = null;
        answer = 0;
        index = null;
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

    update(name){
        var contestantIndex= "player " +contestantCount;
        database.ref(contestantIndex).set({
            name: this.name
        })
    }
}
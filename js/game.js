prompt("hey");

const qAndA = [
    {
        question: "Do you like to drink?",
        answer: ["Yes", "Nope"],
    
    },
    {
        question: "What is your favorite drink?",
        answer: ["beer", "wine", "vodka"],
        
    },
    {
        question: "Who is cooler?",
        answer: ["Amanda", "Lorna"],
        
    },
    {
        question: "TGIF",
        answer: ["Yes", "I hate Fridays"],
        
    }
]

$('.start').click(function(){
    startGame();
    hideStart();

})

const startGame = () => {

    for(item of qAndA){
        console.log(qAndA[item]);

        $('.questions').html('<h1>' + item.question);
        $('.answers').html('<p>' + item.answer);
    }
}

const hideStart = () => {
    $('.start').hide();
}



let magicEightBall = document.getElementById("magicEightBall");

let shakeItButton = document.getElementById("shakeItButton");

let ball = {
    type: "toy",
    purpose: "divination",
    answers: ["yes", "no", "maybe", "ask again", "dream on", "it is certain", ],
    isSilly: "true",
}





for(var i = 0; i < ball.answers.length; i++){
        console.log(ball.answers[i])
    }    
let input = document.getElementById("input");

shakeItButton.addEventListener("click", shakeIt);

function shakeIt (){
    console.log(input.value);
    if (input.value === ""){
        alert("Write your question!")
    } 
    if (input.value === "Is this silly?"){
        alert ("Absolutely")
    }
    else  {
        let randomAnswer = ball.answers[Math.floor(Math.random()*ball.answers.length)];
        alert(randomAnswer)
    }
}

const wholePage = document.getElementById("pageContainer");
const countdownDiv = document.getElementById("countdownDiv");
const clickCounterDiv = document.getElementById("clickCounterDiv");
const previousScoreDiv = document.getElementById("previousScoreDiv");
let countDownInterval;
let clicks = 0;
let count = 10;
let timer = document.createElement("h1");
let displayClicks = document.createElement("h1");
let lastClickDisplay = document.createElement("h3")
let lastClicks = localStorage.getItem("previousScore");
lastClickDisplay.textContent = `${lastClicks}`
countdownDiv.append(timer);
clickCounterDiv.append(displayClicks);
previousScoreDiv.append(lastClicks);

wholePage.addEventListener("click", clickCounter);

function clickCounter(){
    if(!countDownInterval){
        countDownInterval = setInterval(countDown, 1000);
    }
    if(count > 0){
        clicks++;
        console.log(`clicks ${clicks}`);
    } else {
        clearInterval(countDownInterval);
        localStorage.setItem("previousScore", `${clicks}`);
    }
    displayClicks.textContent = `${clicks}`;
}

function countDown(){
    if (count > 0){
        count--;
    }
    timer.textContent = `${count}`;
}



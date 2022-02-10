const header = document.getElementById("header");

header.textContent = "JavaScript Made This!!";

header.style.fontSize = "50px";
header.style.textAlign = "center";

const newH2 = document.createElement("h2");
const myName = document.createElement("span");

myName.textContent = "Jess ";
newH2.textContent = "wrote the JavaScript";
header.append(newH2);
newH2.prepend(myName);

myName.style.color = "burlywood";
myName.style.fontSize = "20px"
newH2.style.fontSize = "20px"

const message = document.getElementsByClassName("message");
const messageDiv = document.querySelectorAll(".messages > div");
const clearButton = document.getElementById("clear-button");
const dropDown = document.getElementById("theme-drop-down");
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const input = document.getElementById("input");
const sendButton = document.getElementsByTagName("button")[1];
const messagesContainer = document.getElementsByClassName("messages")[0];

messageDiv[0].textContent = "The bakery has free cookies!";
messageDiv[1].textContent = "Really? What kind?";
messageDiv[2].textContent = "Unicorn sprinkle - they give you rainbow hair!" ;
messageDiv[3].textContent = "What? I'm getting one!"

clearButton.addEventListener("click", clearChat);

function clearChat () {
    for (var i = 0; i < messageDiv.length; i++) {
        messageDiv[i].textContent = "";
        messageDiv[i].style.backgroundColor = "white";
    }
}

dropDown.addEventListener("change", (e) => themeChange(e));

function themeChange(e) {
    console.log(e.target.value);
    if (e.target.value === "theme-one") {
        blueTheme();
    } else {
        redTheme();
    }
}

function redTheme() {
    for (var i = 0, max = left.length; i < max; i++) {
        left[i].style.backgroundColor = "red";
        left[i].style.color = "white";
    }
    for (var i = 0, max = left.length; i < max; i++) {
    right[i].style.backgroundColor = "black";
    right[i].style.color = "white";
    }
}
function blueTheme() {
    for (var i = 0, max = left.length; i < max; i++) {
        right[i].style.backgroundColor = "lightblue";
        right[i].style.color = "black"
    }
    for (var i = 0, max = left.length; i < max; i++) {
        left[i].style.backgroundColor = "burlywood";
        left[i].style.color = "black";
    }
}   

console.log(sendButton);
let sendButtonClicks = 0;


sendButton.addEventListener("click", sendMessage);
function sendMessage(e) {
    e.preventDefault();
    const val = input.value;
    const container = document.createElement("div");
    container.textContent = val;
    messagesContainer.append(container);
    input.value = "";
    sendButtonClicks++;
    if (sendButtonClicks % 2 === 0) {
        container.classList.add("right", "message");
    }else {
        container.classList.add("left", "message");
    }
    
}



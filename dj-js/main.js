const button = document.getElementById("button");
const wholePage = document.getElementById("whole-page")

button.addEventListener("mouseover", turnBlue);
button.addEventListener("mouseleave", revert);
button.addEventListener("mousedown", turnRed);
button.addEventListener("mouseup", turnYellow);
button.addEventListener("dblclick", turnGreen);
wholePage.addEventListener("wheel", turnOrange);

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName)
    if (keyName === 'b') {
        turnBlue();
    }
    if (keyName === 'r') {
        turnRed();
    }
    if (keyName === 'y') {
        turnYellow();
    }
    if (keyName === 'g') {
        turnGreen();
    }
    if (keyName === 'o') {
        turnOrange();
    }
    if (keyName === 'k') {
        revert();
    }
});


function turnBlue() {
    button.style.backgroundColor = "blue";
}
function revert() {
    button.style.backgroundColor = "black";
}
function turnRed() {
    button.style.backgroundColor = "red";
}
function turnYellow() {
    button.style.backgroundColor = "yellow";
}
function turnGreen() {
    button.style.backgroundColor = "green"
}
function turnOrange() {
    button.style.backgroundColor = "#FF8733"
}

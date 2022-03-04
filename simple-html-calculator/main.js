const addition = document.addition;
const subtraction = document.subtraction;
const multiplication = document.multiplication;
const container = document.getElementById("container");
const inputs = document.getElementsByTagName("input");
const buttons = document.getElementsByTagName("button");
const h2s = document.getElementsByTagName("h2");
const forms = document.getElementsByTagName("form");
console.log(inputs);

addDiv = document.getElementById("add");
subDiv = document.getElementById("subtract");
multiDiv = document.getElementById("multiply");


//EVENT LISTENTERS
addition.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstAdd = addition.firstAdd.value;
    const secondAdd = addition.secondAdd.value;
    addNums(firstAdd, secondAdd);
    addition.reset();
})
subtraction.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstSub = subtraction.firstSub.value;
    const secondSub = subtraction.secondSub.value;
    subtract(firstSub, secondSub);
    subtraction.reset();
})
multiplication.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstMulti = multiplication.firstMulti.value;
    const secondMulti = multiplication.secondMulti.value;
    multiply(firstMulti, secondMulti);
    multiplication.reset();
})
//FUNCTIONS
function addNums(x,y){
    let sum = Number(x) + Number(y);
    let newH3 = document.createElement('h3');
    newH3.textContent = sum;
    console.log(sum);
    addDiv.append(newH3);
}

function subtract(x,y){
    let result = Number(x) - Number(y);
    let newH3 = document.createElement('h3');
    newH3.textContent = result;
    console.log(result);
    subDiv.append(newH3);
}

function multiply(x,y){
    let result = Number(x) * Number(y);
    let newH3 = document.createElement('h3');
    newH3.textContent = result;
    console.log(result);
    multiDiv.append(newH3);
}

styleMultiple(inputs, 'inputs');
styleMultiple(buttons, 'buttons');
styleMultiple(h2s, "titles");
styleMultiple(forms, "forms");

function styleMultiple(array, className){
    for ( i = 0; i < array.length; i++){
        array[i].classList.add(className);
    }
}


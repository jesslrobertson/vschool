const readline = require("readline-sync");

const actions = ["Look through the book", "Look in the box", "Search the hole", "Open the door"]

let result;
let hasKey = false;
let isAlive = true;
let gotOut = false;

console.log("\nYou wake up in an unfamiliar place...")
const name = readline.question("\nWhat is your name? ");
console.log('\nHi ' + name + ', it seems you are locked in this room. Take a look around...');

while (gotOut === false && isAlive === true) {
    
    index = readline.keyInSelect(actions, "\nWhat would you like to do?", {cancel: false})
    console.log(actions[index]);
    
    if (actions[index] === "Look in the box") {
        result = ("\nhmm...just some old toys");
    } else if (actions[index] === "Look through the book") {
        result = ("\nYou found a key!");
        hasKey = true;
        
    } else if (hasKey === false && actions[index] === "Open the door") {
    result = ("\nThe door is locked.");
    } 
    else if (hasKey === true && actions[index] === "Open the door") {
        result = ("\nYou Escaped!");
        gotOut = true;
    }
    else if (actions[index] === "Search the hole") {
        result = ("\nYou died x_x");
        isAlive = false;
    }
    console.log(result);
}        



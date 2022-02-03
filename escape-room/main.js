const readline = require("readline-sync");

const actions = ["Look through the book", "Look in the box", "Search the hole", "Open the door"]

console.log("You wake up in an unfamiliar place...")
const name = readline.question("What is your name? ");
console.log('Hi ' + name + ', it seems you are locked in this room. Take a look around...');
index = readline.keyInSelect(actions, "What would you like to do?")
console.log(actions[index]);
let result;
if (actions[index] === "Look in the box") {
    result = ("\nhmm...just some old toys");
} else if (actions[index] === "Look through the book") {
    result = ("\nYou found a key!");
} else if (actions[index] === "Open the door") {
    result = ("\nThe door is locked.");
} else if (actions[index] === "Search the hole") {
    result = ("You died x_x")
}
console.log(result)

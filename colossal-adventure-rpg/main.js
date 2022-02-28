const readline = require("readline-sync");
const backpack = {
    items: [],
    addItem: function(item){
        this.items.push(item);
    },
    checkBag: function() {
        return this.items.map(function(item){
            return item.name;
        })
    },
};
const reactions = ["fight", "flee"]

function Item(name, purpose, value, condition, specialPower){
    this.name = name;
    this.purpose = purpose;
    this.value = value;
    this.specialPower = "none";
}
function Character(name, relationship, hP, skill, status) {
    this.name = name;
    this.relationship = relationship;
    this.hP = hP;
    this.skill = skill;
    this.status = alive;
}
//TODO: write while loop for receive action
function receiveAction(){
    const action = readlineSync.keyIn('press w to walk, p to check inventory,', {limit: 'wp'});
    if (action === "w"){
        console.log("walking");
        walk();
    } else {
        // TODO: console will print the players name, HP, and each item in their inventory
    }
}
function walk(){
    if (Math.random() * 100 < 75){
        console.log("All quiet...");
    }
    else {
        console.log("Something is coming...")
        runOrFight();
}
function runOrFight(){
    let enemy = enemies[Math.floor(math.random() * enemies.length)];
    console.log(enemy + "appeared! Will you fight or flee?");
    reactionChoice = readline.keyInSelect(enemy + "appeared! Will you fight or flee?", reactions){
        if (reactions[0] === true){
            fight();
        } else {
            flee();
        }
    }
}
//TODO write fight function
//TODO write flee function

let bread = new Item("bread", "food", "1 coin", "slightly stale");
let cloak = new Item("cloak", "clothing", "10 coins", "in decent shape");
let sword = new Item("basic sword", "weapon", "30 coins", "reasonably sharp");
let potion = new Item("healing potion", "magic restorative", "20 coins", "sealed", "adds 10 hP");
let boots = new Item("boots", "footwear", "10 coins", "sturdy");
let apples = new Item("apples", "food", "1 coin", "fresh");


let rodentOfUnusualSize = new Character("Rodent of Unusual Size", "enemy", 10, "large teeth, poor eyesight, and bad temper");
let princeHumperdink = new Character("Prince Humperdink", "enemy", 20, "air of entitlement, and a sword");
let theBruteSquad = new Character("The Brute Squad", "enemy", 15, "brute force");
let theBooer = new Character("The Booer", "enemy", 5, "Expert Heckler");

const enemies = [rodentOfUnusualSize, princeHumperdink, theBruteSquad, theBooer];

backpack.addItem(bread);
backpack.addItem(cloak);

const userName = readline.question("What is your name? ")
let self = new Character(userName, "self", 20);
console.log('Greetings, ' + userName + "! We are so glad you are here! Oh, you don't know where here is? Well, you're in the Fire Swamp. It's a lovely place - at least, it's lovely every day you're still breathing! (Press any key to continue)")
readlineSync.keyInPause()
console.log("Ah, well, I'm sorry to hear about your fight with the Prince. I can show you the trail out....maybe you can take out some of the pests that have been harrassing our little village on the way. At least you didn't come empty handed! What have you got in that bag, there? (Press any key to continue)");
readlineSync.keyInPause()
console.log(backpack.checkBag());
readlineSync.keyInPause()
console.log("You can check your inventory at any time by typing 'p' or 'print'. I can see that you're ready to be on your way. It's dangerous to go alone. Take this!");
backpack.addItem(sword);
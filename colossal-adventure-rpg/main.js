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
}
function Item(name, purpose, value, condition, specialPower, unique, attackAdvantage){
    this.name = name;
    this.purpose = purpose;
    this.value = value;
    this.specialPower = "none";
    this.attackAdvantage = 0;
}
function Character(name, hp, skill, attack, unique, loot) {
    this.name = name;
    this.hp = hp;
    this.skill = skill;
    this.isAlive = this.hp > 0;
    this.unique = true;
}
//TODO: write while loop for receive action
function receiveAction(){
    const action = readline.keyIn('press w to walk, p to check inventory,', {limit: 'wp'});
    if (action === "w"){
        console.log("walking");
        walk();
    } else {
        print();
    }
}
function walk(){
    if (Math.random() * 100 < 75){
        console.log("All quiet...")
        
    }
    else {
        console.log("Something is coming...")
        runOrFight();
    }
}
//TODO write print function
//TODO write fight function
function fight(enemy){
    let attack = Math.floor(Math.random() * self.attack);
    let counterAttack = Math.floor(Math.random() * enemy.attack);
}
//TODO write flee function
function flee(){
    console.log("run awaaaayyyyyyy");
}
//game items
const bread = new Item("bread", "food", "1 coin", "slightly stale", "none", false);
const cloak = new Item("cloak", "clothing", "10 coins", "in decent shape", "none", true);
const sword = new Item("basic sword", "weapon", "30 coins", "reasonably sharp", "none", true);
const potion = new Item("healing potion", "magic restorative", "20 coins", "sealed", "adds 10 hp", false);
const boots = new Item("boots", "footwear", "10 coins", "sturdy", "none", true);
const apples = new Item("apples", "food", "1 coin", "fresh", "none", false);
const specialSword = new Item("The sword of Inigo Montoya", "remarkable sword", "100 coins", "perfectly balanced", "+2 damage", true, 2);
//enemies
const rodentOfUnusualSize = new Character("Rodent of Unusual Size", 10, "large teeth, poor eyesight, and bad temper", 3, false);
const princeHumperdink = new Character("Prince Humperdink", 20, "air of entitlement, and a sword", 5, true);
const theBruteSquad = new Character("The Brute Squad", 15, "brute force", 3, false);
const theBooer = new Character("The Booer", 10, "Expert Heckler", 3, true);
const countRugen = new Character("Count Rugen", 15, "Has six fingers on his right hand", 4, true, specialSword);
//TODO: write heckling code for the Booer
const enemies = [rodentOfUnusualSize, princeHumperdink, theBruteSquad, theBooer, countRugen];

function runOrFight(){
    const reactions = ["fight", "flee"];
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(enemy.name + " appeared! Will you fight or flee?");
    const reactionChoice = readline.keyInSelect(reactions);//TODO remove cancel option from keyInSelect
    if (reactionChoice === 0){
        fight();
    } else {
        flee();
    }
}


backpack.addItem(bread);
backpack.addItem(cloak);
//script
const userName = readline.question("What is your name? ")
const self = new Character(userName, 20, "", 4);
console.log(self)
console.log('Greetings, ' + self.name + "! We are so glad you are here! Oh, you don't know where here is? Well, you're in the Fire Swamp. It's a lovely place - at least, it's lovely every day you're still breathing!")
readline.keyInPause()
console.log("Ah, well, I'm sorry to hear about your fight with the Prince. I can show you the trail out....maybe you can take out some of the pests that have been harrassing our little village on the way. At least you didn't come empty handed! What have you got in that bag, there?");
readline.keyInPause()
console.log(backpack.checkBag());
readline.keyInPause()
console.log("You can check your inventory at any time by typing 'p' or 'print'. I can see that you're ready to be on your way. It's dangerous to go alone. Take this!");
backpack.addItem(sword);
console.log(sword);

while (self.hp > 0){
    receiveAction();
};
function print(){
    let backpackInventory = [];
    for (i = 0; i < backpack.items.length; i++){
        let itemString = `\nItem: ${backpack.items[i].name}\nPurpose: ${backpack.items[i].purpose}\nValue: ${backpack.items[i].value}\nSpecial Power: ${backpack.items[i].specialPower} \n`;
        backpackInventory.push(itemString);
    }
    backpackInventory.join;
    console.log(`\nName: ${self.name}, \nHit Points: ${self.hp} \nItems in Backpack: \n${backpackInventory}\n`);
}
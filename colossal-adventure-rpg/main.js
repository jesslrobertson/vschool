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
//game items
const bread = new Item("bread", "food", "1 coin", "slightly stale", "none", false);
const cloak = new Item("cloak", "clothing", "10 coins", "in decent shape", "none", true);
const sword = new Item("basic sword", "weapon", "30 coins", "reasonably sharp", "none", true);
const potion = new Item("healing potion", "magic restorative", "20 coins", "sealed", "adds 10 hp", false);
const boots = new Item("boots", "footwear", "10 coins", "sturdy", "none", true);
const apples = new Item("apples", "food", "1 coin", "fresh", "none", false);
const specialSword = new Item("The sword of Inigo Montoya", "remarkable sword", "100 coins", "perfectly balanced", "+2 damage", true, 2);
//enemies
const rodentOfUnusualSize = new Character("Rodent of Unusual Size", 10, "large teeth, poor eyesight, and bad temper", 3, false, boots, 10);
const princeHumperdink = new Character("Prince Humperdink", 20, "air of entitlement, and a sword", 5, true, potion);
const theBruteSquad = new Character("The Brute Squad", 15, "brute force", 3, false, apples, 15);
const theBooer = new Character("The Booer", 10, "Expert Heckler", 3, true, potion);
const countRugen = new Character("Count Rugen", 15, "Has six fingers on his right hand", 4, true, specialSword);

const enemies = [rodentOfUnusualSize, princeHumperdink, theBruteSquad, theBooer, countRugen];

backpack.addItem(bread);
backpack.addItem(cloak);
//script
const userName = readline.question("Please enter your name: ")
const self = new Character(userName, 20, "", 4);
console.log("About you: You just woke up in what looks like a forest. \nYou don't know where you are, but otherwise, you seem to be ok.");
readline.keyInPause();
console.log(`\nIn fact, you have ${self.hp} hit points! \nYour current max attack power is ${self.attack} hp. \nYou notice a hermit standing over you...`);
readline.keyInPause();
console.log(`Greetings, ${self.name}! I am so glad you are here!`);
readline.keyInPause() 
console.log(`\n...Oh, you don't know where here is? Well, you're in the Fire Swamp. \nIt's a lovely place - at least, it's lovely every day you're still breathing!"`);
readline.keyInPause()
console.log("Ah, well, I'm sorry to hear about your fight with the Prince. \nI can show you the trail out....maybe you can take out some of the pests that have been harrassing me on the way. \nAt least you didn't come empty handed! What have you got in that bag, there?");
console.log(backpack.checkBag());
readline.keyInPause()
console.log("You can check your inventory at any time by typing 'p' or 'print'. \nI can see that you're ready to be on your way. \nIt's dangerous to go alone. Take this!");
backpack.addItem(sword);
readline.keyInPause()
console.log(`The hermit hands you a bundle...you unwrap it, and find a sword! \n...It's ${sword.condition}, but doesn't seem like anything special.`);

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

function runOrFight(){
    const reactions = ["fight", "flee"];
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyIndex = (enemies.indexOf(enemy));
    console.log(enemy.name + " appeared! Will you fight or flee?");
    const reactionChoice = readline.keyInSelect(reactions, null,{ cancel: false });
    if (reactionChoice === 0){
        fight(enemyIndex);
    } else {
        flee(enemyIndex);
    }
}

function receiveAction(){
    const action = readline.keyIn('press w to walk, p to check inventory,\n', {limit: 'wp'});
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

function flee(enemyIndex){
    if (Math.random() * 100 < 50){
        console.log("Run awaaaayyyyyyy");
        receiveAction();
    } else {
        console.log("Not fast enough. Get ready for a fight!")
        fight(enemyIndex);
    }
}

function fight(enemyIndex){
    let enemy = enemies[enemyIndex];
    while (self.hp > 0 && enemy.hp > 0){
        let attack = Math.floor(Math.random() * self.attack);
        if (attack === 0){
            console.log(self.name + " missed!");
        } else {
            console.log(self.name + " dealt " + attack + " hp damage!");
        }
        enemy.hp = enemy.hp - attack;
        let counterAttack = Math.floor(Math.random() * enemy.attack);
        if (counterAttack === 0){
            console.log(enemy.name + " missed!");
        } else {
            console.log(enemy.name + " dealt " + counterAttack + " hp damage!");
            if (enemy.name === "The Booer"){
                heckle();
            }
        }
        self.hp = self.hp - counterAttack;
        readline.keyInPause();
    }
    if (self.hp <= 0){
        console.log("(×-×) You died!")
    }
    if (enemy.hp <= 0){
        console.log("You defeated " + enemy.name + "!!!");
        if (enemy.unique === true){
            enemies.splice(enemyIndex, 1);
        } else {
            enemy.hp = enemy.initialHp;
        }
        loot(enemy);
        recoverHealth();
    }
}

function heckle(){
    const insults = ["Boooo...BOOOOOO!!!!!", "Rubbish!", "Filth!", "Slime!", "Muck!", "Putrescence", "You'll die in the Fire Swamp!!"];
    let insult = insults[Math.floor(Math.random() * insults.length)];
    console.log(insult);
}

function loot(enemy){
    console.log(`You got ${enemy.loot.name}!!`)
    backpack.addItem(enemy.loot);
    if (enemy.loot === potion){
        self.hp = self.hp + 10;
        console.log(`You drink the potion....and gain 10hp! You now have ${self.hp}hp!`);
    }
    if (enemy.loot === specialSword){
        self.attack = self.attack + 2;
        console.log(`You inspect the sword...It's ${specialSword.condition}, and easily worth ${specialSword.value}. \nYou have never seen its equal. \nYour max attack increases by 2! Your new max attack is ${self.attack}!`)
    }
}

function recoverHealth(){
    let health = Math.floor(Math.random() * 10);
    self.hp = health + self.hp;
    console.log(`\nYou added ${health} hp!`);
}

function Item(name, purpose, value, condition, specialPower, unique, attackAdvantage){
    this.name = name;
    this.purpose = purpose;
    this.condition = condition;1
    this.value = value;
    this.specialPower = specialPower;
    this.unique = unique;
    this.attackAdvantage = attackAdvantage;
}

function Character(name, hp, skill, attack, unique, loot, initialHp) {
    this.name = name;
    this.hp = hp;
    this.skill = skill;
    this.attack = attack;
    this.isAlive = this.hp > 0;
    this.unique = unique;
    this.loot = loot;
    this.initialHp = initialHp
}


// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// let computers = (0);
// for ( let i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//     computers++;
//     }
// }
// console.log(computers);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
    name: "Madeline",
    age: 80,
    gender: "female"
    },{
    name: "Cheryl",
    age: 22,
    gender: "female"
    },{
    name: "Sam",
    age: 30,
    gender: "male"
    },{
    name: "Suzy",
    age: 4,
    gender: "female"
    }
]

let patrons = 0
for ( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        patrons++;
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " should enjoy the show!");
    } else (console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to watch this film."));
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
            {console.log("Don't let her in.");
        } 
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender !== "female") {
        console.log("Don't let him in.");
        }
}

console.log(patrons);
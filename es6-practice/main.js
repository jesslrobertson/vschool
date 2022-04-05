// const name = "John";
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => {
//         return { type: "carrot", name: carrot }
//     })
// }

// console.log(mapVegetables(carrots))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => {
//         return person.friendly
//     })
// }

// console.log(filterForFriendly(people));

// let doMathSum = (a,b) => a + b;

// let produceProduct = (a, b) => a * b;

// console.log(doMathSum(4,6));
// console.log(produceProduct(7, 9));

// let person = {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 100
// }
// function printString(person) {
//     return(`Hi ${person.firstName} ${person.lastName}, how does it feel to be ${person.age}?`)
// }

// console.log(printString(person));

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];

// let filterForDogs = animals.filter(animals => animals.type === "dog");

// console.log(filterForDogs);

let location = "Hawaii";
let name = "Janice";

function travelGreeting(name, location) {
    return(`Hi ${name}!\nWelcome to ${location}.\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything. `)
}

console.log(travelGreeting(name, location));
numArray = [4, 8, 19, 21];

// const doubleNumbers = numArray.map(num => num * 2);

// console.log(doubleNumbers);

// function stringItUp(array){
//     return array.map(String);
// }
// console.log(stringItUp([4, 8, 19, 21]));

// function capitalizeNames(names){
//     let result = names.map(function(name){
//         let firstLetters = name[0].toUpperCase();
//         let theRest = name.substring(1).toLowerCase();
//         let fullName = firstLetters.concat(theRest);
//         return fullName;
//     })
//     return result;
// }
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// function namesOnly(arr){
//     let names = arr.map(function(person){
//         return person.name;
//     })
//     return names;
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

// function makeStrings(arr){
//     let movieGoers = arr.map(function(person){
//         if (person.age > 18){
//             return `${person.name} can go to the Matrix`;
//         } else {
//             return `${person.name} is under age!`
//         }
//     })
//     return movieGoers;
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

function readyToPutInTheDOM(arr){
    const domIfied = arr.map(function(person){
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
    })
    return domIfied;
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));




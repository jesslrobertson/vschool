// for (let i = 0; i <= 9; i++) {
//     console.log(i)
// }
// for (let i = 9; i >= 0; i--) {
//     console.log(i)
// }
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }
// numArr = []
// for (let i = 0; i <= 9; i++){
//     numArr.push(i);
// }
// console.log(numArr)
// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// const halfFruit = []
// for (let i = 0; i < fruit.length; i++){
//     if(i % 2 === 0){
//         halfFruit.push(fruit[i])    
//     }
// }
// console.log(halfFruit)
// const names = []
// const occupations = []
// const peopleArray = [
//     {
//     name: "Harrison Ford",
//     occupation: "Actor"
//     },
//     {
//     name: "Justin Bieber",
//     occupation: "Singer"
//     },
//     {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//     },
//     {
//     name: "Oprah",
//     occupation: "Entertainer"
//     }
// ]
// for ( let i = 0; i < peopleArray.length; i++){
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }
// for ( let i = 0; i < peopleArray.length; i++){
//     if (i % 2 === 0){   
//         names.push(peopleArray[i].name)
//         occupations.push(peopleArray[i].occupation)
//     }
// }
// console.log(names, occupations)
const arrayOfArrays = []
const numberOfSubArrays = 3
const fill = 0

// for (let i = 0; i < 3; i++){
//     let subArray = [];
//     for (let j = 0; j < 3; j++){
//         subArray.push(fill);
//     }
//     arrayOfArrays.push(subArray);
// }
// console.log(arrayOfArrays)

// for (let i = 0; i < 3; i++){
//     let subArray = [];
//     for (let j = 0; j < 3; j++){
//         subArray.push(i);
//     }
//     arrayOfArrays.push(subArray);
// }
// console.log(arrayOfArrays)
// for (let i = 0; i < 3; i++){
//     let subArray = [];
//     for (let j = 0; j < 3; j++){
//         subArray.push(j);
//     }
//     arrayOfArrays.push(subArray);
// }
// console.log(arrayOfArrays)
for (let i = 0; i < 3; i++){
    let subArray = [];
    for (let j = 0; j < 3; j++){
        subArray.push(j);
    }
    arrayOfArrays.push(subArray);
}
for (let i = 0; i < arrayOfArrays.length; i++){
    for (let j = 0; j < 3; j++){
        arrayOfArrays[i][j] = "x"
    }

}
console.log(arrayOfArrays)
// greeting = "yo YO yo";

// function upperAndLowerCase(string) {
//     let upper = string.toUpperCase ();
//     let lower = string.toLowerCase ();
//     console.log(upper + lower)
// }

// upperAndLowerCase(greeting);

// sentence = "I am propogating pothos";

// function findMiddleIndex(string) {
//     let stringArray = string.split("");
//     let middleIndex = stringArray.length / 2;
//     middleIndex = Math.floor(middleIndex);
//     return middleIndex;
// }

// console.log(findMiddleIndex(sentence));

// function returnFirstHalf(string) {
//     let middleIndex = findMiddleIndex(string);
//     let firstHalf = string.slice(0, middleIndex);
//     return firstHalf;
// }

// console.log(returnFirstHalf(sentence));

// function upperLowerSplit(string) {
//     let middleIndex = findMiddleIndex(string);
//     let firstHalf = string.slice(0, middleIndex);
//     let secondHalf = string.slice(middleIndex, string.length);
//     let upperFirst = firstHalf.toUpperCase();
//     let lowerSecond = secondHalf.toLowerCase();
//     return upperFirst + lowerSecond;
// }
// console.log(upperLowerSplit(sentence));

let phrase = "Cat, I'm a kitty cat, and I dance dance dance."

function capitalizeFirstLetter(string) {
    let stringArray = string.split(" ");
    let newString;
    let capitalizedArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        capitalizedArray.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1));
    }
    newString = capitalizedArray.join(" ");
    return newString;
}
console.log(capitalizeFirstLetter(phrase));
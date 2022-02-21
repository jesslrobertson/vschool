// greeting = "yo YO yo";

// function upperAndLowerCase(string) {
//     let upper = string.toUpperCase ();
//     let lower = string.toLowerCase ();
//     console.log(upper + lower)
// }

// upperAndLowerCase(greeting);

sentence = "I am propogating pothos";

function findMiddleIndex(string) {
    let stringArray = string.split("");
    let middleIndex = stringArray.length / 2;
    middleIndex = Math.floor(middleIndex);
    return middleIndex;
}

console.log(findMiddleIndex(sentence));

function returnFirstHalf(string) {
    let middleIndex = findMiddleIndex(string);
    let firstHalf = string.slice(0, middleIndex);
    return firstHalf;
}

console.log(returnFirstHalf(sentence));
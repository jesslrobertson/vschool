numArray = [15, 6, 19, 5, 12];

numArray.sort(function(a, b){
    return a - b;
})
console.log(numArray[numArray.length-1])

let lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]
let stringsWithExclamation = lettersWithStrings.filter(s => s.includes("!"));
console.log(stringsWithExclamation)

function isDivisible (x, y){
    if (x % y === 0){
        console.log("true");
    } else console.log("false");
}

isDivisible(25 , 5)
isDivisible(154, 3)
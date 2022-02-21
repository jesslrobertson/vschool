var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(array, string) {
    let sillyArray = [];
    let splitString = [];
    for (let i = 0; i < array.length; i++){
        sillyArray.push(array[i]);
        splitString = string.toUpperCase().split("");
        for (let j = 0; j < splitString.length; j++){
            sillyArray.push(splitString[j]);
        }
    }
    return sillyArray;
}
console.log(forception(people, alphabet));


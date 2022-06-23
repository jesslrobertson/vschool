var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

console.log(cipher(input, shift))

function cipher(input, shift) {
    const alphabet = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if (shift > 26 || -26){
        shift = shift % 26
    }
    const charArray = input.split("");
    const indexArray = charArray.map(char => alphabet.indexOf(char));
    let shiftedArray = indexArray.map(num => {
        if (num !== 0){
            num += shift;
        } 
        if (num > 26){
            num -= 26;
        }
        if (num < 0){
            num += 26
        }
        return num
    })
    const cipherArray = shiftedArray.map(num => alphabet[num])
    const cipher = cipherArray.join("")
    return cipher 
}

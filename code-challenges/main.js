// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// Notes
// Notice that num is also included in the returned array.

// function arrayOfMultiples (num, limit) {
//     let multipleArray = [];
//     for (i = 1; i <= limit; i++){
//         multipleArray.push(num * i);
//     }
//     console.log(multipleArray);
// }

// arrayOfMultiples(7, 5) 
// arrayOfMultiples(12, 10) 
// arrayOfMultiples(17, 6) 

// Create a function to return the amount of potatoes there are in a string.
// Examples

// function potatoes(string){
//     let potatoArr = (string.match(/potato/g));
//     console.log(potatoArr.length)
// }
// potatoes("potato") 

// potatoes("potatopotato") 

// potatoes("potatoapple") 

// const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// function balanced (word){
//     const reducer = (accumulator, curr) => accumulator + curr;
//     const charArray = word.split("");
//     if (charArray.length % 2 !== 0){
//         charArray.splice(Math.floor(charArray.length / 2), 1 )
//     }
//     console.log(word)
//     const letterValueArray = charArray.map(letter => letters.indexOf(letter))
//     const firstHalf = letterValueArray.slice(0 , letterValueArray.length / 2)
//     const secondHalf = letterValueArray.slice(letterValueArray.length/2)
//     const firstTotal = firstHalf.reduce(reducer)
//     const secondTotal = secondHalf.reduce(reducer)
//     return firstTotal === secondTotal ? true : false 
// }

// console.log(balanced('hannah'))

function subsequence(nums, k) {
    let sortedNums = nums.sort(function(a, b){return b - a});
    console.log(sortedNums)
    const largestNums = sortedNums.slice(0, k)
    const total = largestNums.reduce(function (x, y) {
        return x + y;
        }, 0);
    console.log(`The largest subsequence is ${largestNums} for a total of ${total}`)
}

subsequence([3,4,3,3], 2)











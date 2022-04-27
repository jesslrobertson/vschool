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

function potatoes(string){
    let potatoArr = (string.match(/potato/g));
    console.log(potatoArr.length)
}
potatoes("potato") 

potatoes("potatopotato") 

potatoes("potatoapple") 










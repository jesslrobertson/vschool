// function collectAnimals(...animals) {
//     return animals;
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     let foods = {fruit, sweets, vegetables};
//     return {foods};
// }

// console.log(combineFruit(["apple", "pear"],
//             ["cake", "pie"],
//             ["carrot"]));
// //=> {
//     //     fruit: ["apple", "pear"],
//     //     sweets: ["cake", "pie"],
//     //     vegetables: ["carrot"]
//     // }
// function parseSentence({ location, duration }){
//     return `We're going to have a good time in ${location} for ${duration}`
// }

// console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
// }));

// function returnFirst(items){
//     const [firstItem] = items;
//     return firstItem
// }
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr;
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities));

// function combineAnimals(...arrays) {
//     let combinedArray = [];
//     return combinedArray.concat(...arrays);
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function product(a, b, c, d, e) {
//     let numbers = [a,b,c,d,e];
//     return numbers.reduce(acc, number => acc * number, 1);
// }
// items = (a, b, c, d, e);
// function unshift(array, ...items) {
//     return array.push(...items);
// }

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {firstName, lastName};
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
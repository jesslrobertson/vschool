// function total(arr) {
//     const result = arr.reduce(function(final, num){
//         final += num;
//         return final
//     })
//     return result;
// }

// console.log(total([1,2,3])); // 6

// function stringConcat(arr) {
//     const result = arr.reduce(function(final, string){
//         return final + "" + string;
//     }, [""]);
//     return result;
// }

// console.log(stringConcat([1,2,3])); // "123"

// function totalVotes(arr) {
//     const totalVotes = arr.reduce(function(final, voter){
//         if (voter.voted){
//             final++
//         }
//         return final;
//     }, 0);
//     return totalVotes;
// }

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
// console.log(totalVotes(voters)); // 7

// function shoppingSpree(arr) {
//     const totalDamage = arr.reduce(function(final, item){
//         final += item.price;
//         return final;
//     }, 0)
//     return totalDamage;
// }

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(shoppingSpree(wishlist)); // 227005

// function flatten(arr) {
//     const flatArray = arr.reduce(function(final, array){
//         return final.concat(array);
//     }, []);
//     return flatArray;
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    const voteStats = arr.reduce(function(final, voter) {
        if (voter.age <= 25){
            final.numYoungPeople++
        }
        if (voter.age <= 25 && voter.voted){
            final.numYoungVotes++
        }
        if (voter.age > 25 && voter.age < 35){
            final.numMidPeople++;
        }
        if (voter.age > 25 && voter.age < 35 && voter.voted){
            final.numMidVotes++;
        }
        if (voter.age > 35){
            final.numOldPeople++
        }
        if (voter.age > 35 && voter.voted){
            final.numOldVotes++
        }
        return final;
    }, {numYoungPeople: 0, numYoungVotes: 0, numMidPeople: 0, numMidVotes: 0, numOldPeople: 0, numOldVotes: 0});
    return voteStats;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

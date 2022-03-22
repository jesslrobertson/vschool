// function sum(x, y){
//     try{
//         if (typeof x !== "number" || typeof y !== "number"){
//             throw new Error("This isn't a number!")
//         }
//     } catch(err){
//         console.log(err);
//     }
//     return x + y;
// }

// console.log(sum(3, 2));

// function sum(x , y){
//     return x + y;
// }
// try{
//     let inputA = 3;
//     let inputB = true;
//     if (typeof inputA !== "number" || typeof inputB !== "number"){
//         throw new Error("This isn't a number!");
//     }
//     console.log(sum (inputA, inputB));
// } catch(err){
//     console.log(err);
// }


var user = {username: "sam", password: "123abc"};
var user2 = {username: "nori", password: "greenies"};
function login(username, password){
    if (username === "sam" && password === "123abc"){
        console.log("login successful!")
    } else {
        console.log("username or password is incorrect");
    }
}

login("sam", "123abc");

try {
    login("nori", "greenies")
    if (username !== "sam" || password !== "123abc"){
        throw new Error("Username or password is incorrect");
    }

} catch(err) {
    console.log(err);
} 


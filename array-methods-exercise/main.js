var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
vegetables.push(3);
console.log(vegetables.length);
console.log("vegetables", vegetables);

fruit.shift()
index = fruit.indexOf("orange");
fruit.push(1)
console.log("fruit:", fruit);
console.log(index);

const food = fruit.concat(vegetables);

food.splice(4, 2);
food.reverse();

const foodString = food.join(" ");
console.log("food:", food);
console.log(foodString)

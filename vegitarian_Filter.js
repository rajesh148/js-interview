// function vegitarianItems(menu) {
//     const menuNode = document.querySelector("#menu");

//     const vegitarianDishes = menu.filter(op => op.isVegitarian === true);

//     vegitarianDishes.forEach(op => {
//         let dish = document.createElement('li');
//         dish.textContent = op;
//         menuNode.appendChild(dish)
//     })

// }

// const menu = [
//     {
//         name: "V",
//         isVegitarian: false,

//     },
//     {
//         name: "R",
//         isVegitarian: true

//     },
//     {
//         name: "J",
//         isVegitarian: true

//     },
//     {
//         name: "JL",
//         isVegitarian: false

//     },
// ]

// vegitarianItems(menu)

console.log("hello");

let array = [1, 2, 3, 4];
let array2 = ["Hello", 1, "2"];
let array3 = ["hi", "how", "are"];

let myArray = [];

myArray.push(array);
myArray.push(array2);
myArray.push(array3);

console.log(myArray);

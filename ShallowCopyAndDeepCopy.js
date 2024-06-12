// const obj = {
//   name: "Rajesh",
// };

// ///Shallow copy

// //Method 1
// let user = Object.assign({}, obj);
// user.name = "Arya";

// console.log("obj ", obj);
// console.log("User ", user);

// //Method 2
// let user2 = { ...obj };
// user2.name = "Anand";

// console.log("obj ", obj);
// console.log("User ", user2);

//ANOTHER PROBLEM CAME
let person = {
  name: "Sai",
  address: {
    city: "Rajam",
    state: "AP",
  },
  getData: function () {
    return "Data is here";
  },
};

let person2 = JSON.parse(JSON.stringify(person));

console.log("Person ", person);
console.log("Person 2 ", person2);

const obj = {
  name: "Rajesh",
  age: 25,
  "watching a movie": true,
};
// console.log(obj.name); //It is called dot notation
// console.log(obj["watching a movie"]); //It is called bracket notation
// console.log(obj);
delete obj.age;
// console.log(obj);

//How to add dynamic values to an Object?
const property = "FirstName";
const vlaueOfIt = "Rajesh";

//To add  dynamic propery to an object we should use [properyName]:value
const user = {
  [property]: vlaueOfIt,
};

// console.log(user);

//Now we have an object how to print the keys and values or loop throught it?
const person = {
  name: "Rajesh Bagguva",
  age: 25,
  doYouLikeMovies: true,
};

//To loop through we can use "for-in";

for (key in person) {
  // console.log(key);
  // console.log(person[key]);
}

//Delete is a keyword which can delete a property from an object;

//1 question
/*
const func = (function (a) {
  delete a;
  return a
})(5)

console.log(func) //output: 5; Because here the "a" is a local variable so delete wont work on local variables
*/

//2 question

const objj = {
  a: "one",
  b: "two",
  a: "three",
};
// Here we have 2 keys. so the last added value will be updated to the key "a"; So out put is {a:'three',b:'two'}
// console.log(objj);

//3rd question
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }

  // console.log(obj);
}

/*

//3rd question

const a = {};
const b = { key: "b" };
const c = { ket: "C" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); //output is 456

//Because here "b" and "c" are objects. so it will take like this
a["[object Object]"] = 123;
a["[object Object]"] = 456;

// so that it printing 456
*/
//4rth question
//What is JSON.stringify and JSON.parse?

const obj2 = {
  name: "Rajesh",
  age: 25,
};

console.log(obj2); //Now how to convert obj2 into string???

const strObj = JSON.stringify(obj2);
console.log(strObj);

//Now how to convert the strObj back to an Object??

console.log(JSON.parse(strObj));

//Where you can use this? what are the uses?

//Ans) The common place is store the object in the local storage

// localStorage.setItem("Test", strObj);

// const myObj = JSON.parse(localStorage.getItem("Test"));
// console.log("myObj", myObj);

//Quest 5
//This is a spread[...] operator it can spread the values
console.log([..."Lydia"]); //["L","y","d","i","a"]

//Question 6
const user1 = { name: "Raj", age: 25 };
const anand = { ...user1, admin: true };
console.log(anand);

//Question 7
const settings = {
  userName: "Rajesh",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

//In JSON.stringify if you mention like this, it will completely ignore the userName property. It will only
//print which you mentioned in the array. Here the key should match with the object[here settings]

//Question 8
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, //here "this" pointing to the shape parent object that is Window object
};

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NAN

//Here the second log is not UNDEFINED it is NAN, because if we multiply a Number with Undefined it should be NAN

//Question 9
//What is Destructering in Objects?
//Ans) Unpack properties from object;

let user22 = {
  name: "Rajesh",
  age: 25,
};

// const { name } = user22;

// console.log(name);

//What if we have already another variable has the same name
const name = "Sai botcha";

const { name: myName } = user22;
console.log(myName);

//What if we have nested objects? Is it possible to destructure?

let user33 = {
  name: "Anand",
  age: 24,
  fullName: {
    first: "Divya",
    last: "Yenni",
  },
};

const {
  fullName: { first },
} = user33;
console.log(first);


//Question 10

//So in this case the interviewer confuse you. So here the rest parameter[...] must be last parameter.
//So becareful while you find these type of questions
function getItem(fruitList, ...args, fruits) {
  return [...fruitList,...args,fruits]
}

console.log(getItem["apple","mango"],"grape","banana") // apple,mango,grape,banana
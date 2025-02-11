///POLIFIL FOR MAP FUNC
// Array.prototype.myMapFunc = function (cb) {
//   let temp = [];

//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this)); 
//   }

//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const multiplyByFour = nums.myMapFunc((num) => num * 4);

// console.log(multiplyByFour);

//POLIFIL FOR FILTER

// const students = [
//   { name: "Piyush", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "Kaushal", rollNumber: 16, marks: 35 },
//   { name: "Dilpreet", rollNumber: 7, marks: 55 },
// ];

// //Renturn only details of those who scored more than 60

// const details = students.filter((stu) => stu.marks > 60);

// // console.log(details);

// //Renturn only details of those who scored more than 60 and rollNumber greater than 15

// const details2 = details.filter((stu) => stu.rollNumber > 15);
// // console.log(details2);

// //SUM OF MARKS OF ALL STUDENTS

// const sumOfMarks = students.reduce((acc, cur) => {
//   return acc + cur.marks;
// }, 0);

// // console.log(sumOfMarks);

// //RETURN ONLY NAMES WHO SCORED MORE THAN 60

// const moreThan60 = students
//   .filter((stu) => stu.marks > 60)
//   .map((stu_nam) => stu_nam.name);

// console.log(moreThan60);

//MAP Polifil

Array.prototype.myMap = function (cb) {
  let tempAr = [];

  for (let i = 0; i < this.length; i++) {
    tempAr.push(cb(this[i], i, this));
  }

  return tempAr;
};

const nums = [1, 2, 3, 4];

// const multiplyByFour = nums.myMap((num) => num * 4);

// console.log(multiplyByFour);

//FILTER Polifil

// Array.filter((num, i, arr) => {});

// Array.prototype.myFilter = function (cb) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// };

// console.log(nums.filter((nu) => nu > 1));

//REDUCE Polifil

// Array.reduce((acc, cur,i, arr) => {}, initialValue);

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumilator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumilator = accumilator ? cb(accumilator, this[i], i, this) : this[i];
//   }

//   return accumilator;
// };

// const numbers = [1, 2, 3, 4, 5];

// console.log(
//   numbers.myReduce((acc, cur) => {
//     return acc + cur;
//   }, 5)
// );

//CALL polifil

const car1 = {
  color: "Red",
};

function purchaseCar(company, price) {
  console.log(
    `I have purchased ${this.color} - ${company} car and it costs ${price}`
  );
}

// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this != "function") {
//     throw new Error(this + "It's not callable");
//   }

//   context.fn = this;
//   context.fn(...args);
// };

// let purchaseCar1 = "hi";

// purchaseCar.myCall(car1, "Ferrari", "100000");

//APPLY Polifil

// Function.prototype.myApply = function (context = {}, args = []) {
//   console.log(...args);
//   if (typeof this != "function") {
//     throw new Error(this + "It's not callable");
//   }

//   if (!Array.isArray(args)) {
//     throw new Error("It is not an array");
//   }

//   context.fn = this;
//   context.fn(...args);
// };

// purchaseCar.myApply(car1, ["tata", 2000000]);

//BIND Polifil

// Function.prototype.myBind = function (context, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not callable");
//   }

//   context = this;

//   return function (...params) {
//     return context(...args, ...params);
//   };
// };

// let po = purchaseCar.myBind(car1);

// po("xyz", 111);

//Memoise Polifil

// const myMemoize = (fn, context) => {
//   let res = {};

//   return function (...args) {
//     let convertArgs = JSON.stringify(...args);

//     if (!res[convertArgs]) {
//       res[convertArgs] = fn.call(context || this, ...args);
//     }

//     return res[convertArgs];
//   };
// };

// const complexCalc = (num1, num2) => {
//   for (let i = 0; i < 100000000; i++) {}

//   return num1 * num2;
// };

// let memoizedValues = myMemoize(complexCalc);

// console.time("First Call");
// console.log(memoizedValues(9467, 7649));
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(memoizedValues(9467, 7649));
// console.timeEnd("Second Call");

//POLIFIL FOR PROMISE

function PromisPolyfil(executor) {
  let onResolve,
    onReject,
    isFullFilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onReject === "function") {
      onReject(value);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFullFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new PromisPolyfil((resolve, reject) => {
  // setTimeout(() => {
  reject(2);
  // }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

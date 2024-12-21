//Functions in JS

//Q1) What is Function declerations?

function fun() {
  console.log("This is a function");
}

//This is also called as Function definition or function Statement

//q2) What is function Expression?
//Ans) Function expressions are assigning a function to a variable is called function Expression

const square = function (num) {
  return num * num;
};

console.log(square(5));

//q3) What are First class functions

function displaySquareFn(fn) {
  console.log("Square ", fn(5));
}

displaySquareFn(square);

//q4)What is IIFE?
//A) Immediate Invoked Funtion Expressions

(function squaree(num) {
  console.log(num);
  return num * num;
})(4);

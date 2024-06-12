console.log("Currying");

//There are two ways 1) using bind 2) using closure

//BIND
// function multiply(x, y) {
//   console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this);

// multiplyByTwo(5, 4);

//CLOSURE

function multiply(x) {
  return function (y) {
    console.log(x * y);
  };
}

// let multiplyByTwo = multiply(2);
// multiplyByTwo(3);

// let mutliplyByThree = multiply(3);
// mutliplyByThree(10);

// Not related to currying

// sum(1)(2)(3)(4)();

const sum = (a) => {
  return (b) => {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum(1)(2)());

// console.log("hello");

// const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     res();
//   }, 1000);
// });

// p.then(() => console.log("Done"));

function outer() {
  let count = 0;

  return function inner() {
    return ++count;
  };
}

var counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());

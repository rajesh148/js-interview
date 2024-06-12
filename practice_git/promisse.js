// // const p = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("Promise resolved!!!");
// //   }, 3000);
// // });

// // function getData() {
// //   p.then((res) => console.log(res));
// //   console.log("Hellow");
// // }

// // // getData();

// // async function getData1() {
// //   const val = await p;
// //   console.log(val);
// //   console.log("Hellow");
// // }

// // getData1();

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p1 failed");
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p2 failed");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p3 success");
//   }, 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.error(err);
//     console.error(err.errors);
//   });

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();

  }
  x();
}
z();

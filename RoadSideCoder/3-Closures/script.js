// function createBase(num) {
//   return function (num2) {
//     console.log(num + num2);
//   };
// }
// var addSix = createBase(6);

// addSix(10); // 16
// addSix(21); // 27

// addSix();

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     // console.log(a)
//     console.log(a[index]);
//   };
// }
// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");

// using let
function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function (log) {
        console.log(i); // 0,1,2
      }, i * 1000);
    }

    inner(i);
  }
}
a(); // using let will give you 0 , 1 ,2

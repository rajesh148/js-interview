//INPUT

// console.log(
//   computeAmount()
//     .lacs(15)
//     .crore(5)
//     .crore(2)
//     .lacs(20)
//     .thousand(45)
//     .crore(7)
//     .value()
// );

//output:143545000

// function computeAmount() {
//   let total = 0;

//   function addTotal(num) {
//     total += num;

//     return api;
//   }

//   const api = {
//     lacs: function (num) {
//       return addTotal(num * 100000);
//     },

//     crores: function (num) {
//       return addTotal(num * 10000000);
//     },

//     thousands: function (num) {
//       return addTotal(num * 1000);
//     },

//     hundreds: function (num) {
//       return addTotal(num * 100);
//     },
//     value: function () {
//       return total;
//     },
//   };

//   return api;
// }

// console.log(
//   computeAmount()
//     .lacs(15)
//     .crores(5)
//     .crores(2)
//     .lacs(20)
//     .thousands(45)
//     .crores(7)
//     .value()
// );

var obj = {
  helloworld: function () {
    return "Hello World " + this.name;
  },
  name: "Hello",
};

var obj2 = {
  helloworld: obj.helloworld,
  name: "Bye",
};

console.log(obj2.helloworld.call(obj));

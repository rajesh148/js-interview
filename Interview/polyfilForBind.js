let nameObj = {
  firstName: "Rajesh",
  lastName: "Bagguva",
};

let printName123 = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + state
  );
};

// let copyPrintName = printName.bind(nameObj, "BVRM");
// copyPrintName("Srikakulam");

Function.prototype.myBind = function (...args) {
  let obj = this;
  console.log(this)
  params = args.slice(1);
  return function (...remainingParams) {
    obj.apply(args[0], [...params, ...remainingParams]);
  };
};

let copyPrintName2 = printName123.myBind(nameObj, "BVRM");
copyPrintName2("srikakulam");






// console.log("Hello");

// //Call and

// let name = {
//   firstName: "Rajesh",
//   lastName: "Bagguva",
// };
// let printFullName = function (hometown, state) {
//   console.log(
//     this.firstName + " " + this.lastName + " from " + hometown + " " + state
//   );
// };

// // printFullName.call(name, "Vijayawada", "AP");

// let name2 = {
//   firstName: "Rohit",
//   lastName: "Sharma",
// };

//Function barrowing

// printFullName.call(name2, "Mumbai", "Maharastra");

// printFullName.apply(name2, ["Mumbai", "Maharastra"]);

//bind method

// console.log("Bind Method");
// const printName = printFullName.bind(name2, "Mumbai", "Maharastra");

// console.log(printName);

// printName();

//POLIFIL FOR BIN

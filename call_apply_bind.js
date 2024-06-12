let nameObj = {
  firstName: "Rajesh",
  lastName: "Bagguva",
};

let printFullName = function (homeTown) {
  console.log(this.firstName + " " + this.lastName + " from " + homeTown);
};

let nameObj2 = {
  firstName: "Rohit",
  lastName: "Sharma",
};

//Fucntion borrowing
printFullName.call(nameObj, "AP");
printFullName.call(nameObj2, "UP");

printFullName.apply(nameObj, ["ap"]);
printFullName.apply(nameObj2, ["up"]);

// let printName = printFullName.bind(nameObj, "Mumbai");

//POLIFIL FOR BIND
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);

  return function (...remainingArgs) {
    obj.apply(args[0], [...params, ...remainingArgs]);
  };
};

let printName = printFullName.myBind(nameObj, "Mumbai");
printName();

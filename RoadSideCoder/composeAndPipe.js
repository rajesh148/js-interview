const addFive = (num) => {
  return num + 5;
};

const subtractTwo = (num) => {
  return num - 2;
};

const multiplyFour = (num) => {
  return num * 4;
};

//COMPOSE MEANSE LAST TO FIRST

//Method 1 without using built in functions

// const compose = (...args) => {
//   return (num) => {
//     let res = num;
//     for (let i = args.length - 1; i >= 0; i--) {
//        res = args[i](res);
//     };

//     return res;
//   }
// };

//Metod 2: With using Built In functions
const compose = (...args) => {
  return (num) => {
    return args.reduceRight((acc, cur) => {
      return cur(acc);
    }, num);
  };
};

//PIPE

//pipe is the opposite of the compost function.

const pipe = (...args) => {
  return (num) => {
    return args.reduce((acc, cur) => {
      return cur(acc);
    }, num);
  };
};

// const evalute = compose(addFive, subtractTwo, multiplyFour);
const evalute = pipe(addFive, subtractTwo, multiplyFour);

console.log(evalute(5)); //23

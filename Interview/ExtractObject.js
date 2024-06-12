const input1 = { a: 1, b: 2, c: 3, d: 11, e: 121 };
const input2 = { a: 11, e: 12, f: 6, d: 10 };

//out put = {d:10,e:12};

const output = {};

Object.keys(input1).forEach((el) => {
  if (input1[el] === input2[el]) {
    output[el] = input1[el];
  }
});

console.log(output);

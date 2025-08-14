let arr = [1, 2, 3, 3, 4, 1, 4, 5, 1, 2];

let obj = {};

// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
// }

for (let i of arr) {
  obj[i] = obj[i] ? obj[i] + 1 : 1;
}

console.log(obj);

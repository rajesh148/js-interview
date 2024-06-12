// const givenArray = [1, 4, 3, 2];
const givenArray = [1, 2, 3, 2];
// const givenArray = [1, 4, 5, 1, 3, 2];

givenArray.sort();
console.log(givenArray);

let test = [];
let i = 0;
let j = givenArray.length - 1;
while (i <= j) {
  test.push(givenArray[i] + givenArray[j]);
  // console.log(test);
  // console.log(i, j);
  i++;
  j--;
}

// console.log(test);

let flag = 0;

for (let i = 1; i < test.length; i++) {
  if (test[0] !== test[i]) {
    console.log(-1);
    flag = 1;
    break;
  }
}

if (flag != 1) {
  let temp = [];

  let i = 0;
  let j = givenArray.length - 1;

  while (i <= j) {
    temp.push(givenArray[i] * givenArray[j]);
    i++;
    j--;
  }

  console.log(temp.reduce((acc, cur) => acc + cur));
}

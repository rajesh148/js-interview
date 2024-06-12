const input = [5, 7, 9, 11, 15, 17];
//out put is 13
const len = input.length;

/* ONE WAY
for (let i = 0; i < len; i++){
  const start = input[i];
  const next = start + 2;
  if (input[i + 1] !== next) {
    console.log(next);
    break;
  }
}
*/
const lastEl = input[input.length - 1];
console.log(lastEl);
const res = [];
for (let j = input[0]; j < lastEl; j++) {
  if (j % 2 === 1) {
    if (!input.includes(j)) {
      res.push(j);
    }
    // if (!checkYesOrNo(j)) {
    //   res.push(j);
    // }
  }
}

function checkYesOrNo(num) {
  for (let i = 0; i < len; i++) {
    console.log("Came " + num);

    if (input[i] === num) {
      console.log("Y" + input[i]);
      return true;
    } else {
    }
  }
}

console.log(res[0]);

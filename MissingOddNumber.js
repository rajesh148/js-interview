const input = [5, 9, 11, 15, 17];
const output = 13;

function MissingOddNum(ar) {
  let missionOddNums = [];
  for (let i = 0; i < ar.length; i++) {
    let element = ar[i];
    let nextElement = element + 2;
    if (ar[i + 1] !== nextElement) {
      missionOddNums.push(nextElement);
    }
  }

  console.log(missionOddNums)
  return missionOddNums[0];
}

console.log(MissingOddNum(input));

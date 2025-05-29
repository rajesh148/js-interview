const input = [1, 2, 3, 7, 8, 10, 11, 12];

function splitConsecutive(arr) {
  // Your implementation

  let result = [];
  let temp = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      temp.push(arr[i]);
    } else {
      result.push(temp);
      temp = [arr[i]];
    }
  }

  result.push(temp);

  return result;
}

console.log(splitConsecutive(input));
// Expected Output: [[1, 2, 3], [7, 8], [10, 11, 12]]

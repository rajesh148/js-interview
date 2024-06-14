/*
Hi, I searched on the internet and I found this solution. Here I got the logic. Thank you for giving this opportunity.
*/

function getTheSum(num) {
  //The formula to caluclate the totalSum of the given Number
  let totalSum = (num * (num + 1)) / 2;

  console.log(totalSum);

  //The variable to store the left side sum
  let leftSum = 0;

  for (let i = 1; i <= num; i++) {
    leftSum += i;

    // console.log("left sum " + leftSum);

    let rightSum = totalSum - leftSum + i;

    // console.log("rightSum " + rightSum);

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

console.log(getTheSum(49));

// function findMissingNum(ar){

// let min = Math.min(...ar)
// let max = Math.max(...ar)
// let output = []

// let set  = new Set(ar);

// for(let i = min; i< max;i++){
//     if(!set.has(i)){
//         output.push(i)
//     }
// }

// return output
// }

// console.log(findMissingNum([1,2,3,5,6,8]))

//Q2

function findMissingNum(ar) {
  let n = ar.length + 1;

  let sum = (n * (n + 1)) / 2;

  console.log(sum);

  let totalSum = ar.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  console.log(totalSum);

  return sum - totalSum;
}

console.log(findMissingNum([1, 2, 3, 5, 6]));

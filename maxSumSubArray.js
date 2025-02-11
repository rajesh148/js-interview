function maximumSumSubAr(ar, size, step) {
  let i = 0;

  let res = [];

  while (i + size <= ar.length) {
    let subAr = ar.slice(i, i + size);
    let sum = subAr.reduce((acc, cur) => acc + cur, 0);
    res.push(sum);
    i += step;
  }
  return res;
}

console.log(maximumSumSubAr([4, 7, 3, 9, 6, 1, 8, 0], 3, 3));

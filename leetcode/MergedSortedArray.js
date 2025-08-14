// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
let n1 = [1];
let n2 = [];
let m = 1;
let n = 0;
function mer(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  if (nums2.length < 1) {
    return nums1;
  }
  let numCopy = nums1.slice(0, m);
  //   console.log(numCopy);

  for (let i = 0; i < m + n; i++) {
    if (numCopy[p1] < nums2[p2]) {
      nums1[i] = numCopy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}

console.log(mer(n1, m, n2, n));

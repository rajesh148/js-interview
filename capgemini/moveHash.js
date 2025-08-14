let st = "Move#hash#at#last";
// let st = [1, 0, 4, 5, 0, 7, 0, 0, 8];
// console.log("hello");
function rem(s) {
  let arr = s.split(""); // Convert string to array
  let x = arr.length - 1; // Start filling from the end

  // Move non-# characters to the end
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "#") {
      arr[x] = arr[i];
      x--;
    }
  }

  // Fill the beginning with #
  for (let i = 0; i <= x; i++) {
    arr[i] = "#";
  }

  return arr.join(""); // Convert back to string
}

console.log(rem(st)); // Output: "###Movehashatlast"

// let array = [1, 2, 3, 4];
// let array2 = ["Hello", 1, "2"];
// let array3 = ["hi", "how", "are"];

// let myArray = [];

// myArray.push(array);
// myArray.push(array2);

// console.log(myArray);
console.log("Hello")

function FindTheNumInTheArray(arr, num) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === num) {
      return i;
    }
  }

  return -1;
}

console.log(FindTheNumInTheArray([1,2,3], 3))
//q11) Remove an elment by index , [1,2,3,4,5] remove index 2 ; //output [1,2,4,5]]

// function RemoveElementByIndex(ar, idx) {
//   ar.splice(idx, 1);
//   return ar;
// }

// console.log(RemoveElementByIndex([1, 2, 3, 4, 5], 2));

//q12) Write a program to empty an array keeping the original array;

// function EmptyArray(ar) {
//   let newar = [...ar];

//   console.log((newar.length = 0));
//   return newar;
// }

// console.log(EmptyArray([1, 2, 3, 4]));

// //q13) Rotate one position

// function rotatePos(arr, n) {
//   for (let i = 0; i < n; i++) {
//     let val = arr.pop();
//     arr.unshift(val);
//   }

//   return arr;
// }

// console.log(rotatePos([1, 2, 3, 4, 5], 2));

//q14) Create a object from arra ;

// const arr = [
//   { id: "a", value: 1 },
//   { id: "b", value: 2 },
//   { id: "c", value: 3 },
//   { id: 3, value: "D" },
// ];

// //Output should be {a:1,b:2,c:3}

// function createObjectFromArray(ar) {
//   let result = {};

//   for (let obj of ar) {
//     result[obj.id] = obj.value;
//   }

//   return result;
// }

// console.log(createObjectFromArray(arr));

//q15) Count and display the all values; {h:2,1:3...etc}

// function countTheFrequency(arr) {
//   let freq = {};

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (!freq[element]) {
//       freq[element] = 1;
//     } else {
//       freq[element]++;
//     }
//   }

//   return freq;
// }

// console.log(countTheFrequency(["a", "a", "a", "b", "g", "g", "h"]));

//q16)Move all negative values to right

// function MoveAllNegativeValuesToRight(arr) {
//   let negative = [];
//   let positive = [];
//   arr.forEach((item, i, arr) => {
//     if (item < 0) {
//       negative.push(item);
//     } else {
//       positive.push(item);
//     }
//   });
//   console.log("Negative ", negative);
//   console.log("positve ", positive);

//   return [...positive, ...negative];
// }

// console.log(MoveAllNegativeValuesToRight([1, -1, -3, -2, 7, 5, 11, 6]));

// q17)Count max consicutive numbers

function CountMaxConsicutiveNumbers(arr) {
  let len = arr.length;

  let count = 0;
  let result = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      count = 0;
    } else if (arr[i] === 1) {
      count++;
    } else {
      count = 0;
    }

    result = Math.max(result, count);
  }
  return result;
}

console.log(CountMaxConsicutiveNumbers([1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1]));

// //q18)Find if any sub array having sum zeor.

// function subArrayExists(arr) {
//   const sumSet = new Set();

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (sum === 0 || sumSet.has(sum)) return true;

//     sumSet.add(sum);
//   }

//   return false;
// }

// const arr = [4, 2, -3, 1, 6];
// if (subArrayExists(arr)) console.log("Found a subarray with 0 sum");
// else console.log("No Such Sub Array Exists!");

//q19) Check the array is palindrom or not

// const arr = [1, 2, 3, "A", 3, 2, 1];

// function checkPalindrom(ar) {
//   console.log(ar);
//   for (let i = 0; i < ar.length / 2; i++) {
//     if (ar[i] !== ar[ar.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// // console.log(checkPalindrom(arr));
// console.log(checkPalindrom("aba".split("")));
//Q20) Balance the brackets;

// function checkBalancedBrackets(st) {
//   const myStack = [];

//   for (let i = 0; i < st.length; i++) {
//     const x = st[i];

//     if (x == "{" || x == "[" || x == "(") {
//       myStack.push(x);
//       continue;
//     }

//     if (myStack.length <= 0) return false;

//     let popVal;
//     switch (x) {
//       case "}":
//         popVal = myStack.pop();
//         if (popVal == "[" || popVal == "(") {
//           return false;
//         }
//         break;
//       case "]":
//         popVal = myStack.pop();
//         if (popVal == "{" || popVal == "(") {
//           return false;
//         }
//         break;
//       case ")":
//         popVal = myStack.pop();
//         if (popVal == "{" || popVal == "[") {
//           return false;
//         }

//       default:
//         break;
//     }
//   }

//   return myStack.length === 0;
// }
// console.log(checkBalancedBrackets("{[()]}"));

//q1) [1,2,4,5] insert "3" between 2 and 4 //output [1,2,3,4]

// const arr = [1, 2, 4, 5];

// arr.splice(2, 0, 3);

// // arr.splice(2)
// // arr.push(3);
// // arr.splice(3,arr.length)

// console.log(arr);
// // console.log(s)

//q2) [1,2,3,4,5] reverse the array; //output [5,4,3,2,1]

// const arr = [1, 2, 3, 4, 5];

//Method 1
// console.log(arr.reverse()); //with inbuilt fn;

//Method 2
// const reverse = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reverse.push(arr[i]);
// }

// console.log(reverse);

//Method 3

// function reverseAr(arr) {
//   return arr.map((item, idx) => arr[arr.length - 1 - idx]);
// }

// console.log(reverseAr(arr))

// q3) How to check if an object is array or not (say min 2 ways)

// let obj = [1, 2, 3, 4];

// // for (let i in obj) {
// //   if (Array.isArray(obj[i])) {
// //     console.log("this is arra ", obj[i]);
// //   }
// // }

// console.log(Array.isArray(obj));

// function checkArray(o) {
//   return Object.prototype.toString.call(o) === "[object Array]";
// }

// console.log(checkArray(obj));

// console.log(obj instanceof Array);

// console.log(obj.__proto__ === Array.prototype)

//q4) How to empty an array ? [say min 3 ways]

// let arr = [1, 2, 3, 4];
// console.log(arr);

//Method 1
// arr = []
// console.log(arr)

//Method 2
// arr.length = 0;

// console.log(arr)

//Method 3
// arr.splice(0, arr.length);
// console.log(arr);

//Method 4
// while (arr.length > 0) {
//   arr.pop();
// }

// console.log(arr);

// q5) Remove duplicates from arr [1,2,3,4,2,3,1,6,7] //output [1,2,3,4,6,7]

// let arr = [1, 2, 3, 4, 2, 3, 1, 6, 7];

//Method1
// console.log([...new Set(arr)]);

// Method 2
// let res = [];

// arr.map((item) => {
//   if (!res.includes(item)) {
//     console.log(res)
//     res.push(item);
//   }
// });

// console.log(res);

// //q6) clone the arr

// const arr = [1, 2, 3, 4, 5];
// const clonedAr = [...arr]
// console.log(arr);
// console.log(clonedAr)

//q7) Find the most frequent item in an array

// const arr = [1, 1, 2, 3, 2, 2, "h", "h", "j", "h", 5, 6, 5, 6, "h", "h"];

// function mostFrequent(arr) {
//   let obj = {};
//   let maxFrequent = 0;
//   let maxFrequentItem;

//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]]++;
//     }

//     if (obj[arr[i]] > maxFrequent) {
//       maxFrequent = obj[arr[i]];
//       maxFrequentItem = arr[i];
//     }
//   }

//   // console.log(maxFrequentItem, maxFrequent);
//   return `${maxFrequentItem} : ${maxFrequent}`;
// }

// console.log(mostFrequent(arr));

// //q8) Complare 2 arrays are same or not

// let ar = [1, 2, 4, 5];
// let ar2 = [1, 2, 4, 5];

// function compareArra(a1, a2) {
//   if (a1.length != a2.length) return false;

//   for (let i = 0; i < a1.length; i++) {
//     if (a1[i] !== a2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(compareArra(ar, ar2));

//q9)Find the duplicates in an arry;

let ar = [1, 1, 2, 2, 3, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1];

// function findTheDuplicates(ar) {
//   let temp = [];

//   let res = [];
//   ar.map((item, idx, arr) => {
//     if (!temp.includes(item)) {
//       temp.push(item);
//     } else {
//       if (!res.includes(item)) {
//         res.push(item);
//       }
//     }
//   });

//   console.log(temp);
//   console.log(res);
//   return res;
// }

// console.log(findTheDuplicates(ar));

// function duplicates(ar) {
//   return ar.filter((item, i) => {
//     console.log(ar, i);
//     ar.indexOf(item) === i;
//   });
// }

// console.log(duplicates(ar));

//q10) Sort the following array in ascending as well as descending order by libraryID
// var library = [
//   { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
//   { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     libraryID: 3245,
//   },
// ];

// function sortTheAr(ar) {
//   return ar.sort((item1, item2) => item2.libraryID - item1.libraryID);
// }

// console.log(sortTheAr(library));

const str = "This is JavaScript Code and you have to find max char";
const modStr = str.split(" ").join("").toLowerCase();
// console.log(modStr);
// let ar = [];
// for (let i = 0; i < modStr.length; i++) {
//   let count = 0;
//   for (let j = i; j < modStr.length; j++) {
//     if (modStr[i] == modStr[j]) {
//       // console.log(str[i]);
//       count++;
//     }
//   }

//   ar.push(count);
// }

// console.log(ar);

function maxCharacter(str) {
  const charMap = {};
  let max = 0,
    maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return "MaxChar: " + maxChar + " count " + max;
}

console.log(maxCharacter(modStr));

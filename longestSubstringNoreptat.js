function lognestSubString(str) {
  let arr = new Set();
  for (let i of str) {
    arr.add(i);
  }
  return [...arr].join("");
}

console.log(lognestSubString("abcdefab"));

// function anagrams(arr) {
//   const anagramMap = new Map();

//   arr.forEach((word, index) => {
//     const sortedWord = word.split("").sort().join("");

//     if (anagramMap.has(sortedWord)) {
//       anagramMap.get(sortedWord).push(index + 1);
//     } else {
//       anagramMap.set(sortedWord, [index + 1]);
//     }
//   });

//   console.log(anagramMap);
// }

function anagrams(ar) {
  const anagramObj = {};

  ar.forEach((word, index) => {
    const sortedWord = word.split("").sort().join("");
    if (anagramObj[sortedWord]) {
      anagramObj[sortedWord].push(index + 1);
    } else {
      anagramObj[sortedWord] = [index + 1];
    }
  });

  console.log(Object.values(anagramObj));
}

anagrams(["cat", "dog", "god", "tca"]);

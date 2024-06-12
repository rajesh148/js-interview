//1q)Write a function that returns the reverse of a string

function reverseOfAString(_string) {
  _string = String(_string);
  // let res = ""
  // for (let index = _string.length-1; index >=0; index--) {
  //   res += _string[index];
  // }
  // return res
  return _string.split("").reverse().join("");
}

console.log(reverseOfAString("rajesh"));

//2nd)Write a function that returns the longest word in the sentance

function LongestWord(_sentance) {
  let res = "";
  let words = _sentance.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > res.length) {
      res = words[i];
    }
  }

  // console.log(res);
  // words.reduce((acc, curr) => {

  // },0)
}

// LongestWord("This is Rajesh lasldfjaslf lasd a adkfjadsf la aldkfjaldfjadf");

//3rd given string Pallindrom or not
//rajar
function CheckPanlindrom(_string) {
  let reverse = _string.split("").reverse().join("");

  if (reverse.toLowerCase() === _string.toLowerCase()) {
    return "is Palindrom";
  } else {
    return "Not a palindrom";
  }
}

console.log(CheckPanlindrom("Rajar"));

//4th Remove duplicate elements from an array.

function removeDuplicateElements(_arr) {
  // let arr = [...new Set(_arr)];

  const uniqueArr = [];

  for (let i = 0; i < _arr.length; i++) {
    if (uniqueArr.indexOf(_arr[i]) === -1) {
      uniqueArr.push(_arr[i]);
    }
  }

  // return arr;
  return uniqueArr;
}

// console.log(
//   removeDuplicateElements([6, 7, 8, 8, 8, 9, 1, 2, 3, 4, 5, 6, 6, 6])
// );

//5th two strings are anagram or not? ex: (listen, silent) both are anagrams

function findAnagrams(str1, str2) {
  let word1 = str1.split("").sort().join("");
  console.log(word1);
  let word2 = str2.split("").sort().join("");
  console.log(word2);
  if (word1 == word2) return true;
  else return false;
}

//console.log(findAnagrams("abc", "bca"));

//6th In the given array find the anagram workds and print them

function findAnagramsFromArrya(arr) {
  let anagrams = [];

  for (let i = 0; i < arr.length; i++) {
    
    let word = arr[i];

    let sortedWord = word.split("").sort().join("");

    if (anagrams.indexOf(sortedWord) === -1) {
      anagrams.push(sortedWord);
    }
  }

  return anagrams;
}
console.log(findAnagramsFromArrya(["monk", "konm", "bbc", "cbb", "dell", "ledl"]));



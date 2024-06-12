const str = "This is JavaScript Code";
// console.log(str.split("").reverse().join(""));

let strArray = str.split(" ");
console.log(strArray);
let res = "";
for (let i = 0; i < strArray.length; i++) {
  res += reverseTheWord(strArray[i]);
}

function reverseTheWord(word) {
  // console.log(word);
  // return word.split("").reverse().join("") + " ";
  word = "" + word;
  let res1 = "";
  for (let i = word.length - 1; i >= 0; i--) {
    res1 += word[i];
  }

  return res1 + " ";
}

console.log(res);

String.prototype.reverseWord = function (word) {
  return this.split("").reverse().join("") + " ";
};


var s = new String("raj");
console.log(s.reverseWord());
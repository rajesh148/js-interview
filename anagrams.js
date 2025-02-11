var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  var freq = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
    console.log(s.charCodeAt(i) - "a".charCodeAt(0));
    console.log("bf", freq);
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;

    console.log("af", freq);
  }

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("abc", "bca"));

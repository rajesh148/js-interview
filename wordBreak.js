const wordBreak = function (s, wordDict) {
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  console.log(dp)
  for (let i = 1; i < len + 1; i++) {
    for (let j = 0; j < i; j++) {
      console.log(s.slice(j, i));
      console.log(wordDict.includes(s.slice(j, i)));
      if (dp[j] === true && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
console.log(wordBreak("applepenapple", ["pen", "apple"]));

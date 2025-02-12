function longestConsecutive(arr) {
  if (arr.length === 0) return 0;

  let numSet = new Set(arr);
  let longestStreak = 0;
  let longestSeqence = [];

  for (let num of numSet) {
    console.log("came");
    if (!numSet.has(num - 1)) {
      // Start of a sequence
      let currentNum = num;
      let currentStreak = 1;
      let currentSequnce = [currentNum];
      console.log("hello");
      while (numSet.has(currentNum + 1)) {
        console.log("hii ", currentNum);
        currentNum++;
        currentStreak++;
        currentSequnce.push(currentNum);
      }

      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
        longestSeqence = [...currentSequnce];
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  console.log(longestSeqence);
  return longestStreak;
}

console.log(longestConsecutive([100, 4, 200, 0, 1, 3, 2, 6, 7, 8]));
// Output: 5 (Sequence: [0, 1, 2, 3, 4])

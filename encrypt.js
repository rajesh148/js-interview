function encrypt(M, vowelShift, consonantShift) {
  let result = "";
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const alphabetSize = 26;

  for (let char of M) {
    if (/[a-zA-Z]/.test(char)) {
      // Check if the character is a letter
      const isUpperCase = char === char.toUpperCase();
      const baseCode = isUpperCase ? 65 : 97; // ASCII code for 'A' or 'a'
      const charCode = char.charCodeAt(0) - baseCode;
      console.log(charCode);
      let newCharCode;

      if (vowels.has(char)) {
        // Shift vowels backward
        newCharCode = (charCode - vowelShift + alphabetSize) % alphabetSize;
      } else {
        // Shift consonants forward
        newCharCode = (charCode + consonantShift) % alphabetSize;
        console.log("new char code", newCharCode);
      }

      console.log("after adding base code", newCharCode + baseCode);

      result += String.fromCharCode(newCharCode + baseCode);
    } else {
      result += char; // Keep non-letter characters unchanged
    }
  }

  return result;
}

// Example usage:
const message = "rajesh";
const vowelShift = 2; // Shift vowels backward by 2
const consonantShift = 5; // Shift consonants forward by 5
console.log(encrypt(message, vowelShift, consonantShift)); // Expected output: "tymdxm"

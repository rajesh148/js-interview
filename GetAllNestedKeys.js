// Example usage
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
  h: 5,
};
// function getAllKeys(obj, keys = []) {
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       keys.push(i);
//       if (typeof obj[i] === "object" && obj[i] != null) {
//         getAllKeys(obj[i], keys);
//       }
//     }
//   }

//   return keys;
// }

function getKeys(obj, keys = []) {
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      keys.push(i);
      getKeys(obj[i], keys);
    } else {
      keys.push(i);
    }
  }
  return keys;
}

const allKeys = getKeys(nestedObject);
console.log(allKeys)


// const allKeys = getAllKeys(nestedObject);
// console.log(allKeys); // Output: ["a", "b", "c", "d", "e", "f", "g", "h"]

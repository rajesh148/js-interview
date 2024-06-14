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

// function getKeys(obj, keys = []) {
//   for (let i in obj) {
//     if (typeof obj[i] === "object") {
//       keys.push(i);
//       getKeys(obj[i], keys);
//     } else {
//       keys.push(i);
//     }
//   }
//   return keys;
// }

// const allKeys = getKeys(nestedObject);
// console.log(allKeys);

// const allKeys = getAllKeys(nestedObject);
// console.log(allKeys); // Output: ["a", "b", "c", "d", "e", "f", "g", "h"]

let obj = [
  {
    name: "Raj",
    tech: ["HTML", "CSS", "JAVASCRIPT", "REACT JS"],
    address: {
      pin: "123456",
      street: "Koil Street",
    },
  },

  {
    name: "Anand",
    tech: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "Node", "Mongo", "SQL"],
    address: {
      pin: "600123",
      street: "MLA Street",
    },
  },

  {
    name: "sai",
    tech: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "JAVA", "PYTHON"],
    address: {
      pin: "534256",
      street: "Colony Street",
    },
  },

  {
    name: "Teju",
    tech: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "GO", "XL"],
    address: {
      pin: "520082",
      street: "No way Street",
    },
  },
];

// function getTheTechs(infos) {
//   let result = [];

//   infos.map((info) => {
//     return info.tech.map((te) => {
//       if (!result.includes(te)) {
//         result.push(te);
//       }
//     });
//   });

//   // result = [...new Set(result)];

//   return result;
// }

function getTheTechs(infos) {
  let result = [];

  infos.map((info) => {
    return getTheKeys(info);
  });

  // result = [...new Set(result)];

  // return result;
}

console.log(getTheTechs(obj));

function getTheKeys(infos, keys = []) {
  for (let i in infos) {
    if (typeof infos[i] === "object" && infos[i] != null) {
      keys.push(i);
      getTheKeys(infos[i], keys);
    } else {
      keys.push(i);
    }
  }

  console.log(keys);
  return keys;
}

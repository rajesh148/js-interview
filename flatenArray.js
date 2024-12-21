function flattenArray(array) {
  return array.reduce(
    (accumulator, value) =>
      Array.isArray(value)
        ? accumulator.concat(flattenArray(value))
        : accumulator.concat(value),
    []
  );
}

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
let flatArray = flattenArray(nestedArray);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7]

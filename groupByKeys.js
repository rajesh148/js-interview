const data = [
  { id: 1, category: "fruit", name: "apple" },
  { id: 2, category: "vegetable", name: "carrot" },
  { id: 3, category: "fruit", name: "banana" },
  { id: 4, category: "vegetable", name: "broccoli" },
];

function groupByKey(arr, key) {
  // Your implementation

  return arr.reduce((acc, obj) => {
    const group = obj[key];

    if (!acc[group]) {
      acc[group] = [];
    }

    acc[group].push(obj);

    return acc;
  }, {});
}

console.log(groupByKey(data, "category"));
// Expected Output:
// {
//   fruit: [{ id: 1, category: "fruit", name: "apple" }, { id: 3, category: "fruit", name: "banana" }],
//   vegetable: [{ id: 2, category: "vegetable", name: "carrot" }, { id: 4, category: "vegetable", name: "broccoli" }]
// }

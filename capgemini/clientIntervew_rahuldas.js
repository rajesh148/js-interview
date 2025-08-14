const studentsArr = {
  students: [
    { sid: 101, sname: "Alice", email: "alice@example.com", age: 21 },
    { sid: 102, sname: "Bob", email: "bob@example.com", age: 22 },
    { sid: 103, sname: "Charle", email: "Charle@example.com", age: 21 },
    { sid: 104, sname: "Doe", email: "doe@example.com", age: 23 },
    { sid: 105, sname: "Elevn", email: "elevn@example.com", age: 19 },
    { sid: 106, sname: "Faf", email: "faf@example.com", age: 24 },
    { sid: 107, sname: "Gane", email: "gane@example.com", age: 21 },
  ],
};

const data = studentsArr.students.sort((s1, s2) => s2.age - s1.age)[0].age;
console.log(data);

const url = "https://dummyjson.com/posts";

const fetchDetails = async () => {
  const data = await fetch(url);
  const res = await data.json();

  console.log(typeof res.posts);
  console.log(res.posts.map((post) => "title====> " + post.title));
};

fetchDetails();

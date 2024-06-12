// console.log("Hello");

const myBtn = document.getElementById("my-btn");

const pr = new Promise((res, rej) => {
  // res("Hello");
});

console.log(pr);

myBtn.addEventListener("click", function () {
  console.log("button clicked");
  pr.then(function (val) {
    console.log(val);
  });

  console.log(pr);
});

console.log(pr);

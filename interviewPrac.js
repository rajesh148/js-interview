const myInput = document.getElementById("my-input");
let count = 0;
function debounce(cb, d) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, args);
    }, d);
  };
}

function counter() {
  console.log("Method called  " + ++count);
}

const updatedMethod = debounce(counter, 300);

myInput.addEventListener("keyup", updatedMethod);

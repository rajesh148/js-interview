// // Debouncing in Javascript
// let counter = 0;
// const getData = () => {
//   // calls an API and gets Data
//   console.log("Fetching Data ..", counter++);
// };

// const debounce = function (fn, d) {
//   let timer;
//   return function () {
//     let context = this;
//     console.log("fn , ", timer);
//     let args = arguments;
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, d);
//   };
// };

// const betterFunction = debounce(getData, 300);

//Throttling

let count = 0;
function resizeData() {
  console.log("resize is called " + ++count);
}

const Throttling = (fn, d) => {
  let flag = true;

  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, d);
    }
  };
};

// const betterFunction = Throttling(resizeData, 1000);

// window.addEventListener("resize", betterFunction);

//example 2

function Throttling(func, limit) {
  let lastFunc; // Variable to hold the last timeout function
  let lastRan; // Timestamp of the last execution

  return function (...args) {
    const context = this;

    console.log("Last Ran ", lastRan);
    if (!lastRan) {
      // If the function has never run, execute it immediately
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc); // Clear the timeout to prevent multiple executions
      lastFunc = setTimeout(function () {
        console.log("Hello ", Date.now() - lastRan);
        if (Date.now() - lastRan >= limit) {
          // If enough time has passed since the last execution, execute the function
          func.apply(context, args);
          lastRan = Date.now();
        }

        console.log("limit ", limit - (Date.now() - lastRan));
      }, limit - (Date.now() - lastRan));
    }
  };
}

const betterFunction = Throttling(resizeData, 1000);

window.addEventListener("resize", betterFunction);

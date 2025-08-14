const throttledScroll = throttel(manageScroll, 1000);

function handleScroll() {
  throttledScroll();
}

function manageScroll() {
  console.log("Track scroll event");
}

function throttel(callback, delay) {
  let lastCall = 0;
  return function throtteledFunction(...args) {
    let now = Date.now(); // ms 1970

    if (now - lastCall >= delay) {
      callback(...args);
      lastCall = now;
    }
  };
}

// function throttel(callback, delay) {
//   let waiting = false;
//   return function throtteledFunction() {
//     if (!waiting) {
//       callback();
//       waiting = true;

//       setTimeout(() => {
//         waiting = false;
//       }, delay);
//     }
//   };
// }

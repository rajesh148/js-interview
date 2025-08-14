// // // Promsi polifil

// function PromisePolifill(executor) {
//   //Write code

//   let onResolve,
//     onReject,
//     isFullFilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;

//   function resolve(val) {
//     isFullFilled = true;
//     value = val;
//     if (typeof onResolve === "function") {
//       onResolve(val);
//     }
//   }

//   function reject(val) {
//     isRejected = true;
//     value = val;
//     if (typeof onReject === "function") {
//       onReject(val);
//     }
//   }

//   this.then = function (callback) {
//     onResolve = callback;
//     if (isFullFilled && !isCalled) {
//       onResolve(value);
//       isCalled = true;
//     }
//     return this;
//   };

//   this.catch = function (callback) {
//     onReject = callback;
//     if (isRejected && !isCalled) {
//       onReject(value);
//       isCalled = true;
//     }
//     return this;
//   };

//   try {
//     executor(resolve, reject);
//   } catch (error) {
//     reject(error);
//   }
// }

// const examplePromise = new PromisePolifill((resolve, reject) => {
//   setTimeout(() => {
//     reject(2);
//   }, 1000);
// });

// examplePromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function MyNewPromise(executor) {
//   let onResolve;
//   let onReject;

//   let value;
//   let error;

//   let isFullFilled = false;
//   let isRejected = false;

//   let isCalled = false;
//   this.then = function (thenHandler) {
//     onResolve = thenHandler;
//     if (!isCalled && isFullFilled) {
//       onResolve(value);
//       isCalled = true;
//     }

//     return this;
//   };
//   this.catch = function (catchHandler) {
//     onReject = catchHandler;

//     if (!isCalled && isRejected) {
//       onReject(error);
//       isCalled = true;
//     }

//     return this;
//   };

//   function resolve(val) {
//     isFullFilled = true;
//     value = val;
//     if (typeof onResolve === "function" && !isCalled) {
//       onResolve(val);
//       isCalled = true;
//     }
//   }

//   function reject(err) {
//     isRejected = true;
//     error = err;
//     if (typeof onReject === "function" && !isCalled) {
//       onReject(err);
//       isCalled = true;
//     }
//   }

//   try {
//     executor(resolve, reject);
//   } catch (er) {
//     reject(er);
//   }
// }

function MyNewPromise(executor) {
  let onResolve;
  let onReject;

  let value;
  let error;

  let isFullFilled = false;
  let isRejected = false;

  let isCalled = false;

  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(value);
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === "function" && !isCalled) {
      onReject(error);
    }
  }
  this.then = function (thenHandler) {
    onResolve = thenHandler;

    if (!isCalled && isFullFilled) {
      onResolve(value);
      isCalled = true;
    }

    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (er) {
    reject(er);
  }
}

console.log("this is the file");
const promiseA = new MyNewPromise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// //call backs
// console.log("start");

// function impMes(userName, cb) {
//   setTimeout(() => {
//     cb(`Hello ${userName}`);
//   }, 1000);
// }

// function JSFn(param1, cb) {
//   setTimeout(() => {
//     cb(`Another fn ${param1}`);
//   }, 100);
// }

// function ReactFn(param2, cb) {
//   setTimeout(() => {
//     cb(`This is another fn ${param2}`);
//   }, 1000);
// }

// const message = impMes("Rajesh", function cb(msg) {
//   console.log(msg);
//   JSFn("js", (action) => {
//     console.log(action);
//     ReactFn("JS INTERVIEW", (AC) => {
//       console.log(AC);
//     });
//   });
// });

// console.log("End");

// ////promises

// console.log("start");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const res = true;
//     if (res) {
//       resolve("Promise is resolved!!!");
//     } else {
//       reject("Promise is rejected!!!");
//     }
//   }, 3000);
// });

// console.log(myPromise);
// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// console.log("end");

//PROMISE CHAN

// console.log("Start");
function impMes(userName) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Hello ${userName}`);
    }, 1000);
  });
}

function JSFn(param1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Another fn ${param1}`);
      // throw new Error("Erro in another fn");
    }, 1000);
  });
}

function ReactFn(param2) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Other fn ${param2}`);
    }, 1000);
  });
}

// impMes("Rajesh")
//   .then((res) => {
//     console.log(res);
//     return JSFn("JS ");
//   })
//   .then((res) => {
//     console.log(res);
//     return ReactFn("React Js");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// console.log("End");

//PROMISE COMBINATORS

//Promise.all //It will take array of promises and it will return all fulfilled promises. If any one promise is
// rejected then it will not excute remaining promises and it will stop and give the error wehre it is stopped.
//Promise.race //It is also same like Promise.all but here it will give the first fullfilled or rejected promise
//Promise.allSettled // same like promise.all and it will give all promieses where they are fullfilled or rejected.
//Promise.any //It will give you the first fullfilled promise

// Promise.all([impMes("Rajesh"), JSFn("js"), ReactFn("React Js")])
//   .then((res) => console.log(res))
//   .then((err) => console.log(err));
// console.log(Promise.race([impMes("Rajesh"), JSFn("js"), ReactFn("React Js")]));

// Promise.race([impMes("Rajehs"), JSFn("js"), ReactFn("React")])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Promise.allSettled([impMes("Rajesh"), JSFn("js"), ReactFn("React js")])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// Promise.any([impMes("Raesh"), JSFn("js"), ReactFn("React")])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//console.log("start");

// const promise1 = new Promise((res, rej) => {
//   console.log(1);
//   res(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// const fn = () =>
//   new Promise((res, rej) => {
//     console.log(1);
//     res("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// function job(state) {
//   return new Promise((res, rej) => {
//     if (state) {
//       res("success!");
//     } else {
//       rej("Error");
//     }
//   });
// }

// let promise1 = job(true);

// promise1
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";
//     }
//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "error caught";
//   })
//   .then(function (data) {
//     console.log(data);
//     return new Error("test");
//   })
//   .then(function (data) {
//     console.log("success: ", data.message);
//   })
//   .catch(function (data) {
//     console.log("Error: ", data.message);
//   });

// console.log("end");

//start
//end
//success
//defeat
//Error
//error caught
//success : test

// async function loadJson(rl) {
//   try {
//     const response = await fetch(url);
//     if (response.status === 200) {
//       let json = await response.json();
//       return json;
//     }
//     throw new Error(response.status);
//   } catch (error) {
//     console.log(error);
//   }
// }

//PROMISE RECURSIVE FUNCION
function promiseRecurse(promises) {
  if (promises.length === 0) return;

  const currPromise = promises.shift();

  currPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  promiseRecurse(promises);
}

promiseRecurse([impMes("Rajesh"), JSFn("js"), ReactFn("React Js")]);

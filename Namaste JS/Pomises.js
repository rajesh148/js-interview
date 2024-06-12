// // const cart = ["shoes", "pants", "kurtha"];

// // createOrder(cart); // OrderId;

// // proceedToPayment(orderId); //

// // createOrder(cart, function (orderId) {
// //   proceedToPayment(orderId);
// // });

// // const promise = createOrder(cart);

// // promise.then(function (orderId) {
// //   proceedToPayment(orderId);
// // });

// ////ASSIGNMENT////

// const cart = ["shirts", "earphones", "mobiles", "pants"];

// //APIS///
// //1.CREATE ORDER
// //2.Proceed to payment
// //3.Show order summary
// //4.Update Wallet;

// createOrder(cart)
//   .then(function (orderId) {
//     console.log("This is orderId " + orderId);
//     return ProceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//     return UpdateWallet(paymentInfo);
//   })
//   .catch((err) => console.log(err));

// //Promise creator

// var OrderInfoId = "";

// function createOrder(cart) {
//   const promise_1 = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       reject("Cart is not validate!!!!");
//     }
//     const orderId = Math.ceil(Math.random() * 10000);
//     OrderInfoId = orderId;
//     resolve(orderId);
//   });

//   return promise_1;
// }

// function validateCart(cart) {
//   return true;
// }

// function ProceedToPayment(paymentInfo) {
//   const promise_2 = new Promise((resolve, reject) => {
//     if (!validatePayementInfo(paymentInfo)) {
//       reject("Paymeny failed!!!");
//     }
//     const paymentInfo_ = {
//       balance: "1000",
//       message: "Payment was successful",
//     };
//     resolve(paymentInfo_);
//   });

//   return promise_2;
// }

// function validatePayementInfo(patmentInfo) {
//   return true;
// }

// function showOrderSummary(paymenyInfo) {
//   const promise_3 = new Promise((resolve, reject) => {
//     if (!validatePayementInfo(paymenyInfo)) {
//       reject("Error in order summary!!!");
//     }
//     const new_Payment = {
//       balance: "1000",
//       message: "Summary displayed!!!",
//     };
//     resolve(new_Payment);
//   });

//   return promise_3;
// }

// function validateShowOrderSummary(paymenyInfo) {
//   return true;
// }

// function UpdateWallet(paymentInfo_) {
//   const promise_4 = new Promise((resolve, reject) => {
//     if (!validateWallet(paymentInfo_)) {
//       reject("Wallet is not updated!!! Something went wrong");
//     }
//     const paymentInfo = {
//       balance: "800",
//       message: "wallet updated successfully!!!",
//     };
//     console.log(paymentInfo);
//     resolve(paymentInfo);
//   });

//   return promise_4;
// }

// function validateWallet(paymentInfo) {
//   return true;
// }

// Task:
// Make use of promise chain with example async functions
// creatOrder, proceedToPayment, showOrderSummary, updateWallet;

const cart = ["shoes", "pants", "kurta"];
createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID", orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("paymentInfo", paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return updateWallet(paymentInfo);
  })
  .catch(function (err) {
    console.log("Error", err);
  });

function isValidCart(cart = []) {
  return !!cart.length;
}

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!isValidCart(cart)) {
      reject(new Error("Cart is not valid"));
    }
    // Call the API for adding items into cart
    const orderId = Math.floor(Math.random() * 100000);
    resolve(orderId);
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (!orderId) {
      reject(new Error("Error while payment"));
    }
    // Call the API for payment
    const paymentInfo = {
      paidAmount: 1000,
      balanceAmount: 500,
    };
    resolve(paymentInfo);
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    // Call the API if any
    console.log(
      `Order summary is displayed || Paid Amount: ${paymentInfo.paidAmount}`
    );
    resolve(paymentInfo);
  });
}

function updateWallet(paymentInfo) {
  return new Promise(function (resolve, reject) {
    // Call the API if any
    console.log(
      `Updated wallet balance || Balance amount: ${paymentInfo.balanceAmount}`
    );
    resolve(paymentInfo);
  });
}

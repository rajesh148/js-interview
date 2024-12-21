// // Input

// //1 rupee 10
// //2 rupe 20
// //5 ruee 15
// //10 rupee 20
// //20 rupee 10

// //Input is I want  50 rupees change but you have to use all of the coins and dont give same coins all//

// const readline = require("readline");
// let one = 10;
// let two = 20;
// let five = 15;
// let ten = 20;
// let twenty = 10;

// let changeObj = {
//   one: 1,
//   two: 1,
//   five: 1,
//   ten: 1,
//   twenty: 1,
// };

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.std,
// });

// function getTheChange(input, obj, result = {}, bal = 0) {
//   let favDrink = prompt("What's your favorite cocktail drink?");
//   favDrink = parseInt(favDrink, 10);
//   while (userInput > 0) {
//     let remaingChange = {};
//     let res = {};
//     Object.assign(remaingChange, obj);
//     res = result;

//     function getSum(remaingChange) {
//       let sum = 0;
//       for (let i in remaingChange) {
//         if (i === "one") {
//           sum += remaingChange[i] * 1;
//         } else if (i === "two") {
//           sum += remaingChange[i] * 2;
//         } else if (i === "five") {
//           sum += remaingChange[i] * 5;
//         } else if (i === "ten") {
//           sum += remaingChange[i] * 10;
//         } else if (i === "twenty") {
//           sum += remaingChange[i] * 20;
//         }
//       }

//       return sum;
//     }

//     // console.log("Sum ", getSum(remaingChange));

//     if (input > 0) {
//       if (input > 20 || bal >= 20) {
//         res.twenty = Math.floor(input / 20);
//         remaingChange.twenty = remaingChange.twenty - res.twenty;
//         input = input - res.twenty * 20;
//         bal = input;
//         getTheChange(input, remaingChange, res, bal);
//       } else if (input > 10 || bal >= 10) {
//         res.ten = Math.floor(input / 10);
//         remaingChange.ten = remaingChange.ten - res.ten;
//         input = input - res.ten * 10;
//         bal = input;
//         getTheChange(input, remaingChange, res, bal);
//       } else if (input > 5 || bal >= 5) {
//         res.five = Math.floor(input / 5);
//         remaingChange.five = remaingChange.five - res.five;
//         input = input - res.five * 5;
//         bal = input;
//         getTheChange(input, remaingChange, res, bal);
//       } else if (input > 2 || bal >= 2) {
//         res.two = Math.floor(input / 2);
//         remaingChange.two = remaingChange.two - res.two;
//         input = input - res.two * 2;
//         bal = input;
//         getTheChange(input, remaingChange, res, bal);
//       } else if (input > 1 || bal >= 1) {
//         res.one = Math.floor(input / 1);
//         remaingChange.one = remaingChange.one - res.one;
//         input = input - res.one * 1;
//         bal = input;
//         getTheChange(input, remaingChange, res, bal);
//       }
//     }

//     console.log("rem ", remaingChange);
//     // console.log(bal);

//     return res;
//   }
// }

// console.log(getTheChange(39, changeObj));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the available coins and their counts
let coins = [
  { value: 20, count: 10 },
  { value: 10, count: 10 },
  { value: 5, count: 10 },
  { value: 2, count: 10 },
  { value: 1, count: 10 },
];

function giveChange(amount) {
  let change = [];

  // Function to get coins for the amount without using direct equivalent coins
  function getCoins(amt) {
    if (amt === 1) return false;
    for (let i = 0; i < coins.length; i++) {
      // Skip the coin if it is the same as the remaining amount
      console.log("value, Amount, amt", coins[i].value, amount, amt);
      if (coins[i].value === amt && amount === amt) continue;

      while (amt >= coins[i].value && coins[i].count > 0) {
        amt -= coins[i].value;
        coins[i].count--;
        change.push(coins[i].value);
      }

      // If we've given exact change, break out of the loop
      if (amt === 0) break;
    }

    // If we couldn't give the exact amount using available coins, return false
    if (amt > 0 && amt === amount) {
      console.log("My", amt, amount);
      return false;
    }

    return true;
  }

  // Try to give change
  if (getCoins(amount)) {
    console.log(`Change for ${amount} rupees: ${change.join(", ")}`);
  } else {
    console.log("Sorry, cannot give exact change with available coins.");
  }

  // Display remaining coins
  console.log("Remaining coins:");
  coins.forEach((coin) => {
    console.log(`${coin.value} rupee coins: ${coin.count}`);
  });
}

function askForAmount() {
  rl.question("Enter an amount to get change (enter 0 to exit): ", (input) => {
    const amount = parseInt(input);

    // If the user enters 0, exit the program
    if (amount === 0) {
      console.log("Exiting the program.");
      rl.close();
      return;
    }

    // Check if all coins are exhausted
    const totalCoinsLeft = coins.reduce((acc, coin) => acc + coin.count, 0);
    console.log("totalCoinsLeft ", totalCoinsLeft);
    if (totalCoinsLeft === 0) {
      console.log("No more coins available. Exiting the program.");
      rl.close();
      return;
    }

    // Otherwise, try to give change
    giveChange(amount);

    // Continue asking for amounts
    askForAmount();
  });
}

// Start the program by asking for the first amount
askForAmount();

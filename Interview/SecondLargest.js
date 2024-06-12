const input1 = [1, 2, -2, 11, 7, 1];
//output = 7;

const input2 = [1, 4, 7, 2, 4, 7];
//output = 4

function output(ar) {
  //Need to sort the function
  ar.sort(function (a, b) {
    return b - a;
  });

  ar = [...new Set(ar)];
  console.log(ar);
  console.log(ar[1]);
}

output(input1);

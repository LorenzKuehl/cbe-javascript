// TODO: Implement the oddNumbers function
let oddNumbers = function (a, b) {
  for (let index = a; index < b; index++) {
    if (index % 2 === 0) {
      continue;
    } else {
      console.log(index.toString() + ",");
    }
  }
};

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

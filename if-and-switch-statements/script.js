const size = 25;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);

// Returns Greater than 10 but should return Greater than 20

let oddEven = function (a) {
  if (a % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// TODO: Implement the oldYoung function

let oldYoung = function (a) {
  if (a > 16 && a < 59) {
    return "young Person";
  } else if (a > 0 && a < 16) {
    return "children";
  } else if (a < 0) {
    return "invalid parameter";
  } else if (a >= 60) {
    return "elder person";
  }
};

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

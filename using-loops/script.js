// TODO: Implement the oddNumbers function

/* Ich möchte eine Funktion schreiben, die
zwei eingegebene Zahlenargumente als Parameter
nimmt und alle ungerade Zahlen dazwischen, durch
ein Komma getrennt als String darstellt */

let oddNumbers = function (a, b) {
  let numberList = "";

  for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
      numberList = numberList + i;
      if (i !== b && i !== b - 1) {
        numberList = numberList + ",";
      }
    }
  }
  return numberList; //.slice(0, -1);
};

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, char) {
  let result = 0;

  for (let index = 0; index < word.length; index++) {
    const currentChar = word[index];
    if (char.length > 1) {
      return;
    } else if (currentChar === char) {
      result = result + 1;
    }
  }
  return console.log(result);
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

// TODO: Implement the removeItem function

/* Es soll eine Funktion geschrieben werden, die zwei Parameter als Input hat,
einen Array und eine Positionszahl, die nicht bei 0 sondern bei 1 startet. Der 
Eintrag im jeweiligen Array, der durch die Positionszahl bestimmt wird, soll in
einer Kopie des Arrays gelöscht werden, sodass bei Abfrage des Original-Arrays
der Eintrag weiterhin vorhanden bleibt */

function removeItem(inputArr, indexNumber) {
  for (let index = 0; index < inputArr.length; index++) {
    let result;
    if (indexNumber == index - 1) {
      return (result = inputArr.toSpliced(indexNumber - 1, 1));
    }
  }
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// TODO: Implement the sumOfCharacters function

/* Es soll eine Funtion geschrieben werden, die einen input-Parameter, nämlich ein array
hat. Das array soll ausgelesen werden, wobei die einzelnen Einträge daraufhin untersucht 
werden, ob sie ein String sind oder nicht und wenn ja, soll die Zeichenlänge aller strings
innerhalb des arrays addiert und ausgegeben werden*/

function sumOfCharacters(inputArray) {
  let result = 0;
  for (let index = 0; index < inputArray.length; index++) {
    if (typeof inputArray[index] === "string") {
      result = result + inputArray[index].length;
    }
  }
  return console.log(result);
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

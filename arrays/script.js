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

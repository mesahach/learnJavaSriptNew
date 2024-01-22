const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
let checker = false;

if (randomNumber > 0.7) {
  alert("the number is now " + randomNumber);
}

// while (!checker) {
//   randomNumber = Math.random();
//   if (randomNumber > 0.7) {
//     alert("the number is now " + randomNumber);
//     checker = true;
//   }
// }

let numbers = [2, 67, 4, 78, 34, 90, 23, 23];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  console.log(element);
}

for (let index = numbers.length; index >= 1; index--) {
  const result = numbers[index];
  console.log(result);
}

for (const obj of numbers) {
  console.log(obj);
}

const randNum2 = Math.random();

randomNumber2 = Math.random();
if (randomNumber > 0.7 || randomNumber2 > 0.2) {
  alert("the number is now " + randomNumber);
}

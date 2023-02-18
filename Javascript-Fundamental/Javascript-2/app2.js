const lg = console.log;

// // FUNCTION DECLARATION

// function log(message, title) {
//   console.log(message, title);
// }

// const message = "Remzi Balakishiyev";
// const title = "Software developer";
// log(message, title);
// log(message, title);

// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// const instructor = fullName("Remzi", "Balakishiyev");

// console.log(instructor);

// // FUNCTION EXPRESSION
// const calcAge = function (birthDate) {
//   return 2022 - birthDate;
// };

// let bruceAge = calcAge(1990);
// let wayneAge = calcAge(1992);
// let hannibalAge = calcAge(1937);

// console.log(
//   `Bruce Age  : ${bruceAge} Wayne Age  : ${wayneAge} Hannibal Age  : ${hannibalAge} `
// );

// // DIFFERENT EXPRESSION AND DECLARATUON FUNCTIONS

// function welcome() {
//   console.log("work declaration");
// }

// const welcomeExp = function () {
//   console.log("Work experession");
// };

// welcome();
// welcomeExp();

// // ARROW FUNCTION

// const arrFunc = () => {
//   console.log("Arrow function work");
// };

// arrFunc();

// // Function  Exampke
// const calc = (numberOne) => numberOne * 2;

// console.log(calc(3));

// const calcSimpleNumber = (num) => {
//   let sum = 0;
//   if (typeof num == "number" && num) {
//     while (num) {
//       num = Math.trunc(num / 10);
//       sum++;
//     }
//   }
//   return sum;
// };

// console.log(calcSimpleNumber(2823237));

// const arr = [123, "Boolean", true, 12.3, calcSimpleNumber(237)];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// const progLang = ["C#", "Javascript", "Python"];

// const framework = ["Angular", "React", "JQuery"];

// lg(`Bizim kurzumuzda ${progLang.toString()} dilleri  kecirilir`);

// progLang.push("Java");
// progLang.push("C++");

// lg(progLang.toString());

// progLang.splice(2, 2, "C");

// lg(progLang.toString());

const fruits = ['Apple', 'Orange', 'Melon'];

const addFruit = function (fruitName) {
  let goon = true;
  const check = fruits.forEach((val) => {
    if (val === fruitName) {
      goon = false;
    }
  });

  if (goon) {
    fruits.push(fruitName);
  }
};

//lg(checkFruit("Pomegranate"));

addFruit('apple');

lg(fruits.toString());

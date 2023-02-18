const numbers = [12, 13, 14, -1, 0, -20];

let positiveNumber = numbers
  .filter((num) => {
    return num > 0;
  })
  .map((x) => x * 20);

let changeArraySymbol = numbers
  .map((num) => {
    return num * -1;
  })
  .filter((x) => x > 0);
console.log(changeArraySymbol);
console.log(positiveNumber);

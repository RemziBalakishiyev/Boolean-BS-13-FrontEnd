const bookLibrary = {
  books: [
    "1984",
    "Crime and Punishment",
    "Red dragon",
    "u geni",
    "Romeo and Juliet",
    "Ferhad Shirin",
    "Her ve sulh",
  ],
  prices: [12, 15, 12, 25, 28, 21],
  genre: ["Dedective", "Romantic", "Classical"],
  genreAndBook: new Map(),
};

bookLibrary.descripton = new Map();
bookLibrary.descripton.set(
  "Crime and Punishment",
  "Crime and Punishment is my favorite book"
);
bookLibrary.descripton.set("1984", "1984 is bestseller book");

bookLibrary.genreAndBook.set(bookLibrary.genre[0], ["u geni", "Red dragon"]);
bookLibrary.genreAndBook.set(bookLibrary.genre[1], [
  "Romeo and Juliet",
  "Ferhad Shirin",
]);

bookLibrary.genreAndBook.set(bookLibrary.genre[2], [
  "1984",
  "Crime and Punishment",
  "Her ve sulh",
]);

for (const [key, value] of bookLibrary.genreAndBook) {
  console.log(`key: ${key} , valye:${value}`);
}

bookLibrary.sale = bookLibrary.prices.map((price) => {
  return (price - price * 0.3).toFixed(2);
});

console.log(bookLibrary.sale);

bookLibrary.expensiveBook = bookLibrary.prices.filter((price) => {
  return price > 16;
});

let sumPrice = bookLibrary.prices.reduce((pValue, cValue) => {
  return pValue + cValue;
}, 3);

console.log(sumPrice);
// // const student = {
// //   GroupA: "Ayten",
// //   GroupB: "Aynur",
// //   GroupC: "Gunel",
// // };

// // let groupMap = new Map(Object.entries(student));

// // groupMap.forEach((value, key) => {
// //   console.log(value);
// //   console.log(key);
// // });

// let numbers = [12, 2, 3, 4, 5];

// let newMappingNumber = numbers.map((value) => value * 2);

// console.log(numbers);
// console.log(newMappingNumber);
// console.log(newArrNumber);

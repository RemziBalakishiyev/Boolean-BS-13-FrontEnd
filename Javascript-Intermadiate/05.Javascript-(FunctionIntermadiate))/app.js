// /// Function deyishen kimi istifade olunur
// const sum = function (a, b) {
//   console.log(a + b);
// };
// sum();

// // FUNCTION parameter kimi istifade olunur
// const sayHi = function () {
//   alert("Hi");
// };
// document.addEventListener("click", sayHi);

// const text = function () {
//   return "Hello";
// };

// function LOG(text) {
//   let v = "Remzi " + text;
//   console.log(v);
// }
// LOG(text());

// // FUNCTION return FUNCTION

// const add = function (a) {
//   return function (b) {
//     console.log(a + b);
//   };
// };

// const addOther = add(5); // addOther = function(b){ ... }

// addOther(3);

// const ededinFaizi = function (b) {
//   return function (c) {
//     console.log(
//       `${b} ededinin  qiymetini ${c}% qeder azaltdiqda ${b - (b * c) / 100}`
//     );
//   };
// };

// const YetmisEdedinFaizi = ededinFaizi(70);

// const onFaizi = YetmisEdedinFaizi(10);
// const iyirmiFaizi = YetmisEdedinFaizi(20);

// const PrintProgramLanguageAndFramework = function (pl) {
//   return function (framework) {
//     console.log(`Programming language: ${pl} framework ${framework}`);
//   };
// };

// const programmingLanguage = PrintProgramLanguageAndFramework("Javascript");

// const jsFramework = programmingLanguage("Angular");

// const plFrame = PrintProgramLanguageAndFramework("Java")("SpringBot");

// const plLibrary = (pl) => (library) => console.log(pl, library);

// plLibrary("Javascript")("React");

// //CALBACK
// let num = 0;
// const camelCase = function (text) {
//   const [...words] = text.split(" "); //javascript dersleri
//   let camelWord = "";
//   words.forEach((word) => {
//     let [firstSymbol, ...symbol] = word;
//     camelWord += [firstSymbol.toUpperCase(), ...symbol].join("") + " ";
//   });
//   return camelWord;
// };

// const addNumber = function (text) {
//   num++;

//   if (num < 10) {
//     return `0${num}. ${text}`;
//   }
//   return `${num} text`;
// };

// const convertFormat = function (text, callback) {
//   console.log("Original Text " + text);

//   console.log("Converted Text " + callback(text));
// };

// convertFormat("javascript dersleri", addNumber);

const novella = {
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

  city: "Baku",
  genreAndBook: new Map(),

  deliver(beginDate, endDate) {
    console.log(
      `${this.city} sheherine ${beginDate} -${endDate} radelerinde catdirildi`
    );
  },
};

const ovod = {
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

  city: "Gence",
  genreAndBook: new Map(),
};

novella.deliver("12:00", "16:00");

const deliver = novella.deliver;
deliver("12:00", "17:00");

deliver.call(ovod, "12:00", "16:00");

const time = ["12:00", "18:00"];

deliver.apply(ovod, time);

const ovodKitabEvi = deliver.bind(ovod);
const novellaKitabEvi = deliver.bind(novella);

ovodKitabEvi("12:00", "21:00");

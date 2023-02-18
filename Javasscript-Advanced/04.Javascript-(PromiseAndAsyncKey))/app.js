const log = console.log;

const request = fetch("https://restcountries.com/v3.1/name/maldives");

// const neighbour = request
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (value) {
//     const neighbourCountry = value[0].borders;
//     if (!neighbourCountry) {
//       throw new Error(`Bu olkenin serheddi yoxdur`);
//     }
//     log(neighbourCountry[1]);
//     return fetch(`https://restcountries.com/v2/alpha/${neighbourCountry[1]}`);
//   })
//   .catch((error) => {
//     switch (error.message) {
//       case 404:
//         alert("Bu melumatlar tapilmadi");
//         break;
//       case 401:
//         alert("Bu sehifeye girish huququnuz yoxdur");
//         break;
//       case 500:
//         alert("Sistemde her hansi bir problem var");
//         break;
//       default:
//         log(error);
//         break;
//     }
//   });

const books = [];
const getBooks = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (books.length) {
      resolve(books);
    } else {
      reject("Kitab yoxdur");
    }
  }, 2000);
});

//getBooks.then((res) => log(res)).catch((err) => log(err));

const createBook = function ({ bookName, price }) {
  let bookObj = { bookName, price };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      books.push(bookObj);
      const exception = true;
      if (!exception) {
        resolve(getBooks);
      } else {
        reject("Some Exception");
      }
    });
  }, 1000);
};

createBook({ price: 4000, bookName: "1984" })
  .then((x) => {
    log(x);
  })
  .catch((err) => log(err));

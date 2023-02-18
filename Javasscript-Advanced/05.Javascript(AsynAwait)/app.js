const log = console.log;
// const books = [{ price: 1000, bookName: "Crime and Punishment" }];
// const getBooks = function (resolve, reject) {
//   return books;
// };

// //getBooks.then((res) => log(res)).catch((err) => log(err));

// const createBook = function ({ bookName, price }) {
//   let bookObj = { bookName, price };
//   setTimeout(() => {
//     books.push(bookObj);
//   }, 1000);
// };

// const getBook = async function () {
//   await createBook({ price: 4000, bookName: "1984" });
//   return getBooks();
// };

// getBook().then((x) => log(x));

const getCountry = async function () {
  const response = fetch(`https://restcountries.com/v3.1/name/maldives`);

  console.log(response);

  return (await response).json();
};

getCountry().then((x) => log(x));

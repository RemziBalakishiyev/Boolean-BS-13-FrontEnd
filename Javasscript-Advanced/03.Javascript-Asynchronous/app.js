//Sinxron

// const body = document.querySelector("body");
// body.style.backgroundColor = "red";
// alert("Backgroun color change");
// body.style.backgroundColor = "green";

// const ul = document.querySelector(".list-group");

// const books = [
//   { price: 1000, bookName: "Harry Potter" },
//   { price: 2000, bookName: "Game of thrones" },
// ];

// function getBooks() {
//   let html = "";
//   setTimeout(function () {
//     books.forEach((book) => {
//       html += `<li class='list-group-item'>${book.bookName} </li>`;
//     });

//     ul.innerHTML = html;
//     console.log(books);
//   }, 3000);
// }

// document.querySelector(".btn").addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });

// getBooks();

// const createBook = ({ bookName, price }, callback) => {
//   setTimeout(function () {
//     books.push({ bookName, price });
//     console.log(books);
//     callback();
//   }, 4000);
// };

// createBook({ price: 4000, bookName: "1984" }, getBooks);

//XHR

const getUniversity = function (countryName) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `http://universities.hipolabs.com/search?country=${countryName}`
  );
  request.send();
  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
  });
};

const getCountry = function (countryName, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  xhr.send();
  xhr.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data[0].name.common);
    callback(data[0].name.common);
  });
};

getCountry("Turkey", getUniversity);

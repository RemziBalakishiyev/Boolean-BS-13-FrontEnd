const log = console.log;

let searchBtn = document.querySelector("#search");
let countryInp = document.querySelector("#countryName");
let card = document.querySelector(".card-body");

const baseUrl = "https://restcountries.com/v3.1/name/";

const displayCountry = function ({ capital, flags, name, languages, maps }) {
  card.innerHTML = "";
  console.log(languages);

  let languageHtml = "<ul class='lang-group'>";

  Object.values(languages).forEach((lang) => {
    languageHtml += `<li> ${lang} </li>`;
  });

  languageHtml += "</ul>";

  log(languageHtml);
  let result = `
    <div class='country--container'>
            <img src='${flags.svg}' class='flag-img'>
            <h2 style="margin-left:40%;margin-top:10px">${name.common.toUpperCase()}</h2>
            <div class="country--detail mt-3" >
                <div class='capital--name'>
                    <h3>Capital:</h3><span>${capital[0]}</span>
                </div>
               <h4>LANGUAGES</h4>
               ${languageHtml}

               <a target='_blank' class='btn btn-danger w-50 mx-auto' href='${
                 maps.googleMaps
               }'>MAP</a>
            </div>  
    </div>
    


  `;

  card.insertAdjacentHTML("beforeend", result);
};

//ES5 xhr
// const findCountry = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `${baseUrl}${countryName}`);

//   request.send();
//   request.addEventListener("load", function () {
//     const repsonseJson = JSON.parse(this.responseText);
//     log("TEXT  : ");
//     log(repsonseJson);

//     displayCountry(repsonseJson[0]);
//   });
// };

//ES6 xhr

// const findCountry = function (countryName) {
//   return fetch(`${baseUrl}${countryName}`);
// };

// searchBtn.addEventListener("click", function () {
//   if (!countryInp.value) {
//     alertify.alert("Verilen deyer boshdur", function () {
//       alertify.success("Ok");
//     });
//     throw Error("Verilen deyer boshdur");
//   }
//   findCountry(countryInp.value)
//     .then((response) => {
//       console.log(response);
//       switch (response.status) {
//         case 404:
//           throw Error("Deyer tapilmadi");
//         case 500:
//           throw Error("Server xetasi");
//       }
//       return response.json();
//     })
//     .then((responseJson) => displayCountry(responseJson[0]))
//     .catch((error) => alertify.alert(error.message));
// });

//ES7

const findCountry = async function (countryName) {
  try {
    const response = await fetch(`${baseUrl}${countryName}`);
    return response.json();
  } catch (err) {
    log(err, "any");
  }
};

searchBtn.addEventListener("click", function () {
  if (!countryInp.value) {
    alertify.alert("Verilen deyer boshdur", function () {
      alertify.success("Ok");
    });
    throw Error("Verilen deyer boshdur");
  }
  findCountry(countryInp.value)
    .then((json) => displayCountry(json[0]))
    .catch((error) => alertify.alert(error.message)); 
});

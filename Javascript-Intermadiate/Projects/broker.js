// DOM selectors
const tbody = document.querySelector("table tbody");
const incomeValue = document.querySelector(".income-value");
const outcomeValue = document.querySelector(".outcome-value");
const gainValue = document.querySelector(".gain-value");
const userNameInp = document.querySelector("#userName");
const passwordInp = document.querySelector("#password");
const loginContainer = document.querySelector(".login");
const loginBtn = document.querySelector(".login-btn");
const appContainer = document.querySelector(".section-1");
const sale = document.querySelector("#Sale");
const purchase = document.querySelector("#purchase");
const add = document.querySelector("#addBtn");
const listHome = document.querySelector(".home-list");
const load = document.querySelector(".cutom_button");
const sort = document.querySelector(".fa-sort");

let homeAdded = [];
let currentBroker;
//DATAS
const broker1 = {
  fullName: "Fariz Huseynov",
  userName: "fariz",
  dateOfBirth: 1900,
  password: "",
  homes: [
    {
      purchasePrice: 150000,
      salePrice: 250000,
      type: 1,
    },
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 1,
    },
    {
      purchasePrice: 280000,
      salePrice: 240000,
      type: 1,
    },
    {
      purchasePrice: 170000,
      salePrice: 150000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 250000,
      type: 1,
    },
  ],
};
const broker2 = {
  fullName: "Rehim Memmedov",
  userName: "rehim",
  dateOfBirth: 2000,
  password: "",
  homes: [
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 140000,
      salePrice: 240000,
      type: 1,
    },
    {
      purchasePrice: 130000,
      salePrice: 150000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 250000,
      type: 1,
    },
  ],
};
const broker3 = {
  fullName: "Vaqif Mehdiyev",
  userName: "vaqif",
  dateOfBirth: 2000,
  password: "",
  homes: [
    {
      purchasePrice: 140000,
      salePrice: 50000,
      type: 1,
    },
    {
      purchasePrice: 200000,
      salePrice: 350000,
      type: 1,
    },
    {
      purchasePrice: 10000,
      salePrice: 230000,
      type: 1,
    },
    {
      purchasePrice: 110000,
      salePrice: 170000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 200000,
      type: 1,
    },
  ],
};

const brokers = [broker1, broker2, broker3];

//FUNCTIONS

const calcSummary = function (home) {
  const income = home
    .filter((homeDetail) => homeDetail.salePrice > homeDetail.purchasePrice)
    .map((homeDetail) => homeDetail.salePrice)
    .reduce((acc, salePrice) => acc + salePrice, 0);

  incomeValue.textContent = `${income}`;

  const outcome = home
    .filter((homeDetail) => homeDetail.salePrice < homeDetail.purchasePrice)
    .map((homeDetail) => homeDetail.salePrice)
    .reduce((acc, salePrice) => acc + salePrice, 0);

  outcomeValue.textContent = `${outcome}`;

  const gain = home
    .filter((homeDetail) => homeDetail.salePrice > homeDetail.purchasePrice)
    .map((homeDetail) => homeDetail.salePrice - homeDetail.purchasePrice)
    .reduce((acc, gainPrice) => acc + gainPrice, 0);

  console.log(gain);
  gainValue.textContent = `${gain}`;
};

const showHomeDetails = function (home, sort = false) {
  const homeDetails = sort
    ? home.sort((a, b) => a.salePrice - b.salePrice)
    : home;

  console.log(homeDetails);
  tbody.innerHTML = "";
  homeDetails.forEach((homeDetail) => {
    let type = homeDetail.type == 1 ? "Satış" : "Alış";

    let result =
      homeDetail.purchasePrice < homeDetail.salePrice ? "Qazanc" : "Ziyan";

    let classResult =
      homeDetail.purchasePrice < homeDetail.salePrice
        ? "text-bg-success"
        : "text-bg-danger";
    let html = `
            <tr>
              <td>${homeDetail.purchasePrice}</td>
              <td>${homeDetail.salePrice}</td>
              <td>${type}</td>
              <td>
                  <span class="badge py-2 px-4 rounded-pill ${classResult}">${result}</span>
              </td>
          </tr>
     `;

    tbody.insertAdjacentHTML("afterbegin", html);
  });
};

const loadHomeList = function (homeAddedArr) {
  listHome.innerHTML = "";
  homeAddedArr.forEach((homeAdd) => {
    let html = `
       <li class="list-group-item">${homeAdd.purchasePrice} - ${homeAdd.salePrice} </li>
  `;
    listHome.insertAdjacentHTML("afterbegin", html);
  });
};

const clearInput = function () {
  purchase.value = "";
  sale.value = "";
};

const createPassword = function (brokerList) {
  brokerList.forEach((broker) => {
    broker.password = broker.fullName
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("")
      .concat(broker.dateOfBirth);
  });

  console.log(brokerList);
};

createPassword(brokers);

const displayTable = function (current) {
  calcSummary(current.homes);
  showHomeDetails(current.homes);

  add.addEventListener("click", (e) => {
    e.preventDefault();
    const home = new Map();
    home.set("purchasePrice", Number(purchase.value));
    home.set("salePrice", Number(sale.value));
    home.set("type", 1);

    homeAdded.push(Object.fromEntries(home));
    loadHomeList(homeAdded);
    clearInput();
  });

  load.addEventListener("click", (e) => {
    e.preventDefault();

    if (homeAdded) {
      current.homes = [...current.homes, ...homeAdded];
      calcSummary(current.homes);
      showHomeDetails(current.homes);

      listHome.innerHTML = '<li class="list-group-item">An item</li>';
    }
  });
};

//EVENTS

loginBtn.addEventListener("click", (e) => {
  if (!brokers.every((x) => x.password)) {
    alert("Shifreler teyin olumayib");
  }

  if (!brokers.some((x) => x.userName == userNameInp.value)) {
    alert("Username is wrong!");
    return;
  }

  currentBroker = brokers.find((x) => x.userName == userNameInp.value);

  if (currentBroker.password == passwordInp.value) {
    loginContainer.style.display = "none";
    appContainer.style.opacity = 110;
    displayTable(currentBroker);
  }
});

let iSort = false;
sort.addEventListener("click", (e) => {
  e.preventDefault();
  showHomeDetails(currentBroker.homes, !iSort);
  iSort = !iSort;
});

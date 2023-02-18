const qSel = function (selector) {
  return document.querySelector(selector);
};

const qSelAll = function (selector) {
  return document.querySelectorAll(selector);
};
const byClass = function (selector) {
  return document.getElementsByClassName(selector);
};

const byId = function (selector) {
  return document.getElementById(selector);
};

const validationMessage = [
  {
    id: 1,
    message: 'Şifrə ən az 5 simvoldan ibarət olmalıdır',
  },
  {
    id: 2,
    message: 'Şifrə daxilində ən az bir rəqəm olmalıdır',
  },
  {
    id: 3,
    message: 'Şifrə daxilində ən az bir böyük hərf olmalıdır',
  },
];

let btn = byId('checkBtn');
let inp = byId('checkInp');
let lbl = byId('resulLabel');
let valLength = byId('valLength');
let valNmb = byId('valDigit');
let valUpp = byId('valUpperWords');
let frm = byId('content_sect');

//Checking lenght
const checkLength = inputText => inputText.length >= 5;

const checkNumber = inputText => {
  let text = '';
  for (let index = 0; index < inputText.length; index++) {
    text = inputText.charAt(index);

    if (!isNaN(text)) {
      return true;
    }
  }
  return false;
};

const checkUpperWord = inputText => {
  let index = 0;
  let text = '';

  while (inputText.length > index) {
    //admin
    text = inputText.charAt(index); // a
    let upperWord = text.toUpperCase(); //A
    if (text == upperWord && isNaN(text)) {
      return true;
    }
    index++;
  }
  return false;
};

const createSpan = text => {
  let span = document.createElement('span');
  span.classList.add('text-danger', 'mt-3');
  span.style.display = 'inline-block';
  span.innerHTML = text;

  return span;
};

const removeSpan = () => {
  if (qSel('span')) {
    qSelAll('span').forEach(sp => {
      sp.remove();
    });
  }
};

btn.addEventListener('click', () => {
  removeSpan();
  if (!checkLength(inp.value)) {
    frm.appendChild(createSpan(validationMessage[0].message));
  }
  if (!checkNumber(inp.value)) {
    frm.appendChild(createSpan(validationMessage[1].message));
  }
  if (!checkUpperWord(inp.value)) {
    frm.appendChild(createSpan(validationMessage[2].message));
  }
});

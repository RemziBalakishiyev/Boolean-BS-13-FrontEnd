const information = [
  {
    img: 'cardimg.jpg',
    fullName: 'Remzi Balakishiyev',
    job: 'Software Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.',
    color: '#0a9396',
    quoteColor: '#57cfd1',
  },
  {
    img: 'imgWomen1.jpg',
    fullName: 'Aynur Axundzade',
    job: 'Backend Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.',
    color: '#ee9b00',
    quoteColor: '#ecb755',
  },
  {
    img: 'imgWomen2.jpg',
    fullName: 'Gunel Hashimova',
    job: 'Front-end Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.',
    color: '#001219',
    quoteColor: '#041a22',
  },
];

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

let cardimg = byId('empImg');
let cardJob = byId('job');
let cardFullName = byId('fullName');
let skill = byId('skill');
let showButton = byId('btnShow');
let nextBtn = byClass('fa-angle-right');
let previousBtn = byClass('fa-angle-left');
let bgImg = byClass('bg-img');
let quoete = byClass('fa-quote-left');

let currentNum = 0;
let slideBtn = qSelAll('.card-slider i');
const changeSlide = function ({
  img,
  fullName,
  job,
  description,
  color,
  quoteColor,
}) {
  cardimg.setAttribute('src', `image/${img}`);
  cardFullName.innerHTML = fullName;
  cardJob.innerHTML = job;
  skill.innerHTML = description;
  bgImg[0].style.backgroundColor = color;
  quoete[0].style.backgroundColor = quoteColor;
  showButton.style.backgroundColor = color;

  slideBtn.forEach(btn => {
    btn.style.color = color;
  });
};

const walkInfo = currentNum => {
  let i = currentNum;
  changeSlide(information[i]);
};

const operationButton = function () {
  nextBtn[0].addEventListener('click', () => {
    if (currentNum == information.length - 1) {
      currentNum = 0;
    } else {
      currentNum++;
    }
    walkInfo(currentNum);
  });

  previousBtn[0].addEventListener('click', () => {
    if (currentNum <= 0) {
      currentNum = information.length - 1;
    } else {
      currentNum--;
    }
    walkInfo(currentNum);
  });
};

operationButton();

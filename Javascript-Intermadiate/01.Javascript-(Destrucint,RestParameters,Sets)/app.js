const movies = {
  name: "Silence of The sheep",
  genre: ["Dram", "Dedective", "Grammy"],
  language: ["Azerbaijan", "Russian", "English"],
  subTitle: ["Azerbaijan", "Turk", "Arabic"],

  seasons: {
    firstSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    secondSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    lastSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
  },

  playWithLanguga(langIndex, subIndex) {
    return [this.language[langIndex], this.subTitle[subIndex], this.genre];
  },

  addNewInformation({ imdb, relaesDate }) {
    if (imdb > 6) {
      console.log("This film  release date is " + relaesDate);
    }
  },

  addGenre(genreArr) {
    console.log(new Set([...this.genre, ...genreArr]));
    this.genre = [...new Set([...this.genre, ...genreArr])];
    console.log(this.genre);
  },
};

//Destructing Array
// let [main, secondary] = movies.genre;

// // console.log(secondary);
// // [secondary, main] = [main, secondary];

// // if (subLang == "Turk") {
// //   console.log(lang);
// // }

// const numberWithArray = [1, 23, 33, [-1, -2, -50]];

// // const [x, y, z, [a, b, c]] = numberWithArray;
// // console.log(x, b);

// // const [lang, subLang, [d, dd, g]] = movies.playWithLanguga(2, 1);

// // console.log(dd);

// Destructiring Objects
// // const { name: mName, genre: mGenre, language, seasons } = movies;

// // const {
// //   lastSeason: { episodeOne, episodeTwo, episodeThree },
// // } = movies.seasons;

// // movies.addNewInformation({
// //   imdb: 8.5,
// //   actors: ["Scott Adkins", "Leanardo Di Caprio"],
// //   relaesDate: 1959,
// // });
// console.log(episodeTwo);

//Spread Operators

const positiveNumber = [1, 2, 4];
const negativeNumber = [-1, -10, -13];
console.log(...positiveNumber);

const newLanguage = ["Spain", "French", "Germany"];

movies.language = [...movies.language, ...newLanguage];

console.log(movies.language);

const allNumbers = [...positiveNumber, ...negativeNumber];

const allLanguage = [...movies.language, ...movies.subTitle];
console.log(allLanguage);

const newGenres = ["Romantic", "Horor", "Dram", "Dedective"];

movies.addGenre(newGenres);

const show = function (...values) {
  console.log(...values);

  const [first, second] = values;

  console.log(second);
};

// show("a");
show("b", "c");
show("b", 12, "k", 1, 2, 3);

console.log([...new Set(allLanguage)]);

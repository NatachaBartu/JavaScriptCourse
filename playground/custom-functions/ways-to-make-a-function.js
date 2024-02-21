//  function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }
// doctorize("Natacha");

// //Anonimous Function
// function(firstName) {
//   return `Dr. ${firstName}`;
// }

// //function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Anonimous functions
// function inchToCm(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// const inchToCm = function (inches) {
//   return inches * 2.54;
// };

//arrow function
// const inchToCm = (inches) => {
//   return inches * 2.54;
// };

// const inchToCm = (inches) => inches * 2.54;

// const add = (a, b = 3) => (total = a + b);

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

//IIFE
//Immediately Invoked Function Expression
// (function () {
//   console.log("running the anon function");
// })();

// Methods!!!
const nat = {
  name: "Natacha Bartu",
  // Method!
  sayHi: function () {
    console.log(`Hey ${this.name}`);
    return "Natacha Bartu";
  },
  // Short hand Method
  yellHi() {
    console.log("HEY Natacha Bartu");
  },
  // Arrow function
  wisperHi: () => {
    console.log("hii nat im a mouse");
  },
};

// Callback Functions
// Click Callback
// const button = document.querySelector(".clickMe");

// function handleClick() {
//   console.log("Great Clicking!!");
// }

// button.addEventListener("click", function () {
//   console.log("NIce Job!!!");
// });

// Timer Callback
// setTimeout(() => {
//   console.log("DONE! Time to eat!");
// }, 1000);

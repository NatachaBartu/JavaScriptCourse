// const age = 100;
// function go() {
//   const hair = "blonde";
//   console.log(hair);
//   //hair is available only inside the scope of this function.
// }
// go();
// console.log(age);

// //BLOCK SCOPE
// function isCool(name) {
//   let cool;
//   if (name === "Bartu") {
//     cool = true;
//   }

//   console.log(cool);
//   return cool;
// }

//LEXICAL SCOPE
// const dog = "Helga";

// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = "Sunny";
//   logDog();
// }

// go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

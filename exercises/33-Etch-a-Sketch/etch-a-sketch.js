//select the elements on the page
const canvas = document.getElementById("#etch-a-sketch");
const shakeBtn = document.getElementsByClassName(".shake");

console.log(canvas);

const ctx = canvas.getContext("2d");

//set canvas for drawing
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

//randomize position x and y starting points on canvas
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

//start drawing
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

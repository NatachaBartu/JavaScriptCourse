//select the elements on the page
const canvas = document.getElementById("#etch-a-sketch");
const shakeBtn = document.getElementsByClassName(".shake");

const ctx = canvas.getContext("2d");

//set canvas for drawing
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

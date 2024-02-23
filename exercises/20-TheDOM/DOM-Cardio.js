// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>
`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;
console.log(div);

// create an image
const myImage = document.createElement("img");
// set the width to 250
myImage.width = 250;
myImage.height = 250;
// set the source to an image
myImage.src = "https://picsum.photos/500";
// add an alt of Cute Puppy
myImage.alt = "Cute Puppy";
// add a class of cute
myImage.classList.add("cute");
// Append that image to the wrapper
div.appendChild(myImage);
console.log(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
  <div class="divP">
     <p>Paragraph One</p>
     <p>Paragraph Two</p>
  </div>
`;
const ulElement = div.querySelector("ul");
console.log(ulElement);

ulElement.insertAdjacentHTML("beforebegin", myHTML);

const divParaGraph = div.querySelector(".divP");
// add a class to the second paragraph called warning
divParaGraph.children[1].classList.add("warning");
// remove the first paragraph
divParaGraph.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
  <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
  <button class="delete" type=""button>&times; Delete</button>
  </div>
  `;
  return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard("Helga", 14, 60);
cardsHTML += generatePlayerCard("Fro", 8, 60);
cardsHTML += generatePlayerCard("Ze", 7, 60);
cardsHTML += generatePlayerCard("Sanzo", 8, 60);
// append those cards to the div

cards.innerHTML = cardsHTML;
div.insertAdjacentElement("beforebegin", cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll(".delete");

function deleteCard(event) {
  //console.log(event.currentTarget);
  const clickedBtn = event.currentTarget;
  clickedBtn.parentElement.remove();
}

buttons.forEach((button) => button.addEventListener("click", deleteCard));

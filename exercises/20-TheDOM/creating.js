const myParagraph = document.createElement("p");
myParagraph.textContent = "I am the Paragraph";
myParagraph.classList.add("special");

// console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/300";
myImage.alt = "nice photo";
// console.log(myImage);

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

//add heading to the top!.

const heading = document.createElement("h2");
heading.textContent = "Cool Heading";

myDiv.insertAdjacentElement("afterbegin", heading);

// CREATE A UL FROM JS

const list = document.createElement("ul");
const li = document.createElement("li");

document.body.insertAdjacentElement("afterbegin", list);

//CONTACT ME
const contactMe = li.cloneNode(true);
contactMe.textContent = "LETS GET IN TOUCH";
list.insertAdjacentElement("afterbegin", contactMe);

//ABOUT ME
const aboutMe = li.cloneNode(true);
aboutMe.textContent = "ABOUT ME";
list.insertAdjacentElement("afterbegin", aboutMe);

//PORTFOLIO
const portfolio = li.cloneNode(true);
portfolio.textContent = "PORTFOLIO";
list.insertAdjacentElement("afterbegin", portfolio);

//MY WORKS
const myWorks = li.cloneNode(true);
myWorks.textContent = "MY WORKS";
list.insertAdjacentElement("afterbegin", myWorks);

//HOME
const home = li.cloneNode(true);
home.textContent = "HOME";
list.insertAdjacentElement("afterbegin", home);

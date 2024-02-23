const natacha = document.querySelector(".natacha");

console.log(natacha.children);
console.log(natacha.firstElementChild);
console.log(natacha.lastElementChild);
console.log(natacha.previousElementSibling);
console.log(natacha.nextElementSibling);
console.log(natacha.parentElement);

//Nodes elements
// el.childNodes
// el.firstChild
// el.lastChild
// el.previousSibling
// el.nextSibling
// el.parentNode

const p = document.createElement("p");
p.textContent = "I will be removed";
document.body.appendChild(p);

p.remove();

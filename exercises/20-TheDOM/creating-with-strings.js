const item = document.querySelector(".item");

const width = 500;
const photoSrc = `https://picsum.photos/${width}`;
const photoDesc = `Nice Photo`;
const myHTML = `
<div class= "wrapper">
 <h1> Lets Talk About Me! </h1>
 <h2>Cute ${photoDesc}</h2>
 <img src="${photoSrc}" alt="${photoDesc}"
</div>
`;
// item.innerHTML = myHTML;
// console.log(item.innerHTML);

//TURN A STRING INTO A DOM ELEMENT

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.append(myFragment);

console.log(myFragment);

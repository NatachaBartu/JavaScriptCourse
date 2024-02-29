const cardBtn = document.querySelectorAll(".card button");

function handleCardBtnClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  const modalInner = document.querySelector(".modal-inner");
  modalOuter = document.querySelector(".modal-outer");

  //grab image information
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  const name = card.querySelector("h2").textContent;

  //populate modal with new info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace("200", "600")}" alt="${name}"/>
    <p>${desc}</p>
  `;

  //show modal
  modalOuter.classList.add("open");
}

cardBtn.forEach((button) =>
  button.addEventListener("click", handleCardBtnClick)
);

const butts = document.querySelector(".butts");
const coolBtn = document.querySelector(".cool");
const buyBtn = document.querySelectorAll("button.buy");

// function handleClick() {
//   console.count("got ckicked");
// }

// function buyItem() {
//   console.log("Buying");
// }
// function handleBuyBtnOnClick(buyBtn) {
//   buyBtn.addEventListener("click", buyBtn);

// }

// butts.addEventListener("click", handleClick);
// coolBtn.addEventListener("click", handleClick);

// buyBtn.forEach(handleBuyBtnOnClick);
function handleBuyButtononClick(Event) {
  const button = EventTarget;

  console.log(EventTarget.currentTarget);
  Event.stopPropagation();
  console.count(button);
}
buyBtn.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtononClick);
});

const photoEl1 = document.querySelector(".photo");

photoEl1.addEventListener("mouseenter", function (e) {
  console.count(e.currentTarget);
});

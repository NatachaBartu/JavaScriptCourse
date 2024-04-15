const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

//state of the cart
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log("submitted");
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name: name,
    id: Date.now(),
    complete: false,
  };
  //push item into empty state array
  items.push(item);
  console.log(`There are now ${items.length} in your state`);

  //clear the form input
  e.currentTarget.reset();

  //custom events for updated items
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input
        value="${item.id}"
        type="checkbox"
        ${item.complete && "checked"}
      >
      <span class="itemName">${item.name}</span>
      <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</button>
  </li>`
    )
    .join("");
  list.innerHTML = html;
}

function populateLocalStorage() {
  console.info("saving on local storage");
  localStorage.setItem("items", JSON.stringify(items));
}

function restoreItemsFromLocalStorage() {
  console.log("restoring");
  //pull items from local storage
  const listOfItems = JSON.parse(localStorage.getItem("items"));
  if (listOfItems.length) {
    items.push(...listOfItems);
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }
}

function deleteItem(id) {
  console.log("deleting item", id);
  items = items.filter((item) => item.id !== id);
  // const itemRef = items.find((item) => item.id === id);
  // itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function markedAsCompleted(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

shoppingForm.addEventListener("submit", handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", populateLocalStorage);

//event delagation
list.addEventListener("click", function (event) {
  const id = parseInt(event.target.value);
  if (event.target.matches("button")) {
    deleteItem(id);
  }
  if (event.target.matches('input[type="checkbox"]')) {
    markedAsCompleted(id);
  }
});

restoreItemsFromLocalStorage();

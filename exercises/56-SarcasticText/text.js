const textArea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

const filters = {
  sarcastic: function (letter, index) {
    //if is odd number will return trufhy
    if (index % 2) {
      return letter.toUpperCase();
    }
    return letter.toLowerCase();
  },
  funky: function () {},
  unable: function () {},
};

function transformText(text) {
  const filter = filterInputs.find((input) => input.checked).value;
  console.log(filter);
  //greab the text and loop over each letter
  const modified = Array.from(text).map(filters.sarcastic);
  console.log(modified);
  result.textContent = modified.join("");
}

textArea.addEventListener("input", (e) => transformText(e.target.value));

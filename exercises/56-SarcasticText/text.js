const textArea = document.querySelector('[name="text"]');
const result = document.querySelector(".result");
const filterInputs = document.querySelector('[name="filter"]');

function transformText(text) {
  console.log(text);
  result.textContent = text;
}

textArea.addEventListener("input", (e) => transformText(e.target.value));

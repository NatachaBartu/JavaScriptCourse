const natacha = document.querySelector(".bartu");
natacha.addEventListener("click", function (e) {
  const shouldChangePage = confirm(
    "This  website might be malicious!, do you whish to preceed?"
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector(`[name="signup"]`);

signupForm.addEventListener("submit", function (e) {
  // console.log(e.currentTarget.name.value);
  // console.log(e.currentTarget.email.value);
  const name = e.currentTarget.name.value;
  if (name.includes("chad")) {
    alert("sorry, name not found!");
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("blur", logEvent);
signupForm.name.addEventListener("focus", logEvent);
// keyup
// keydown
// focus
// blur

const photo = document.querySelector(".photo");

function handlePhotoClick(e) {
  if (e.type === "click" || e.key === "enter") {
    console.log("you clicked the photo");
  }
}

photo.addEventListener("click", handlePhotoClick);
photo.addEventListener("click", handlePhotoClick);

const getName = document.getElementById("firstName");
const getLastName = document.getElementById("lastName");
const getEmail = document.getElementsByClassName("emailClass");

const button = document.getElementById("submitBtn");
// const button = document.getElementsByClassName("button1"); ----THIS
// console.log(button1);

getName.addEventListener("input", (event) => {
  let firstName = event.target.value;
  if (firstName.length >= 3) {
    getName.style.backgroundColor = "green";
  } else {
    getName.style.backgroundColor = "red";
  }
  if (/^[a-z ,.'-]+$/i.test(event.target.value)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    // FirstNameError.innerText = "";
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    // FirstNameError.innerText = "Invalid First name input";
  }
});

getLastName.addEventListener("input", (event) => {
  let lastName = event.target.value;
  if (lastName.length >= 3) {
    getLastName.style.backgroundColor = "green";
  } else {
    getLastName.style.backgroundColor = "red";
  }
  if (/^[a-z ,.'-]+$/i.test(event.target.value)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
    // LastNameError.innerText = "";
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    // LastNameError.innerText = "Invalid Last name input";
  }
});

getEmail[0].addEventListener("input", (event) => {
  const email = getEmail[0].value;
  if (email.includes("@") && email.endsWith(".com")) {
    getEmail[0].style.backgroundColor = "green";
  } else {
    getEmail[0].style.backgroundColor = "red";
  }
});

button.addEventListener("submit", (event) => {
  const inputs = [...document.getElementsByClassName("button1")];

  const areValid = inputs.every((input) => input.classList.contains("valid"));

  if (!areValid) {
    event.preventDefault();
  }
});

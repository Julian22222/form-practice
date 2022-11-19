const searchStr = document.location.search;

const queries = new URLSearchParams(searchStr);

const firstName = queries.get("First name");
const lastName = queries.get("Last name");
// const userName = queries.get("Username");
// const url = queries.get("Avatar Image url");

const firstNameInput = document.getElementById("firsName");
const LastNameInput = document.getElementById("lastName");
// const userNameInput = document.getElementById("userName");
// const urlInput = document.getElementById("url");

firstNameInput.innerText = "First name: " + firstName;
LastNameInput.innerText = "Last name: " + lastName;
// userNameInput.innerText = "Username: " + userName;

const welcomeMessage = document.getElementById("welcomePicture");

searchStr = document.location.search;
console.log(searchStr);

const queries = new URLSearchParams(searchStr);

const welcomeName = queries.get("firstName");

welcomeMessage.innerText = `Welcome ${firstName}`;

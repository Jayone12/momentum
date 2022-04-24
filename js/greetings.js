const loginForm = document.querySelector(".login-modal");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const menuUserName = document.querySelector(".user-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const greetingArr = ["Good morning!", "Good afternoon!", "Good evening!"];
  const getHour = new Date().getHours();
  if (0 < getHour > 12) {
    greeting.innerText = `${greetingArr[0]} ${username}`;
  } else if (12 < getHour > 17) {
    greeting.innerText = `${greetingArr[1]}  ${username}`;
  } else if (getHour > 17) {
    greeting.innerText = `${greetingArr[2]}  ${username}`;
  }
  menuUserName.innerText = `Welcome to ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

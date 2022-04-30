import { saveLocalStorage, getLocalStorage } from "./localStorage.js";

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveLocalStorage(TODOS_KEY, toDos);
}

function checked(event) {
  const li = event.target.parentElement;
  const check = document.querySelector(`input[name="${event.target.name}"]`);

  if (check.checked) {
    li.style.textDecoration = "line-through";
    li.style.color = "#c8c8c8";
  } else {
    li.style.textDecoration = "none";
    li.style.color = "#000";
  }
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const div = document.createElement("div");
  const p = document.createElement("p");
  const input = document.createElement("input");
  input.name = newToDo.id;
  input.type = "checkbox";
  input.addEventListener("click", checked);
  p.innerText = newToDo.text;
  const button = document.createElement("button");
  button.classList.add("fas", "fa-trash-alt");
  button.addEventListener("click", deleteToDo);
  li.appendChild(div);
  div.prepend(input);
  div.appendChild(p);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveLocalStorage(TODOS_KEY, toDos);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = getLocalStorage(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

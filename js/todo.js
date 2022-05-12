import { saveLocalStorage, getLocalStorage } from "./localStorage.js";
import { widgetRander } from "./widget.js";

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const widetLists = document.querySelector(".todo-widget > ul");
const todoWidget = document.querySelector(".todo-widget");
const widgetBtn = document.querySelector(".menu-todo > .widget-btn");

const TODOS_KEY = "todos";
const WIDGET_KEY = "widget";
let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveLocalStorage(TODOS_KEY, toDos);
}

function handleCheck(event, newToDo) {
  const todoText = event.path[1].lastChild;
  newToDo.check = !newToDo.check;
  if (!newToDo.check) {
    todoText.style.textDecoration = "none";
    todoText.style.color = "#000";
  } else {
    todoText.style.textDecoration = "line-through";
    todoText.style.color = "#c8c8c8";
  }
  saveLocalStorage(TODOS_KEY, toDos);
  widgetRander(TODOS_KEY, widetLists);
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const div = document.createElement("div");
  li.appendChild(div);
  checkInputCreate(div, newToDo);
  pragCreate(div, newToDo);
  deleteBtnCreate(li);
  toDoList.appendChild(li);
}

function deleteBtnCreate(parentEl) {
  const button = document.createElement("button");
  button.classList.add("fas", "fa-trash-alt");
  button.addEventListener("click", (event) => {
    deleteToDo(event);
    widgetRander(TODOS_KEY, widetLists);
  });
  parentEl.appendChild(button);
}

function pragCreate(parentEl, value) {
  const p = document.createElement("p");
  if (!value.check) {
    p.style.textDecoration = "none";
    p.style.color = "#000";
  } else {
    p.style.textDecoration = "line-through";
    p.style.color = "#c8c8c8";
  }
  p.innerText = value.text;
  parentEl.appendChild(p);
}

function checkInputCreate(parentEl, value) {
  const input = document.createElement("input");
  input.name = value.id;
  input.type = "checkbox";
  input.checked = value.check;
  input.addEventListener("click", (event) => {
    handleCheck(event, value);
  });
  parentEl.prepend(input);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
    check: false,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveLocalStorage(TODOS_KEY, toDos);
  widgetRander(TODOS_KEY, widetLists);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const getToDos = JSON.parse(getLocalStorage(TODOS_KEY));

if (getToDos !== null) {
  toDos = getToDos;
  toDos.forEach(paintToDo);
  widgetRander(TODOS_KEY, widetLists);
}

const getWidget = JSON.parse(getLocalStorage(WIDGET_KEY));

widgetBtn.addEventListener("click", () => {
  getWidget[0].check = !getWidget[0].check;
  if (getWidget[0].check) {
    todoWidget.classList.remove("hidden");
  } else {
    todoWidget.classList.add("hidden");
  }
  saveLocalStorage(WIDGET_KEY, getWidget);
});

if (getWidget[0].check) {
  todoWidget.classList.remove("hidden");
} else {
  todoWidget.classList.add("hidden");
}

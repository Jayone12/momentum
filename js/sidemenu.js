const sideMenu = document.querySelector(".main-menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuTitle = document.querySelector(".menu-title");
const toDoListContiner = document.querySelector(".todo-list-container");

function openMenu() {
  sideMenu.classList.add("active");
}

function closeMenu() {
  sideMenu.classList.remove("active");
}

function openMenuContent() {
  toDoListContiner.classList.toggle("active");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menuTitle.addEventListener("click", openMenuContent);

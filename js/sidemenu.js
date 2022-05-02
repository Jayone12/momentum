const sideMenu = document.querySelector(".main-menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuTitle = document.querySelectorAll(".menu-title span");
const toDoListContiner = document.querySelector(".list-container");

function openMenu() {
  sideMenu.classList.add("active");
}

function closeMenu() {
  sideMenu.classList.remove("active");
}

function openMenuContent(event) {
  const current = event.path[2].children[1];
  current.classList.toggle("hidden");
}

menuTitle.forEach((title) => {
  title.addEventListener("click", openMenuContent);
});

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
// menuTitle.addEventListener("click", openMenuContent);

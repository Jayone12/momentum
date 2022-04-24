const sideMenu = document.querySelector(".main-menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

function openMenu() {
  sideMenu.classList.add("active");
}

function closeMenu() {
  sideMenu.classList.remove("active");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

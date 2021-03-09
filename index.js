const menuBar = document.getElementById("menu-bar");
const navMenu = document.getElementById("nav-menu");
const closeButton = document.getElementById("btn-close");

menuBar.onclick = function handleMenuBar(e) {
    e.preventDefault();
    navMenu.classList.remove("nav-menu");
    navMenu.classList.add("nav-menu");
    navMenu.classList.add("active");
}

closeButton.onclick = function handleCloseButton(e) {
    e.preventDefault();
    navMenu.classList.remove("active");
}
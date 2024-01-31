const burgerMenu = document.getElementById('burger-menu');

function toggleBurger() {
	burgerMenu.style.display === "block" ? closeBurger() : openBurger();
}
function openBurger() {
	burgerMenu.style.display = "block";
}
function closeBurger() {
	burgerMenu.style.display = "none";
}
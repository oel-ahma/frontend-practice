const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const burgers = document.querySelector("#burger1");
const hLinks = document.querySelectorAll("#hlinks");
const darkLogo = document.querySelector("#darkLogo");
const lightLogo = document.querySelector("#lightLogo");
const body = document.querySelector("body");

const darkMode = document.querySelectorAll("#darkMode");

console.log(darkMode);

hamburger.addEventListener('click', () => {
	menu.classList.toggle("hidden");
	burgers.classList.toggle("bg-white");
});

hLinks.forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.toggle("hidden");
		burgers.classList.toggle("bg-white");
	});
})

// darkLogo.addEventListener('click', () => {
// 	body.classList.toggle("dark");
// 	darkLogo.classList.toggle("md:block");
// 	lightLogo.classList.toggle("md:block")
// });

// lightLogo.addEventListener('click', () => {
// 	body.classList.toggle("dark");
// 	darkLogo.classList.toggle("md:block");
// 	lightLogo.classList.toggle("md:block")
// });

darkMode.forEach(logo => {
	logo.addEventListener('click', () => {
	body.classList.toggle("dark");
	darkMode[0].classList.toggle("md:block");
	darkMode[1].classList.toggle("md:block");
	});
})

var slides = new Array("img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg");
var slideTitles = new Array("A VERY GOOD PRODUCT", "ANOTHER VERY GOOD PRODUCT", "A GOOD PRODUCT");
var slideTexts = new Array("Luffy, un jeune garçon, rêve de devenir le Roi des Pirates en trouvant le One Piece, le trésor ultime rassemblé par Gol D. Roger, le seul pirate à avoir jamais porté le titre de Roi des Pirates. Shanks le Roux, un pirate qui est hébergé par les villageois du village de Luffy, est le modèle de Luffy depuis que le pirate a sauvé la vie du garçon. Un jour, Luffy mange un des fruits du démon, qui était détenu par l'équipage de Shanks, ce qui fait de lui un homme-caoutchouc, pouvant étirer son corps à volonté. À son départ, Shanks donne à Luffy son chapeau de paille. Luffy ne doit lui rendre ce chapeau que lorsqu'il sera devenu un fier pirate", "Gomu Gomu No Gatling-Gun", "Santoryu Oni...Giri")
var pos = 0;


function changeSlide(side) {
	pos = side === 'left' ? --pos : ++pos;
	pos = pos > slides.length - 1 ? 0 : pos;
	pos = pos < 0 ? slides.length - 1 : pos;
	document.getElementsByClassName('slide').src = slides[pos];
	for (let i = 0; i < 3; ++i) {
		if (pos === i)
			document.getElementById(`slide${pos + 1}`).style.opacity = 1;
		else
			document.getElementById(`slide${i + 1}`).style.opacity = 0;
	}
	changeText();
}

function changeText() {
	document.getElementById("title").innerHTML = slideTitles[pos];
	document.getElementById("slideText").innerHTML = slideTexts[pos];
	if (pos === 2)
		document.getElementById("slideText").style.backgroundColor = "rgba(128,128,128, 0.8)";
	else
		document.getElementById("slideText").style.backgroundColor = "rgba(128,128,128, 0)";

}

// function initSlider() {
// 	var slider = document.querySelector("#slider");
// 	var previousButton = document.querySelector(".previous");
// 	var nextButton = document.querySelector(".next");
// 	var slides = slider.querySelectorAll(".slide");
// 	var animationDuration = 700;
	
// 	// put slides in it's initial place
// 	var currentIndex = slider.dataset.showing * 1;
// 	[].forEach.call(document.querySelectorAll(".slide"), function(elem, i){
// 	  i = i+1; // index starts at 0
// 	  if(i === currentIndex) return;
// 	  elem.style.transform = i < currentIndex ? "translateX(-100%)" : "translateX(100%)";
// 	});
	
// 	// prevent user from bursting through the slides.
// 	function onAnimationEnd() {
// 	  clearTimeout(slider.isMoving);
// 	  slider.isMoving = undefined;
// 	}
	
// 	function moveSlide(animationName){
// 	  var direction = 0;
// 	  if(animationName === "left") direction = -1;
// 	  if(animationName === "right") direction = 1;
	  
// 	  return function() {
// 		  // check if it is currently moving
// 		  if(!isNaN(slider.isMoving)) return;
// 		  // some old devices might skip a few animationEnd events
// 		  // setTimeout is used as a last reource to prevent that to happen.
// 		  slider.isMoving = setTimeout(onAnimationEnd, animationDuration + 50);
		  
// 		  var current = slider.dataset.showing * 1;
// 		  var next = current + direction;
// 		  if(next < 1) next = 3;
// 		  if(next > slides.length) next = 1;
		  
// 		  var currentSlide = slider.querySelector(".image-" + current);
// 		  var nextSlide = slider.querySelector(".image-" + next);
		  
// 		  currentSlide.style.animationName = "slide-out-" + animationName;
// 		  nextSlide.style.animationName = "slide-in-from-" + animationName;
		  
// 		  slider.dataset.showing = next;
// 		};
// 	}
		
// 	previousButton.addEventListener("click", moveSlide("left"), false);
// 	nextButton.addEventListener("click", moveSlide("right"), false);
// 	slider.addEventListener("animationend", onAnimationEnd, false);
// }
// var slideTitles = new Array("A VERY GOOD PRODUCT", "ANOTHER VERY GOOD PRODUCT", "A GOOD PRODUCT");
// var slideTexts = new Array("Luffy, un jeune garçon, rêve de devenir le Roi des Pirates en trouvant le One Piece, le trésor ultime rassemblé par Gol D. Roger, le seul pirate à avoir jamais porté le titre de Roi des Pirates. Shanks le Roux, un pirate qui est hébergé par les villageois du village de Luffy, est le modèle de Luffy depuis que le pirate a sauvé la vie du garçon. Un jour, Luffy mange un des fruits du démon, qui était détenu par l'équipage de Shanks, ce qui fait de lui un homme-caoutchouc, pouvant étirer son corps à volonté. À son départ, Shanks donne à Luffy son chapeau de paille. Luffy ne doit lui rendre ce chapeau que lorsqu'il sera devenu un fier pirate", "Gomu Gomu No Gatling-Gun", "Santoryu Oni...Giri")

var awSlides = new Array("img/awesome-slide1.jpg", "img/awesome-slide2.jpg", "img/awesome-slide3.jpg");
var awPos = 0;


function mouveSlide(side) {
	awPos = side === 'left' ? --awPos : ++awPos;
	awPos = awPos > awSlides.length - 1 ? 0 : awPos;
	awPos = awPos < 0 ? awSlides.length - 1 : awPos;
	
	let next;
	next = side === 'left' ? awPos - 1 : awPos + 1;
	next = next > awSlides.length - 1 ? 0 : next;
	next = next < 0 ? awSlides.length - 1 : next;
	console.log(awPos, next);
	// var checkAnim = document.querySelector(`aw${awPos + 1}`).getAnimations();
	// console.log(checkAnim);
	document.getElementById(`aw${awPos + 1}`).style.animationName = "slide-out-" + side; 
	document.getElementById(`aw${next + 1}`).style.animationName = "slide-in-from-" + side;

}


// window.addEventListener("load", initSlider, false);




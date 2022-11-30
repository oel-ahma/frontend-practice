var slides = new Array("img/slide1.jpg", "img/slide2.jpg", "img/slide3.jpg");
var slideTitles = new Array("Hôtel PARIS", "Piscine Éxterieur", "Chambres Familliales");
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
	if (pos === 0)
		document.getElementById("title").style.color = "rgba(0,0,0, 1)";
	else {
		if (pos === 1)
			document.getElementById("title").style.color = "rgba(24,160,251, 1)";
		else
			document.getElementById("title").style.color = "rgba(255,255,255, 1)";
	}

}


function changeStyle(element) {
	if (!element.value)
	{
		element.style.setProperty("--c", "red");
		document.getElementById("error-message").style.opacity = "1";
		return;
	}
	element.style.setProperty("--c", "none");
}


function checkIfEmpty() {
	let prenom = document.getElementById("prenom");
	let nom = document.getElementById("nom");
	let mail = document.getElementById("mail");
	let message = document.getElementById("message");
	
	document.getElementById("error-message").style.opacity = "0";
	changeStyle(prenom);
	changeStyle(nom);
	changeStyle(mail);
	changeStyle(message);
}
function myFunction() {
	alert("Welcome to my informative website! This focuses about telecommunications and different information about it using my knowledge about html, CSS, and JavaScript. Enjoy scrolling! \n\n -MGMT");
}

function importanceForYou(){
	var x = "";
	var choices = document.getElementsByName("choices");
	for (var i=0; i<choices.length; i++){
		if (choices[i].checked){
			x = x + choices[i].value + "\n";
		}
	}
	alert("Telecommunication is important in my life because: \n\n" + x);
	return false;
 }
 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

function tyFunction() {
	let userName = document.getElementById("userName").value;
	alert("Thank you for browsing my website, " + userName + "! I hope that you learned something about telecommunications. \n\n -MGMT");
}

function ty2Function() {
	let userName = document.getElementById("userName").value;
	alert("Thank you for commenting and recommending more ideas that you believe can improve the website. Rest assured that your comments will be taken into consideration. Thank you and have a nice day! \n\n -MGMT");
}
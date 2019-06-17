//slideshow function
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

function responsivefun() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
 
//Insert new item
function upload(){
	document.getElementById("uploadfile").click();
}

function display(){
	document.getElementById("model").classList.remove("hide");

	document.getElementById('model').style.display='block';
	document.getElementById("backdrop").classList.remove("hideoverlay");//update
	document.getElementById('backdrop').style.display='block';
}

function hide(){
	document.getElementById("model").classList.add("hide");
	document.getElementById("backdrop").classList.add("hideoverlay");//update
}    
    
//Back to top function
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
    
//*update* toggle color change
$(".mark").click(function () {
   $(this).toggleClass("yellow");
});
$(".btn").click(function () {
   $(this).toggleClass("btnclick");
});
    
//close div when clicked outside of it
$(document).mouseup(function(e) 
{
    var container = $(".container");
	var backdrop = $("#backdrop");//update
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
		backdrop.hide();
    }
});
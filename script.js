/*
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {
      slideIndex = 1;
     // document.getElementsByClassName("mySlides").style.display = 'none';
    }
  if (n < 1) {
      slideIndex = slides.length;
    //  document.getElementsByClassName("mySlides").style.display = 'none';
    }
  for (i = 0; i < slides.length; i++) {
    // document.getElementsByClassName("mySlides").style.display = 'none';
    slides[i].style.display = "none";
      
  }
  for (i = 0; i < dots.length; i++) {
   //document.getElementsByClassName("mySlides").style.display = 'none'; 
        dots[i].className = dots[i].className.replace(" active", ""); 
          
  }
 //document.getElementsByClassName("mySlides").style.display = 'none';
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/

// Making slideshow variables
var slideShow_Taira = document.getElementById("slideShow_Taira");
slideShow_Taira.currentSlideIndex = 1;
showSlides(slideShow_Taira.currentSlideIndex, slideShow_Taira);

var slideShow_E96Planes = document.getElementById("slideShow_E96Planes");
slideShow_E96Planes.currentSlideIndex = 1;
showSlides(slideShow_E96Planes.currentSlideIndex, slideShow_E96Planes);

var slideShow_E96Rockets = document.getElementById("slideShow_E96Rockets");
slideShow_E96Rockets.currentSlideIndex = 1;
showSlides(slideShow_E96Rockets.currentSlideIndex, slideShow_E96Rockets);

// Functions to progress slide show
function plusSlides(n, slideshow)
{
    showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow)
{
    showSlides(slideshow.currentSlideIndex = n, slideshow);
}

// Function to display images and videos in slideshow
function showSlides(n, slideshow)
{
    var i;
    var slides = slideshow.getElementsByClassName("mySlides");
    var dots = slideshow.getElementsByClassName("dot");

    if (n > slides.length)
    {
        slideshow.currentSlideIndex = 1
    }

    if (n < 1)
    {
        slideshow.currentSlideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideshow.currentSlideIndex - 1].style.display = "block";
    dots[slideshow.currentSlideIndex - 1].className += " active";
}
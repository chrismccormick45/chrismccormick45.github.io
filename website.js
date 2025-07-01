
// Making slideshow variables

var slideShow_About = document.getElementById("slideShow_About");
slideShow_About.currentSlideIndex = 1;
showSlides(slideShow_About.currentSlideIndex, slideShow_About);

var slideShow_TairaLab = document.getElementById("slideShow_TairaLab");
slideShow_TairaLab.currentSlideIndex = 1;
showSlides(slideShow_TairaLab.currentSlideIndex, slideShow_TairaLab);

var slideShow_Mayfly = document.getElementById("slideShow_Mayfly");
slideShow_Mayfly.currentSlideIndex = 1;
showSlides(slideShow_Mayfly.currentSlideIndex, slideShow_Mayfly);

var slideShow_SilentNightSurveillant = document.getElementById("slideShow_SilentNightSurveillant");
slideShow_SilentNightSurveillant.currentSlideIndex = 1;
showSlides(slideShow_SilentNightSurveillant.currentSlideIndex, slideShow_SilentNightSurveillant);

var slideShow_AutonomousDrone = document.getElementById("slideShow_AutonomousDrone");
slideShow_AutonomousDrone.currentSlideIndex = 1;
showSlides(slideShow_AutonomousDrone.currentSlideIndex, slideShow_AutonomousDrone);

var slideShow_CFD = document.getElementById("slideShow_CFD");
slideShow_CFD.currentSlideIndex = 1;
showSlides(slideShow_CFD.currentSlideIndex, slideShow_CFD);

var slideShow_Misc = document.getElementById("slideShow_Misc");
slideShow_Misc.currentSlideIndex = 1;
showSlides(slideShow_Misc.currentSlideIndex, slideShow_Misc);

var slideShow_Drone = document.getElementById("slideShow_Drone");
slideShow_Drone.currentSlideIndex = 1;
showSlides(slideShow_Drone.currentSlideIndex, slideShow_Drone);

var slideShow_Plane = document.getElementById("slideShow_Plane");
slideShow_Plane.currentSlideIndex = 1;
showSlides(slideShow_Plane.currentSlideIndex, slideShow_Plane);

var slideShow_Rocket = document.getElementById("slideShow_Rocket");
slideShow_Rocket.currentSlideIndex = 1;
showSlides(slideShow_Rocket.currentSlideIndex, slideShow_Rocket);

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
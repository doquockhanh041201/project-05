// Slides
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n * 2));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));

}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("client__reviews-item");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot--active", "");
    }

    let endIndex = slideIndex + 1; // Calculate the end index for the two slides
    console.log('slideIndex',slideIndex);

    if (endIndex > slides.length) {
        endIndex = endIndex - slides.length;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[Math.ceil(slideIndex / 2) - 1].className += " dot--active";
  
    slides[endIndex - 1].style.display = "block";

}

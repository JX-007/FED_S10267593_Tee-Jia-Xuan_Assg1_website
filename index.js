const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);  // Auto-slide every 5 seconds
    }
}

function showSlide(index) {
    // Ensure the index is within bounds
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Remove displaySlide from all slides
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    // Add displaySlide to the current slide
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle 'active' class to show/hide menu
}


/*
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Check if the username is stored in localStorage
    const username = localStorage.getItem("username");

    // If there is a username, display it in the top-left corner
    if (username) {
        const usernameDisplay = document.createElement("div");
        usernameDisplay.style.position = "absolute";
        usernameDisplay.style.top = "10px";
        usernameDisplay.style.left = "10px";
        usernameDisplay.style.fontSize = "18px";
        usernameDisplay.style.fontWeight = "bold";
        usernameDisplay.innerText = `Welcome, ${username}!`;

        document.body.appendChild(usernameDisplay);
    }
});*/

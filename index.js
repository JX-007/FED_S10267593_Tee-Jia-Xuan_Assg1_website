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

// Wait for the DOM to load and then display the username if it's stored
document.addEventListener("DOMContentLoaded", function() {
    // Get the stored username from localStorage
    const username = localStorage.getItem("username");

    // If the username exists, display it in the appropriate element
    if (username) {
        const usernameElement = document.getElementById("username-display"); // Assuming you have an element with this ID
        usernameElement.textContent = `Welcome, ${username}!`;
    }
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle 'active' class to show/hide menu
}

// Wait for the DOM to load and then display the username if it's stored
document.addEventListener("DOMContentLoaded", function() {
// Get the stored username from localStorage
const username = localStorage.getItem("username");

// If the username exists, display it in the appropriate element and show the logout button
if (username) {
    const usernameElement = document.getElementById("username-display");
    usernameElement.textContent = `Welcome, ${username}!`;

    // Show the logout button
    document.getElementById("logoutButton").style.display = "inline-block";
}});

// Logout function to clear username and hide logout button
function logout() {
    // Clear the stored username from localStorage
    localStorage.removeItem("username");

    // Remove the displayed username from the page
    const usernameElement = document.getElementById("username-display");
    usernameElement.textContent = '';

    // Hide the logout button
    document.getElementById("logoutButton").style.display = "none";
}
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

// Username - For Log In and Log Out
// Wait for the DOM to load and then display the username if it's stored
document.addEventListener("DOMContentLoaded", function() {
    // Get the stored username from localStorage
    const username = localStorage.getItem("username");

    if (username) {
        const usernameElement = document.getElementById("username-display");
        usernameElement.textContent = `Welcome, ${username}!`;
    
        // Show the logout button
        document.getElementById("logoutButton").style.display = "inline-block";
    }
});

// Making the Navigation Bar interactive
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle 'active' class to show/hide menu
}

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

// Sign Up Validation
// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and username input
    const form = document.getElementById("form");

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        // Get the values of the inputs
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;

        // Check if all fields are filled out
        if (!username || !email || !password || !password2) {
            alert("Please fill out all fields.");
            return;
        }

        // Check if passwords match
        if (password !== password2) {
            alert("Passwords do not match!");
            return;
        }

        // Store the username in localStorage (avoid storing passwords for security reasons)
        localStorage.setItem("username", username);
        
        // Redirect to the index page
        window.location.href = "index.html";  // Redirect after form submission
    });
});

// Log In Validation
// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Get the form and username input
    const form = document.getElementById("form");

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        // Get the values of the inputs
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if all fields are filled out
        if (!username || !password) {
            alert("Please fill out all fields.");
            return;
        }
        // Store the username in localStorage (avoid storing passwords for security reasons)
        localStorage.setItem("username", username);
        
        // Redirect to the index page
        window.location.href = "index.html";  // Redirect after form submission
    });
});

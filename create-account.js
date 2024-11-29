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

        // Check if passwords match
        if (password !== password2) {
            alert("Passwords do not match!");
            return;
        }

        // Store the username in localStorage (avoid storing passwords)
        localStorage.setItem("username", username);

        // Redirect to the index page
        window.location.href = "index.html";  // Redirect after form submission
    });
});
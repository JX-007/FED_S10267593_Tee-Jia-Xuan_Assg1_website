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
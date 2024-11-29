// Sample login credentials (for demonstration purposes)
const validUsername = "user"; // change to desired username
const validPassword = "pass"; // change to desired password

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the username and password match
    if (username === validUsername && password === validPassword) {
        // Correct credentials, redirect to home page
        window.location.href = "home.html"; // Change this to the correct home page URL
    } else {
        // Incorrect credentials, show error message
        errorMessage.textContent = "Invalid username or password! Please try again.";
    }
}
// register.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get user input from the registration form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Add more fields as needed

    // Perform registration logic here
    // You can use AJAX to send registration data to your server-side code
    // Example:
    // var formData = new FormData();
    // formData.append('username', username);
    // formData.append('password', password);
    // Perform AJAX request to your server to handle registration

    // After successful registration, you can redirect the user to the login page or any other page
    window.location.href = 'index.html'; // Redirect to the login page
});

// script.js

const form = document.getElementById('register-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Send data to server using AJAX or fetch API
    // For demonstration purposes, we'll just log the data to the console
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);

    // Reset form fields
    form.reset();
    errorMessage.textContent = '';
    window.location.href = "afterlogin.html";
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate credentials (for example purposes only, replace with real validation)
    if (email === 'test@example.com' && password === 'password123') {
        alert('Login successful!');
        // Redirect to another page or perform another action here
    } else {
        document.getElementById('error-message').textContent = 'Invalid email or password.';
    }
});

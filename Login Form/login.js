function validateForm() {
    // Get form elements
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    // Validate form
    let isValid = true;
    if (username === '') {
        usernameError.style.display = 'block';
        isValid = false;s
    }
    if (password === '') {
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form Submitted');
    }
}

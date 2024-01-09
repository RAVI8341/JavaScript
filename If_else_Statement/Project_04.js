function checkPasswordStrength(password) {
    const minLength = 8; // Minimum length required for a strong password
    const hasUpperCase = /[A-Z]/.test(password); // Checks if the password contains at least one uppercase letter
    const hasLowerCase = /[a-z]/.test(password); // Checks if the password contains at least one lowercase letter
    const hasNumbers = /\d/.test(password); // Checks if the password contains at least one digit
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password); // Checks if the password contains at least one special character

    let strength = 'Weak'; // Default strength of the password

    // Evaluate the password based on the defined criteria using if-else statements
    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
        strength = 'Strong'; // Password meets all criteria for a strong password
    } else if (password.length >= minLength && (hasLowerCase || hasUpperCase || hasNumbers)) {
        strength = 'Medium'; // Password meets some criteria but not all for a strong password
    }

    return strength; // Return the strength of the password
}

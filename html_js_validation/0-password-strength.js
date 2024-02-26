function validatePassword() {
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /\d/.test(password);
    var hasSpecialChars = /[!@#$%^&*]/.test(password);
    
    if (password.length < 8) {
        errorElement.textContent = "Password must be at least 8 characters long";
        return false;
    } else if (!hasUpperCase) {
        errorElement.textContent = "Password must contain at least one uppercase letter";
        return false;
    } else if (!hasLowerCase) {
        errorElement.textContent = "Password must contain at least one lowercase letter";
        return false;
    } else if (!hasNumbers) {
        errorElement.textContent = "Password must contain at least one numeric digit";
        return false;
    } else if (!hasSpecialChars) {
        errorElement.textContent = "Password must contain at least one special character (!@#$%^&*)";
        return false;
    }

    errorElement.textContent = "";
    return true;
}

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    if (!validatePassword()) {
        event.preventDefault(); 
    }
});

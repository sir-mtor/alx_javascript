function validateEmail() {
    var email = document.getElementById("email").value;
    var errorElement = document.getElementById("error");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }

    errorElement.textContent = "";
    return true;
}

document.getElementById("emailForm").addEventListener("submit", function(event) {
    if (!validateEmail()) {
        event.preventDefault(); 
    }
});

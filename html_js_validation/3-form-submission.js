function handleFormSubmit(event) {
    
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var errorElement = document.getElementById("error");
    
    if (name.trim() === "" || email.trim() === "") {
        errorElement.textContent = "Please fill in all required fields.";
        return;
    }
    
    errorElement.textContent = "Form submitted successfully!";
    
}

document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);

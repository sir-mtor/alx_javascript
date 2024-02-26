function generateInputFields() {
    var numFields = document.getElementById("numFields").value;
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; 
    
    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

document.getElementById("numFields").addEventListener("change", generateInputFields);

function validateForm(event) {
    var inputFields = document.querySelectorAll("#inputContainer input");
    var allFieldsFilled = true;
    
    inputFields.forEach(function(inputField) {
        if (inputField.value.trim() === "") {
            allFieldsFilled = false;
        }
    });
    
    if (!allFieldsFilled) {
        event.preventDefault();
        alert("Please fill in all fields.");
    }
}
document.getElementById("dynamicForm").addEventListener("submit", validateForm);

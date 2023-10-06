// Function to generate a dynamic number of text input fields
function generateInputFields(numFields) {
    // Clear the inputContainer div
    document.getElementById("inputContainer").innerHTML = "";
  
    // Create a loop to generate the specified number of text input fields
    for (var i = 0; i < numFields; i++) {
      // Create a new text input field
      var inputField = document.createElement("input");
      inputField.type = "text";
  
      // Set the name attribute of the text input field
      inputField.name = "field" + (i + 1);
  
      // Append the text input field to the inputContainer div
      document.getElementById("inputContainer").appendChild(inputField);
    }
  }
  
  // Function to validate the form
  function validateForm() {
    // Retrieve the values entered in the dynamically generated text input fields
    var fieldValues = [];
    for (var i = 0; i < document.getElementById("inputContainer").children.length; i++) {
      fieldValues.push(document.getElementById("inputContainer").children[i].value);
    }
  
    // Check if any of the fields are empty
    for (var i = 0; i < fieldValues.length; i++) {
      if (fieldValues[i] === "") {
        // Prevent the form submission and display the error message
        alert("Please fill in all fields.");
        return false;
      }
    }
  
    // If all fields are filled, allow the form submission
    return true;
  }
  
  // Add an event listener to the dropdown menu to call the generateInputFields() function when the selection changes
  document.getElementById("numFields").addEventListener("change", function() {
    // Get the selected value from the dropdown menu
    var numFields = document.getElementById("numFields").value;
  
    // Generate the specified number of text input fields
    generateInputFields(numFields);
  });
  
  // Add an event listener to the form element to listen for the “submit” event and call the validateForm() function
  document.getElementById("dynamicForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Validate the form
    var isValid = validateForm();
  
    // If the form is valid, submit the form
    if (isValid) {
      this.submit();
    }
  });
  
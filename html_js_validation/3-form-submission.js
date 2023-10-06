function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Retrieve the values entered in the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Perform JavaScript validation to ensure that all required fields are filled
    if (name === "" || email === "") {
      // Display the error message
      alert("Please fill in all required fields.");
      return;
    }
  
    // If all validations pass, display a success message
    alert("Form submitted successfully!");
  }
  
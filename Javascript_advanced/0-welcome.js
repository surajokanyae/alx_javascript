function welcome(firstName, lastName) {
    // Create a variable to store the full name.
    const fullName = `${firstName} ${lastName}`;
  
    // Define a function to display the full name.
    function displayFullName() {
      // Display an alert with the message "Welcome firstName lastName!".
      alert(`Welcome ${fullName}!`);
    }
  
    // Call the function to display the full name.
    displayFullName();
  }
  
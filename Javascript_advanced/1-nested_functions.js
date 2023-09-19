// Global variable
const globalVariable = "Welcome";

// Outer function
function outer() {
  // Alert the global variable
  alert(globalVariable);

  // Create a variable inside the outer function
  const course = "Holberton";

  // Inner function
  function inner() {
    // Alert the global variable and the course variable (concatenated)
    alert(`${globalVariable} ${course}`);

    // Create a variable inside the inner function
    const exclamation = "!";

    // Inception function
    function inception() {
      // Alert the global variable, the course variable, and the exclamation variable (concatenated)
      alert(`${globalVariable} ${course} ${exclamation}`);
    }

    // Call the inception function
    inception();
  }

  // Call the inner function
  inner();
}

// Call the outer function
outer();

// Compose the code:
// Write the inception function within inner
function inner() {
  // ...

  // Inception function
  function inception() {
    // Alert the global variable, the course variable, and the exclamation variable (concatenated)
    alert(`${globalVariable} ${course} ${exclamation}`);
  }

  // Call the inception function
  inception();
}

// Write the inner function within outer
function outer() {
  // ...

  // Inner function
  function inner() {
    // Alert the global variable and the course variable (concatenated)
    alert(`${globalVariable} ${course}`);

    // Create a variable inside the inner function
    const exclamation = "!";

    // Call the inception function
    inception();
  }

  // Call the inner function
  inner();
}

// Call the outer function in the main code (outside any function)
outer();

// Call the inner function within outer
outer.inner();

// Call the inception function within inner
outer.inner().inception();

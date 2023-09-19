function changeMode(size, weight, transform, background, color) {
    // Create a function to change the style of the page.
    function changeStyle() {
      // Get the body element.
      const bodyElement = document.querySelector("body");
  
      // Set the body element's style.
      bodyElement.style.fontSize = size + "px";
      bodyElement.style.fontWeight = weight;
      bodyElement.style.textTransform = transform;
      bodyElement.style.backgroundColor = background;
      bodyElement.style.color = color;
    }
  
    // Return the function to change the style of the page.
    return changeStyle;
  }
  function main() {
    // Create variables to store the different themes.
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  
    // Add a paragraph element to the body of the page with the text "Welcome Holberton!".
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = "Welcome Holberton!";
    document.querySelector("body").appendChild(paragraphElement);
  
    // Add button elements to the body of the page for each theme.
    const spookyButtonElement = document.createElement("button");
    spookyButtonElement.textContent = "Spooky";
    spookyButtonElement.addEventListener("click", spooky);
    document.querySelector("body").appendChild(spookyButtonElement);
  
    const darkModeButtonElement = document.createElement("button");
    darkModeButtonElement.textContent = "Dark mode";
    darkModeButtonElement.addEventListener("click", darkMode);
    document.querySelector("body").appendChild(darkModeButtonElement);
  
    const screamModeButtonElement = document.createElement("button");
    screamModeButtonElement.textContent = "Scream mode";
    screamModeButtonElement.addEventListener("click", screamMode);
    document.querySelector("body").appendChild(screamModeButtonElement);
  }
  main();
    
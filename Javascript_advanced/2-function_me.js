function welcomeMessage(fullName) {
    function alert() {
      window.alert(`Welcome ${fullName}`);
    }
  
    return alert;
  }
  
  const guillaume = welcomeMessage("Guillaume");
  const alex = welcomeMessage("Alex");
  const fred = welcomeMessage("Fred");
  
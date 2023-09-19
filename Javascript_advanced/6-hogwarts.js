const studentHogwarts = (function() {
    // Private variables
    let privateScore = 0;
    let name = null;
  
    // Private method
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    // Public methods
    function setName(newName) {
      name = newName;
    }
  
    function rewardStudent() {
      changeScoreBy(1);
    }
  
    function penalizeStudent() {
      changeScoreBy(-1);
    }
  
    function getScore() {
      return `${name}: ${privateScore}`;
    }
  
    // Return the public methods
    return {
      setName,
      rewardStudent,
      penalizeStudent,
      getScore,
    };
  })();
  
  // Create instances of the studentHogwarts module
  const harry = studentHogwarts();
  const draco = studentHogwarts();
  
  // Set the names of the students
  harry.setName("Harry");
  draco.setName("Draco");
  
  // Reward Harry four times
  for (let i = 0; i < 4; i++) {
    harry.rewardStudent();
  }
  
  // Reward Draco once
  draco.rewardStudent();
  
  // Penalize Draco three times
  for (let i = 0; i < 3; i++) {
    draco.penalizeStudent();
  }
  
  // Log the name and score of each student
  console.log(harry.getScore()); // "Harry: 4"
  console.log(draco.getScore()); // "Draco: -2"
  
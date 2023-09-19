function createClassRoom(numberOfStudents) {
    // Function to get a student seat number.
    function studentSeat(seat) {
      // Returns a function that returns the seat number.
      return function() {
        return seat;
      };
    }
  
    // Create and populate a variable to store the student seat numbers.
    const students = [];
    for (let i = 0; i < numberOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    // Return the array of student seat numbers.
    return students;
  }
  
  // Create a closure for a classroom with 10 students.
  const classRoom = createClassRoom(10);
  
#!/usr/bin/node
class Rectangle {
    constructor (w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
  
    // Method to print the rectangle using 'X'
    print () {
      let row = '';
      let i = 0;
      for (i = 0; i < this.width; i++) {
        row += 'X';
      }
      for (i = 0; i < this.height; i++) {
        console.log(row);
      }
    }

    rotate(){
      let temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
    double(){
        this.width *= 2;
        this.height *= 2;
    }
    
  }
  module.exports = Rectangle;
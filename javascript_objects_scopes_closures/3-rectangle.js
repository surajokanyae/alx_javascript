#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
   

  print() {
    let row = '';
    let i = 0;
    for (let i = 0; i < this.height; i++) {
        row += 'X';
    }
      for (let i = 0; i < this.width; i++) {
        console.log(row);
      }
    }
}
  module.exports = Rectangle;
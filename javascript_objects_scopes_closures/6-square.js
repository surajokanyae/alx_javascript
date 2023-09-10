#!/usr/bin/node
const newSquare = require('./5-square');
class Square extends newSquare {
  charPrint (c = 'X') {
    let row = '';
    let i = 0;
    for (i = 0; i < this.width; i++) {
      row += c;
    }
    for (i = 0; i < this.height; i++) {
      console.log(row);
    }
  }
}
module.exports = Square;
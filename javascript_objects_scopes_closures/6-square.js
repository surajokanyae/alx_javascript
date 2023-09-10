#!/usr/bin/node
const Square = require('./5-square');
class Square extends Square {
  constructor (size) {
    super(size, size);
  }
  charPrint(c = 'X'){
    let row = '';
    let i = 0;
for(i = 0; i < this.width; i++){
    row += c;
}
for(i = 0; i < this.heigh; i++){
    console.log(row);
}

  }
}
module.exports = Square;
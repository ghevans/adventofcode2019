const fs = require('fs');

let parsed = fs.readFileSync('./input.txt').toString().split("\n");

module.exports = parsed;
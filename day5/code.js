const _ = require('lodash');
const computer = require('../computer');
const program = require('./input');
// const program = "3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9".split(',').map(n => Number(n));

function part1() {
    return computer(_.clone(program),1);
}

function part2() {
    return computer(_.clone(program),5);
}

console.log("Part 1 - " + part1());
console.log("Part 2 - " + part2());
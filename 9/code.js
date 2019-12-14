const _ = require('lodash');
const computer = require('../computer')
const program = require('./input');

const test = [109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99];
const test2 = [1102,34915192,34915192,7,4,7,99,0];
const test3 = [104,1125899906842624,99];

function* inputGen(start) {
    while(true) {
        yield start;
    }
}

function runTest(val) {
    const boost = computer(program, inputGen(val));
    for(let value of boost) {
        console.log(value);
    }
}


console.log("Part 1 - " + runTest(1));
// console.log("Part 2 - " + runTest(2));
const _ = require('lodash');
const computer = require('../computer');
const input = require('./input');

const test = "3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0".split(',').map(Number);
const test2 = "3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0".split(',').map(Number);

function part1(program) {
    let numAmps = 5;
    let output = { max: Number.MIN_SAFE_INTEGER, phase: ""};

    let input = 0;
    let min = "01234", max = "43210";
    let phase = "01234";
    // iterate here through possible phase values...but how???
    for(let i = Number(min); i <= (max); i++) {
        let phase = i.toString().padStart(5, '0');
        if (valid(phase)) {
            let input = 0;
            for (let j = 0; j < numAmps; j++) {
                input = computer(_.cloneDeep(program), Number(phase[j]), input);
            }
            output = (input > output.max) ? { max: input, phase: phase } : output;
        }
    }
    return `${JSON.stringify(output)}`;
}

function valid(num) {
    return (num.split('').sort().join('') === '01234');
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
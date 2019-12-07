const _ = require('lodash');
const computer = require('../computer');
const input = require('./input');

function part1(program) {
    let numAmps = 5;
    let input = 0;
    for (let i = 0; i < numAmps; i++) {
        input = computer(_.cloneDeep(program), input);
        console.log("input: " + input);
    }

    return "tbd";
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
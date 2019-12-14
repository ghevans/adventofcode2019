const _ = require('lodash');
const input = require('./input');

const END = 99;
const ADD = 1;
const MULT = 2;

function day2_part1(input, noun, verb) {
    input[1] = noun;
    input[2] = verb;

    let loc = 0;
    while (input[loc] != END) {
        handleIntCode(input, loc);
        loc += 4;
    }
    return input[0];
}

function handleIntCode(program, start) {
    let opCode = program[start];
    let left = program[start+1];
    let right = program[start+2];
    let dest = program[start+3];
    switch(opCode) {
        case ADD:
            program[dest] = program[left] + program[right];
            break;
        case MULT:
            program[dest] = program[left] * program[right];
            break;
    }
}

function day2_part2(input) {
    for(let n = 0; n < 100; n++) {
        for (let v = 0; v < 100; v++) {
            if (day2_part1(_.cloneDeep(input), n, v) == 19690720) {
                return (100 * n + v);
            }
        }
    }
}

console.log("Part 1 - " + day2_part1(_.cloneDeep(input), 12, 2));
console.log("Part 2 - " + day2_part2(input));
const _ = require('lodash');
const program = require('./input');
// const program = ['1002','4','3','4','33'];

const END = 99;
const ADD = 1;
const MULT = 2;
const IN = 3;
const OUT = 4;

const POSITION = 0;
const IMMEDIATE = 1;

function determineVal(mode, loc) {
    switch (mode) { 
        case POSITION:
            return program[program[loc]];
        case IMMEDIATE:
            return program[loc];
        default:
            console.log("Unknown mode: " + mode);
    } 
}

function part1() {
    let loc = 0, output = 0;
    while (program[loc] != END) {
        let inst = program[loc].toString().padStart(5, '0'); // always pad for safety, even if no use
        let opCode = Number(inst.slice(3));
        let left = determineVal(Number(inst[2]), loc + 1);
        let right = determineVal(Number(inst[1]), loc + 2);
        let dest = program[loc+3];
        switch (opCode) {
            case ADD:
                console.log("ADD | " + left + " + " + right + " = " + (left + right));
                console.log("dest: " + dest);
                program[dest] = left + right;
                loc += 4;
                break;
            case MULT:
                console.log("dest: " + dest);
                console.log("Value: " + (left * right));
                program[dest] = left * right;
                loc += 4;
                break;
            case IN:
                console.log("dest: " + program[loc+1]);
                console.log("Value: 1");
                program[program[loc+1]] = 1; // hardcoded, doesn't feel right???
                loc += 2;
                break;
            case OUT:
                output = determineVal(Number(inst[2]), loc+1);
                console.log("OUTPUT: " + output);
                loc += 2;
                break;
            default:
                console.log("ERROR: " + opCode);
                return;
        }
    }

    return output;
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1());
// console.log("Part 2 - " + part2(input));
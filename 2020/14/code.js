const _ = require('lodash');
const input = require('./input');

function part1(program) {
    let mem = {};
    let currentMask = '';

    for (ins of program) {
        if(ins[0] === 'mask') {
            currentMask = ins[1];
        } else {
            let bitVal = Number(ins[1]).toString(2).padStart(36, '0')
            mem[ins[0].match(/\d+/)] = applyMask(currentMask, bitVal);
        }
    }
    return Object.values(mem).reduce((a,b) => a + b);
}

function applyMask(mask, val) {
    let out = '';
    for(let i = 0; i < mask.length; i++) {
        out += (mask[i] === 'X') ? val[i] : mask[i];
    }
    return parseInt(out,2);
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
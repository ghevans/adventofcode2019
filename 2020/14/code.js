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

function part2(program) {
    let mem = {};
    let currentMask = '';

    for (ins of program) {
        if(ins[0] === 'mask') {
            currentMask = ins[1];
        } else {
            let bitVal = Number(ins[0].match(/\d+/)).toString(2).padStart(36, '0')

            applyMask2(currentMask, bitVal).forEach(loc => mem[loc] = Number(ins[1]))
        }
    }
    return Object.values(mem).reduce((a,b) => a + b);
}

function applyMask2(mask, val) {
    let masked = '';
    for(let i = 0; i < mask.length; i++) {
        masked += (mask[i] === '0') ? val[i] : mask[i];
    }

    return buildOptions(masked).map(opt => parseInt(opt, 2));
}

function buildOptions(bits) {
    let options = [''];
    bits.split('').forEach(bit => {
        let toBeAdded = [];
        for(let j = 0; j < options.length; j++) {
            if(bit === 'X') {                     
                toBeAdded.push(options[j]+'1')
            }
            options[j] += (bit === 'X') ? '0' : bit;
        }

        if(toBeAdded.length > 0) {options.push.apply(options, toBeAdded)};
    });

    return options;
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
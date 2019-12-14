const _ = require('lodash');
const computer = require('../computer');
const program = require('./input');

const test = "3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0".split(',').map(Number);
const test2 = "3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0".split(',').map(Number);
const test3 = "3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5".split(',').map(Number);

function part1(program) {
    let numAmps = 5;
    let output = { max: Number.MIN_SAFE_INTEGER, phase: ""};

    let min = "01234", max = "43210";
    for(let i = Number(min); i <= (max); i++) {
        let phase = i.toString().padStart(5, '0');
        if (valid(phase, min)) {
            let input = 0;
            for (let j = 0; j < numAmps; j++) {
                input = computer(_.cloneDeep(program), Number(phase[j]), input);
            }
            output = (input > output.max) ? { max: input, phase: phase } : output;
        }
    }
    return `${JSON.stringify(output)}`;
}

function valid(num, expected) {
    return (num.split('').sort().join('') === expected);
}

// ====== PART 2 ==========

let inputVal;
function* startInputGenerator(phase) {
    yield phase;
    while (true) {
        yield inputVal;
    }
}

function* inputGenerator(phase, previousAmp) {
    yield phase;
    while (true) {
        yield previousAmp.next().value;
    }
}

function part2(program) {
    let maxAmps = 0;

    let min = "56789", max = "98765";
    for(let i = Number(min); i <= (max); i++) {
        let phase = i.toString().padStart(5, '0');
        if (valid(phase, min)) {
            let output = checkPhase(program, phase);
            maxAmps = (maxAmps < output) ? output : maxAmps;
        }
    }

    return maxAmps;
}

function checkPhase(program, phase) {
    inputVal = 0;
    let lastAmp;

    let phases = phase.split('').map(Number);
    for (let i = 0; i < phases.length; i++) {
        const inputForAmp =  (i === 0) ? startInputGenerator(phases[i]) : inputGenerator(phases[i], lastAmp);
        lastAmp = computer(program, inputForAmp);
    }

    for(let value of lastAmp) {
        inputVal = value;
    }

    return inputVal;
}

console.log("Part 1 - " + part1(program));
console.log("Part 2 - " + part2(program));
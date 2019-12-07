const _ = require('lodash');
const computer = require('../computer');
const input = require('./input');

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

function part2(program) {
    let numAmps = 5;
    // let output = { max: Number.MIN_SAFE_INTEGER, phase: ""};


    let amps = [ _.clone(program), _.clone(program), _.clone(program), _.clone(program), _.clone(program)];
  

    // this is the inital loop
    let val = "98765";
    console.log(`${amps[0]}`);

    let output = computer(amps[0], Number(val[0]), 0);
    let lastOutput = output;
        for(let i = 1; i < amps.length; i++) {
            output = computer(amps[i], Number(val[i]), output);
            console.log(`output => ${output}`);
        }

    // forever loop
    while (true) {
        for(let i = 0; i < amps.length; i++) {
            console.log(`${amps[i]}\n${output}`);
            output = computer(amps[i], output, output);
            console.log(`output => ${output}`);
        }
        if (lastOutput < output) {
            lastOutput = output;
        } else {
            return lastOutput;
        }
    }


    // console.log(amps);
    // let min = "56789", max = "98765";
    // for(let i = Number(min); i <= (max); i++) {
    //     let phase = i.toString();
    //     if (valid(phase, min)) {
    //         let input = 0;
            // for (let j = 0; j < numAmps; j++) {
            //     input = computer(, Number(phase[j]), input);
            // }
            // output = (input > output.max) ? { max: input, phase: phase } : output;
    //     }
    // }
    // return `${JSON.stringify(output)}`;
}

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(test3));
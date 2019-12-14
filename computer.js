const END = 99;
const ADD = 1;
const MULT = 2;
const IN = 3;
const OUT = 4;
const JIT = 5;
const JIF = 6;
const LT = 7;
const EQ = 8;
const RBO = 9;

const POSITION = 0;
const IMMEDIATE = 1;
const RELATIVE = 2;
function determineVal(program, mode, loc, offset) {
    switch (mode) { 
        case POSITION:
            while (program[program[loc]] === undefined) {
                program.push(0);
            }
            return program[program[loc]]
        case IMMEDIATE:
            return program[loc];
        case RELATIVE:
            while (program[program[loc]+offset] === undefined) {
                program.push(0);
            }
            return program[program[loc]+offset];
        default:
            console.log("Unknown mode: " + mode);
    } 
}

function getInst(program, loc) {
    const inst = program[loc].toString().padStart(5, '0');
    return {
        opCode: Number(inst.slice(3)),
        modes: [
            Number(inst[2]),
            Number(inst[1]),
            Number(inst[0])
        ]
    }
}

function getVal(program, loc, mode, offset) {
    switch (mode) { 
        case POSITION:
            while (program[program[loc]] === undefined) {
                program.push(0);
            }
            return program[program[loc]]
        case IMMEDIATE:
            return program[loc];
        case RELATIVE:
            while (program[program[loc]+offset] === undefined) {
                program.push(0);
            }
            return program[program[loc]+offset];
        default:
            console.log("Unknown mode: " + mode);
    }
}

function putVal(program, loc, mode, offset, value) {
    switch (mode) { 
        case POSITION:
            program[program[loc]] = value;
            return;
        case RELATIVE:
            program[program[loc]+offset] = value;
            return;
        default:
            console.log("Unknown mode: " + mode);
    }
}

// console.log(getInst([203],0))

function* runProgram(program, input) {
    let loc = 0, output = 0, offset = 0;
    while (program[loc] != END) {
        let inst = getInst(program, loc);

        let left = getVal(program, loc+1, inst.modes[0], offset);
        let right = getVal(program, loc+2, inst.modes[1], offset);

        let dest = program[loc+3];
        switch (inst.opCode) {
            case ADD:
                putVal(program, loc+3, inst.modes[2], offset, (left + right));
                loc += 4;
                break;
            case MULT:
                putVal(program, loc+3, inst.modes[2], offset, (left * right));
                loc += 4;
                break;
            case IN:
                switch(inst.modes[0]) {
                    case POSITION:
                        program[program[loc+1]] = input.next().value;
                        break;
                    case RELATIVE:
                        program[program[loc+1] + offset] = input.next().value;
                        break;
                }
                // putVal(program, loc+1, inst.modes[0], offset, input.next.value);
                loc += 2;
                break;
            case OUT:
                yield determineVal(program, inst.modes[0], loc+1, offset);
                loc += 2;
                break;
            case JIT:
                loc = (left !== 0) ? right : loc + 3;
                break;
            case JIF:
                loc = (left === 0) ? right : loc + 3;
                break;
            case LT:
                putVal(program, loc+3, inst.modes[2],offset, (left < right) ? 1 : 0);
                loc += 4;
                break;
            case EQ:
                putVal(program, loc+3, inst.modes[2],offset, (left === right) ? 1 : 0);
                loc += 4;
                break;
            case RBO:
                offset += left;
                loc += 2;
                break;
            default:
                console.log("ERROR: " + opCode);
                return;
        }
    }

    return output;
}

module.exports = runProgram; 
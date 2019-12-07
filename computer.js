const END = 99;
const ADD = 1;
const MULT = 2;
const IN = 3;
const OUT = 4;
const JIT = 5;
const JIF = 6;
const LT = 7;
const EQ = 8;

const POSITION = 0;
const IMMEDIATE = 1;
function determineVal(program, mode, loc) {
    switch (mode) { 
        case POSITION:
            return program[program[loc]];
        case IMMEDIATE:
            return program[loc];
        default:
            console.log("Unknown mode: " + mode);
    } 
}

function runProgram(program, phase, input) {
    let loc = 0, output = 0, firstInput = true;
    while (program[loc] != END) {
        let inst = program[loc].toString().padStart(5, '0');
        let opCode = Number(inst.slice(3));
        let left = determineVal(program, Number(inst[2]), loc + 1);
        let right = determineVal(program, Number(inst[1]), loc + 2);
        let dest = program[loc+3];
        switch (opCode) {
            case ADD:
                program[dest] = left + right;
                loc += 4;
                break;
            case MULT:
                program[dest] = left * right;
                loc += 4;
                break;
            case IN:
                program[program[loc+1]] = (firstInput) ? phase : input;
                firstInput = false;
                loc += 2;
                break;
            case OUT:
                output = determineVal(program, Number(inst[2]), loc+1);
                loc += 2;
                break;
            case JIT:
                loc = (left !== 0) ? right : loc + 3;
                break;
            case JIF:
                loc = (left === 0) ? right : loc + 3;
                break;
            case LT:
                program[dest] = (left < right) ? 1 : 0;
                loc += 4;
                break;
            case EQ:
                program[dest] = (left === right) ? 1 : 0;
                loc += 4;
                break;
            default:
                console.log("ERROR: " + opCode);
                return;
        }
    }

    return output;
}

module.exports = runProgram; 
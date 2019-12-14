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

// function getInst(program, loc) {
//     const inst = program[loc].toString().padStart(5, '0');
//     return {
//         opCode: Number(inst.slice(3)),
//         modes: [
//             Number(inst[2]),
//             Number(inst[1]),
//             Number(inst[0])
//         ]
//     }
// }

// function getVal(program, loc, mode, offset) {
//     switch (mode) { 
//         case POSITION:
//             while (program[program[loc]] === undefined) {
//                 program.push(0);
//             }
//             return program[program[loc]]
//         case IMMEDIATE:
//             return program[loc];
//         case RELATIVE:
//             while (program[program[loc]+offset] === undefined) {
//                 program.push(0);
//             }
//             return program[program[loc]+offset];
//         default:
//             console.log("Unknown mode: " + mode);
//     }
// }

// function putVal(program, loc, mode, offset, value) {

// }

// console.log(getInst([203],0))

function* runProgram(program, input) {
    let loc = 0, output = 0, offset = 0;
    while (program[loc] != END) {
        // let inst = getInst(program, loc);


        let inst = program[loc].toString().padStart(5, '0');
        let opCode = Number(inst.slice(3));
        let left = determineVal(program, Number(inst[2]), loc + 1, offset);
        let right = determineVal(program, Number(inst[1]), loc + 2, offset);
        let dest = program[loc+3];
        switch (opCode) {
            case ADD:
                // let l = getVal(program, loc+1, inst.modes[0], offset);
                // let r = getVal(program, loc+2, inst.modes[1], offset);
                // putVal(program, loc+3, inst.modes[2], offset, (l + r));
                program[dest] = left + right;
                loc += 4;
                break;
            case MULT:
                program[dest] = left * right;
                loc += 4;
                break;
            case IN:
                switch(Number(inst[2])) {
                    case POSITION:
                        program[program[loc+1]] = input.next().value;
                        break;
                    case RELATIVE:
                        program[program[loc+1] + offset] = input.next().value;
                        break;
                }
                loc += 2;
                break;
            case OUT:
                yield determineVal(program, Number(inst[2]), loc+1, offset);
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
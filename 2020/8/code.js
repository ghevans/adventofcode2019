const _ = require('lodash');
const input = require('./input');

function part1(program) {
    let visited = [];
    let acc = 0;
    let nextOp = program[0];

    while (!visited.includes(nextOp.id)) {
        visited.push(nextOp.id);

        switch(nextOp.op) {
            case 'nop':
                nextOp = program[nextOp.id + 1];
                break;
            case 'acc':
                acc += nextOp.arg;
                nextOp = program[nextOp.id + 1];
                break;
            case 'jmp':
                nextOp = program[nextOp.id + nextOp.arg];
                break;
        }
    }
    return {acc, visited};
}

function part2(program, visited) {
    const options = findOptions(program, visited);
    
    for(option of options) {
        let acc = 0, curVisited = [];
        let curProgram = _.cloneDeep(program);
        curProgram[option].op = (curProgram[option].op === 'nop') ? 'jmp' : 'nop';

        let nextOp = curProgram[0];
        while (nextOp !== undefined && !curVisited.includes(nextOp.id)) {
            curVisited.push(nextOp.id);

            switch(nextOp.op) {
                case 'nop':
                    nextOp = curProgram[nextOp.id + 1];
                    break;
                case 'acc':
                    acc += nextOp.arg;
                    nextOp = curProgram[nextOp.id + 1];
                    break;
                case 'jmp':
                    nextOp = curProgram[nextOp.id + nextOp.arg];
                    break;
            }
        }

        if (nextOp === undefined) {
            return acc;
        }
    }    
}

function findOptions(program, visited){ 
    let options = [];
    for(id of visited) {
        if (['nop','jmp'].includes(program[id].op)) {
            options.push(id);
        }
    }
    return options;
}

let {acc, visited} = part1(input);
console.log("Part 1 - " + acc);
console.log("Part 2 - " + part2(input, visited));
const _ = require('lodash');
const computer = require('../computer');
const program = require('./input');

const directions = {
    N: 1,
    S: 2,
    W: 3,
    E: 4
};

const events = {
    WALL: 0,
    SAFE: 1,
    OXY: 2
};

function* inputGen() {
    while (true) {
        yield E;
        yield N;
        yield W;
        yield S;
    }
}

function backup(lastDirection) {
    switch (lastDirection) {
        case N:
            return S;
        case S:
            return N;
        case W:
            return E;
        case E:
            return W;
    }
}

function part1(input) {
    const robot = computer(program, inputGen());
    let output = 0;
    while (output !== OXY) {
        output = robot.next().value;
        console.log(output);
        switch (output) {
            case WALL:
                break;
            case SAFE:
                break;
            case OXY:
                console.log('oxy');
                break;
        }
    }
    return "tbd";
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1());
// console.log("Part 2 - " + part2());
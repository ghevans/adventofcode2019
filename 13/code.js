const _ = require('lodash');
const colors = require('colors');
const computer = require('../computer');
const program = require('./input');

let EMPTY   = 0;
let WALL    = 1;
let BLOCK   = 2;
let PADDLE  = 3;
let BALL    = 4;

let screen = new Map();

function* inputGen() {
    while(true) {
        yield 1;
    }
}
function part1() {
    let game = computer(program, inputGen);

    
    let done = false;
    let blockCount = 0;
    while(!done) {
        let left = game.next().value;
        let down = game.next().value;
        let type = game.next();

        if (!type.done) {
            // console.log(`${left} | ${down} | ${type.value}`)
            if (type.value === BLOCK) {
                blockCount++;
            }
            screen.set(`${left},${down}`, type.value);
        }
        done = type.done;
    }
    // console.log(screen);
    console.log(print());

    return blockCount;
}

function getElement(type) {
    switch(type) {
        case EMPTY:
            return ' '.bgBlack;
        case WALL:
            return ' '.bgWhite;
        case BLOCK:
            return ' '.bgGreen;
        case PADDLE:
            return ' '.bgBlue;
        case BALL:
            return ' '.bgYellow;
    }
}

function print() {
    let out = "";
    for(let y = 0; y <= 22; y++) {
        let row = "";
        for(let x = 0; x <= 41; x++) {
            row += getElement(screen.get(`${x},${y}`));
        }
        out += row + '\n'
    }
    return out;
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1());
// console.log("Part 2 - " + part2(input));
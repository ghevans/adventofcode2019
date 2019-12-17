const _ = require('lodash');
const colors = require('colors');
const computer = require('../computer');
const program = require('./input');
const {promisify} = require('util');
const sleep = promisify(setTimeout);

let EMPTY   = 0;
let WALL    = 1;
let BLOCK   = 2;
let PADDLE  = 3;
let BALL    = 4;

let screen = new Map();

function part1() {
    let game = computer(program, inputGen);
    let blockCount = 0;
    let done = false;
    while(!done) {
        let left = game.next().value;
        let down = game.next().value;
        let type = game.next();

        if (!type.done) {
            screen.set(`${left},${down}`, type.value);
            switch (type.value) {
                case BLOCK: 
                    blockCount++;
                    break;
            }
        }
        done = type.done;
    }
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
            return '●'.yellow;
    }
}

function print(score) {
    let out = "";
    for(let y = 0; y <= 22; y++) {
        let row = "";
        for(let x = 0; x <= 41; x++) {
            row += getElement(screen.get(`${x},${y}`));
        }
        out += row + '\n'
    }
    out += `SCORE: ${score}`.padEnd(42, ' ').green.bgWhite;
    return out;
}


let ballX = 0, paddleX = 0;
function* inputGen() {
    while(true) {
        yield (ballX > paddleX) ? 1 : (ballX === paddleX) ? 0 : -1;
    }
}

function part2() {
    program[0] = 2;

    let game = computer(program, inputGen());

    let done = false;
    let score = 0;
    // let t = sleep(100);
    while(!done) {
        let x = game.next().value;
        let y = game.next().value;
        let type = game.next();
        if (x === -1 && y === 0) {
            score = type.value;
        }

        if (!type.done) {
            screen.set(`${x},${y}`, type.value);
            switch (type.value) {
                case BALL:
                    ballX = x;
                    // await t;
                    // t=sleep(100);
                    // console.log(print(score));
                    break;
                case PADDLE:
                    paddleX = x;
                    break;
            }
        }
        
        done = type.done;
    }
    return score;

}

console.log("Part 1 - " + part1());
console.log("Part 2 - " + part2());
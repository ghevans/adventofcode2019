const _ = require('lodash');
const input = require('./input');
const computer = require('../computer');

let ship = [];
let currentX = 0;
let currentY = 0;

const black = 0;
const white = 1;
const up = 'U';
const down = 'D';
const left = 'L';
const right = 'R';

let direction = up;
function* inputGen(start) {
    yield start;

    while(true) {

        yield ship[x][y] || 0;
    }
}

function part1(program) {
    let robot = computer(program, inputGen(0));

    // need to run computer twice to get both outputs, then change the input;

    // initilize robot at 0,0 with 0 input
    // run 
    // get output (color to paint)
    // get output (direction to turn)


    let output = robot.next();
    while(!output.done) {
        console.log(output.value);
        output = robot.next();
    }

    return "tbd";
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
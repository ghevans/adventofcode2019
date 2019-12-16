const _ = require('lodash');
const input = require('./input');
const computer = require('../computer');


const black = 0;
const white = 1;
const UP    = 'U';
const DOWN  = 'D';
const LEFT  = 'L';
const RIGHT = 'R';

let ship = {};
let currentX = 0;
let currentY = 0;
let currentDir = UP;

function* inputGen(start) {
    while(true) {
        yield ship[`${currentX},${currentY}`] || black;
    }
}

function turnRobot(direction) {
    switch (currentDir) {
        case UP:
            return (direction) ? LEFT : RIGHT;
        case DOWN:
            return (direction) ? RIGHT : LEFT;
        case LEFT:
            return (direction) ? DOWN : UP;
        case RIGHT:
            return (direction) ? UP : DOWN;
    }
}

function moveRobot() {
    switch(currentDir) {
        case UP:
            currentY += 1;
            break;
        case DOWN:
            currentY -= 1;
            break;
        case LEFT:
            currentX -= 1;
            break;
        case RIGHT:
            currentX += 1;
            break;
    }
}

function part1(program) {
    let robot = computer(program, inputGen(0));

    // need to run computer twice to get both outputs, then change the input;

    // initilize robot at 0,0 with 0 input
    // run 
    // get output (color to paint)
    // get output (direction to turn)
    let done = false;
    while(!done) {
        let color = robot.next();
        let movement = robot.next();
        // console.log(`panel is color ${color.value} and moving ${movement.value}`);
        ship[`${currentX},${currentY}`] = color.value;

        // console.log('robot turned from ' + currentDir);
        currentDir = turnRobot(movement.value);
        // console.log('to ' + currentDir);

        moveRobot();
        // console.log(`now located at ${currentX},${currentY}`);

        done = movement.done;
    }

    console.log(ship);

    return "tbd";
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
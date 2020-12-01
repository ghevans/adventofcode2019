const _ = require('lodash');
const input = require('./input');
const computer = require('../computer');

const black = 0;
const white = 1;
const UP    = 'U';
const DOWN  = 'D';
const LEFT  = 'L';
const RIGHT = 'R';

let ship = new Map();
let currentX = 0;
let currentY = 0;
let currentDir = UP;

function* inputGen() {
    while(true) {
        yield ship.get(`${currentX},${currentY}`) || black;
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
            currentY -= 1;
            break;
        case DOWN:
            currentY += 1;
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
    let robot = computer(program, inputGen());
    
    let done = false;
    while(!done) {
        let color = robot.next();
        let movement = robot.next();

        ship.set(`${currentX},${currentY}`, color.value);
        currentDir = turnRobot(movement.value);
        moveRobot();

        done = movement.done;
    }

    return ship;
}

function part2(input) {
    ship.clear();
    ship.set('0,0', 1); // initialize
    part1(input);
    
    return print(ship);
}

function print(ship) {
    let out = "";
    for(let y = 0; y <= 5; y++) {
        let row = "";
        for(let x = 0; x >= -41; x--) {
            row += (ship.get(`${x},${y}`) && ship.get(`${x},${y}`) === white) ? '█' : ' ';
        }
        out += row + '\n'
    }
    return out;
}

// console.log("Part 1 - " + part1(input).size);
console.log("Part 2 - \n" + part2(input));
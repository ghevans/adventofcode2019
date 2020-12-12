const _ = require('lodash');
const input = require('./input');

function part1(instructions) {
    let pos = { x: 0, y: 0, dir: 0 }

    for (ins of instructions) {
        switch (ins.type) {
            case 'N':
                pos.y += ins.val;
                break;
            case 'S':
                pos.y -= ins.val;
                break;
            case 'E':
                pos.x += ins.val;
                break;
            case 'W':
                pos.x -= ins.val;
                break;
            case 'L':
                pos.dir = (pos.dir + ins.val) % 360;
                break;
            case 'R':
                pos.dir = (pos.dir - ins.val) % 360;
                break;
            case 'F':
                switch(pos.dir) {
                    case 0:
                        pos.x += ins.val;
                        break;
                    case 90:
                    case -270:
                        pos.y += ins.val;
                        break;
                    case 180:
                    case -180:
                        pos.x -= ins.val;
                        break;
                    case 270:
                    case -90:
                        pos.y -= ins.val;
                        break;
                }
                break;
        }
    }
    return Math.abs(pos.x) + Math.abs(pos.y);
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
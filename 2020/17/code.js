const _ = require('lodash');
const input = require('./input');

function part1(active) {
    // only keep track of currently active cell locs
    // each loop:
    //      build a list of all possible cells that touch ANY of the currently active cells
    //      eval each option based on the rules
    // return list.length()
    for (let cycle = 0; cycle < 6; cycle++) {
        let possible = [];
        for (cell of active) {
            possible = possible.concat(buildPossibleCells(cell));
            possible = _.uniqWith(possible, _.isEqual);
        }

        for (poss of possible) {
            let test = active.filter(a => a.x === poss.x && a.y === poss.y && a.z === poss.z)[0];
            poss.state = (test != undefined) ? '#' : '.';
        }
        
        active = evaluatePossibilities(possible, active);
    }
    return active.length;
}

function evaluatePossibilities(possible, active) {
    let out = [];

    for (poss of possible) {
        let numActive = 0;
        for(let z = poss.z-1; z <= poss.z+1; z++) {
            for (let y = poss.y-1; y <= poss.y+1; y++) {
                for (let x = poss.x-1; x <= poss.x+1; x++) {
                    numActive += (active.filter(a => a.x === x && a.y === y && a.z === z)[0]) ? 1 : 0;
                }
            }
        }
        // If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive.
        // If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.
        switch(poss.state) {
            case '#':
                if (numActive === 3 || numActive == 4) { // have to increase it to 3/4 bc we're counting ourself if we were previously active
                    out.push(poss)
                }
                break;
            case '.':
                if (numActive === 3) {
                    poss.state = '#'
                    out.push(poss);
                };
                break;
        }
    }
    return out;
}

function buildPossibleCells(cell) {
    let out = [];
    for(let z = cell.z-1; z <= cell.z+1; z++) {
        for (let y = cell.y-1; y <= cell.y+1; y++) {
            for (let x = cell.x-1; x <= cell.x+1; x++) {
                out.push({x: x, y: y, z: z});
            }
        }
    }
    return out;
}

function print(active) {
    let out = '';
    let minX = _.minBy(active,'x').x;
    let maxX = _.maxBy(active,'x').x;
    let minY = _.minBy(active,'y').y;
    let maxY = _.maxBy(active,'y').y;
    let minZ = _.minBy(active,'z').z;
    let maxZ = _.maxBy(active,'z').z;
    for(let z = minZ; z <= maxZ; z++) {
        out += `z=${z}\n`;
        for(let y = minY; y <= maxY; y++) {
            let row = '';
            for(let x = minX; x <= maxX; x++) {
                row += (active.filter(a => a.x === x && a.y === y && a.z === z)[0]) ? '# ' : '. ';
            }
            out += row+'\n'
        }
        out += '\n'
    }
    console.log(out);
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
const _ = require('lodash');
const input = require('./input');

function part1(active) {
    let cube = new Map();
    for (a of active) {
        cube.set(`${a.x},${a.y},${a.z}`, '#')
    }
    for (let cycle = 0; cycle < 6; cycle++) {
        let possibleSet = new Set();
        for (cell of cube.keys()) {
            build3d(cell, possibleSet);
        }
        cube = evaluate3d(possibleSet, cube);
    }
    
    return cube.size;
}

function build3d(cell, possibleSet) {
    let parts = cell.split(',').map(Number);
    for(let z = parts[2]-1; z <= parts[2]+1; z++) {
        for (let y = parts[1]-1; y <= parts[1]+1; y++) {
            for (let x = parts[0]-1; x <= parts[0]+1; x++) {
                possibleSet.add(`${x},${y},${z}`)
            }
        }
    }
}

function evaluate3d(possible, hypercube) {
    let out = new Map();

    for (poss of possible) {
        let numActive = 0;
        let parts = poss.split(',').map(Number);
        for(let z = parts[2]-1; z <= parts[2]+1; z++) {
            for (let y = parts[1]-1; y <= parts[1]+1; y++) {
                for (let x = parts[0]-1; x <= parts[0]+1; x++) {
                    numActive += (hypercube.has(`${x},${y},${z}`)) ? 1 : 0;
                }
            }
        }

        if (hypercube.has(poss) && ((numActive === 3 || numActive == 4))) { // have to increase it to 3/4 bc we're counting ourself if we were previously active
            out.set(poss, '#');
        } else if (numActive === 3) {
            out.set(poss, '#')
        }
    }
    return out;
}

function part2(active) {
    let hypercube = new Map();
    for (a of active) {
        hypercube.set(`${a.x},${a.y},${a.z},0`, '#')
    }
    for (let cycle = 0; cycle < 6; cycle++) {
        let possibleSet = new Set();
        for (cell of hypercube.keys()) {
            build4d(cell, possibleSet);
        }
        hypercube = evaluate4d(possibleSet, hypercube);
    }
    return hypercube.size;
}

function build4d(cell, possibleSet) {
    let parts = cell.split(',').map(Number);
    for(let w = parts[3]-1; w <= parts[3]+1; w++) {
        for(let z = parts[2]-1; z <= parts[2]+1; z++) {
            for (let y = parts[1]-1; y <= parts[1]+1; y++) {
                for (let x = parts[0]-1; x <= parts[0]+1; x++) {
                    possibleSet.add(`${x},${y},${z},${w}`)
                }
            }
        }
    }
}

function evaluate4d(possible, hypercube) {
    let out = new Map();

    for (poss of possible) {
        let numActive = 0;
        let parts = poss.split(',').map(Number);
        for(let w = parts[3]-1; w <= parts[3]+1; w++) {
            for(let z = parts[2]-1; z <= parts[2]+1; z++) {
                for (let y = parts[1]-1; y <= parts[1]+1; y++) {
                    for (let x = parts[0]-1; x <= parts[0]+1; x++) {
                        numActive += (hypercube.has(`${x},${y},${z},${w}`)) ? 1 : 0;
                    }
                }
            }
        }

        if (hypercube.has(poss) && ((numActive === 3 || numActive == 4))) { // have to increase it to 3/4 bc we're counting ourself if we were previously active
            out.set(poss, '#');
        } else if (numActive === 3) {
            out.set(poss, '#')
        }
    }
    return out;
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));



// Broken after refactor
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
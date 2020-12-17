const _ = require('lodash');
const input = require('./input');

function part1(cube) {
    // console.log(cube)
    print(cube,0,3,0)
    let min = 0;
    let zMax = 1;
    let xMax = yMax = 3;
    for (let cycle = 0; cycle < 1; cycle++) {
        let newCube = new Map();
        for(let z = min-1; z < zMax+1; z++) {
            for (let y = min-1; y < yMax+1; y++) {
                for (let x = min-1; x < xMax+1; x++) {
                    newCube.set(`${x},${y},${z}`, determineState(cube,x,y,z));
                }
            }
        }
        // console.log(newCube);
        print(newCube, min, xMax, zMax);
        cube = newCube;
        min--;
        xMax++;
        yMax++;
        zMax++;
    }
    return "tbd";
}

function determineState(cube, curX, curY, curZ) {
    // 26 total locs to check
    let numActive = 0;
    for(let z = curZ-1; z < curZ+1; z++) {
        for (let y = curY-1; y < curY+1; y++) {
            for (let x = curX-1; x < curX+1; x++) {
                let other = cube.get(`${x},${y},${z}`);
                // console.log(`other: ${other}`)
                numActive += ((other !== undefined) && other === '#') ? 1 : 0;
            }
        }
    }
    // console.log(`[${curX},${curY},${curZ}] has ${numActive} neighbors active`)

    // If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive.
    // If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.
    switch(cube.get(`${curX},${curY},${curZ}`)) {
        case '#':
            return (2 <= numActive <= 3) ? '#' : '.';
        case '.':
            return (numActive === 3) ? '#' : '.';
        default:
            return '.';
    }
}

function print(cube, min, max, zMax) {
    let out = '';
    // console.log(`min: ${min}, max: ${max}, zMax: ${zMax}`)
    for(let z = min-1; z < zMax+1; z++) {
        out += `z=${z}\n`;
        for(let y = min-1; y < max+1; y++) {
            let row = '';
            for(let x = min-1; x < max+1; x++) {
                row += cube.get(`${x},${y},${z}`) || '.';
            }
            out += row+'\n'
        }
        out += '\n';
    }
    console.log(out);
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
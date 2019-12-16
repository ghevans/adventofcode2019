const _ = require('lodash');
const moons = require('./input');

// let moons = `-1,0,2
// 2,-10,-7
// 4,-8,8
// 3,5,-1`
// .split('\n')
// .map(loc => {
//     let parts = loc.split(',')
//     return {
//         x: Number(parts[0]),
//         y: Number(parts[1]),
//         z: Number(parts[2]),
//         vx: 0,
//         vy: 0,
//         vz: 0
//     }
// });

let combinations = ['0,1','0,2','0,3','1,2','1,3','2,3'];
function part1(steps) {
    for (let i = 1; i <= steps; i++) {
        updateVelocity();
        updatePositions();
    }

    let totalEnergy = 0;
    for (let i = 0; i < moons.length; i++) {
        totalEnergy += (Math.abs(moons[i].x) + Math.abs(moons[i].y) + Math.abs(moons[i].z)) *
                       (Math.abs(moons[i].vx) + Math.abs(moons[i].vy) + Math.abs(moons[i].vz))
    }
    return totalEnergy;
}

function updateVelocity() {
    for(let i=0; i < combinations.length; i++) {
        let pair = combinations[i].split(',');

        let moon1 = moons[pair[0]];
        let moon2 = moons[pair[1]];

        moon1.vx += (moon1.x > moon2.x) ? -1 : (moon1.x === moon2.x) ? 0 : 1;
        moon1.vy += (moon1.y > moon2.y) ? -1 : (moon1.y === moon2.y) ? 0 : 1;
        moon1.vz += (moon1.z > moon2.z) ? -1 : (moon1.z === moon2.z) ? 0 : 1;

        moon2.vx += (moon1.x > moon2.x) ? 1 : (moon1.x === moon2.x) ? 0 : -1;
        moon2.vy += (moon1.y > moon2.y) ? 1 : (moon1.y === moon2.y) ? 0 : -1;
        moon2.vz += (moon1.z > moon2.z) ? 1 : (moon1.z === moon2.z) ? 0 : -1;
    }
}

function updatePositions() {
    for(let i = 0; i < moons.length; i++) {
        moons[i].x += Number(moons[i].vx);
        moons[i].y += Number(moons[i].vy);
        moons[i].z += Number(moons[i].vz);
    }
}

function part2(input) {
    return "tbd";
}


console.log("Part 1 - " + part1(1000));
// console.log("Part 2 - " + part2());
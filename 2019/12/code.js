const _ = require('lodash');
const lcm = require('compute-lcm');
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

function part2() {
    let xMap = new Map();
    let xState = new State(moons[0].x, moons[1].x, moons[2].x, moons[3].x, moons[0].vx, moons[1].vx, moons[2].vx, moons[3].vx);
    do {
        // Add State to Map, increment xSteps
        xMap.set(xState.key, xState);
        
        updateVelocity();
        updatePositions();

        xState = new State(moons[0].x, moons[1].x, moons[2].x, moons[3].x, moons[0].vx, moons[1].vx, moons[2].vx, moons[3].vx);
    } while (xMap.get(xState.key) === undefined);

    let yMap = new Map();
    let yState = new State(moons[0].y, moons[1].y, moons[2].y, moons[3].y, moons[0].vy, moons[1].vy, moons[2].vy, moons[3].vy);
    do {
        // Add State to Map, increment xSteps
        yMap.set(yState.key, yState);
        
        updateVelocity();
        updatePositions();

        yState = new State(moons[0].y, moons[1].y, moons[2].y, moons[3].y, moons[0].vy, moons[1].vy, moons[2].vy, moons[3].vy);
    } while (yMap.get(yState.key) === undefined);

    let zMap = new Map();
    let zState = new State(moons[0].z, moons[1].z, moons[2].z, moons[3].z, moons[0].vz, moons[1].vz, moons[2].vz, moons[3].vz);
    do {
        // Add State to Map, increment xSteps
        zMap.set(zState.key, zState);
        
        updateVelocity();
        updatePositions();

        zState = new State(moons[0].z, moons[1].z, moons[2].z, moons[3].z, moons[0].vz, moons[1].vz, moons[2].vz, moons[3].vz);
    } while (zMap.get(zState.key) === undefined);

    return lcm(xMap.size, yMap.size, zMap.size);
}

function State(pos1, pos2, pos3, pos4, vel1, vel2, vel3, vel4) {
    this.pos1 = pos1;
    this.pos2 = pos2;
    this.pos3 = pos3;
    this.pos4 = pos4;
    this.vel1 = vel1;
    this.vel2 = vel2;
    this.vel3 = vel3;
    this.vel4 = vel4;
    this.key = `${pos1},${pos2},${pos3},${pos4},${vel1},${vel2},${vel3},${vel4}`;
}


console.log("Part 1 - " + part1(1000));
console.log("Part 2 - " + part2());
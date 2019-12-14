const _ = require('lodash');
const input = require('./input');

function part1(orbits) {
    let totalOrbits = 0;
    for (var key in orbits) {
        totalOrbits += getOrbits(orbits, key);
    }

    return totalOrbits;
}

function getOrbits(orbits, current) {
    if (orbits[current] === undefined) {
        return 0;
    }
    return 1 + getOrbits(orbits, orbits[current]);
}

function part2(orbits) {
    let santaPath = getPath(orbits, 'SAN', []);
    let myPath = getPath(orbits, 'YOU', []);

    return (_.difference(myPath, _.intersection(santaPath, myPath)).length +
            _.difference(santaPath, _.intersection(santaPath, myPath)).length - 2);
}

function getPath(orbits, current, path) {
    path.push(current);
    if (orbits[current] === undefined) {
        return path;
    }
    return getPath(orbits, orbits[current], path);
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
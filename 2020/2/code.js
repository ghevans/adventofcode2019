const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let valid = 0;
    for(record of input) {
        valid += (isValid(record)) ? 1 : 0;
    }
    return valid;
}

function isValid(record) {
    let count = _.countBy(record.pw)[record.char] || 0;
    return (count <= record.max && count >= record.min);
}

function part2(input) {
    let valid = 0;
    for(record of input) {
        valid += (isValid2(record)) ? 1 : 0;
    }
    return valid;
}

function isValid2(record) {
    let charMatch1 = (record.pw[record.min-1] === record.char) ? 1 : 0;
    let charMatch2 = (record.pw[record.max-1] === record.char) ? 1 : 0;
    return (charMatch1 + charMatch2 === 1);
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
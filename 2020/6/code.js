const _ = require('lodash');
const input = require('./input');

function part1(input) {
    return _.sumBy(input, "count");
}

function part2(input) {
    let sum = 0;
    _.forEach(input, group => {
        _.forEach(group.members, ans => sum += (ans === group.size) ? 1 : 0)
    })
    return sum;
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
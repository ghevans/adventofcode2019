const _ = require('lodash');
const input = require('./input');

function part1(input) {
    return _.maxBy(input, 'id').id;
}

function part2(input) {
    for(let i = _.minBy(input, 'id').id; i < _.maxBy(input, 'id').id; i++) {
        if (_.find(input, ['id', i]) === undefined) {
            return i;
        }
    }
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
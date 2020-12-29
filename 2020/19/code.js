const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let rule8 = input.parsed.find(rule => rule.id === 8).regex;
    let rule11 = input.parsed.find(rule => rule.id === 11).regex;

    let regex = new RegExp(`^${rule8}${rule11}$`);
    return input.msgs.filter(msg => regex.test(msg)).length
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
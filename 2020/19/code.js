const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let rules = input.tRules;
    console.log(input.tRules);
    let start = input.tRules.get(0);
    // console.log(start)
    let parts = start[0].split(' ');
    let out = '';
    
    let leg = []
    console.log(rules.entries())

    for(val of rules.values()) {
        console.log(val)
        console.log(isNaN(val[0]))
    }

    return "tbd";
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let invalid = 0;
    for(ticket of input.nearby) {
        // console.log(`checking ticket = ${ticket}`)
        let vals = ticket.split(',')
        for (val of vals) {
            if (!isValid(input.rules, Number(val))) {
                invalid += Number(val);
            }
        }
    }
    return invalid;
}

function isValid(rules, val) {
    for(rule of rules) {
        for(range of rule.valid) {
            if (val >= Number(range[0]) && val <= Number(range[1])) {
                return true;
            }
        }
    }
    return false;
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
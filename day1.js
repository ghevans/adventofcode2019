const _ = require('lodash');
const input = require('./day1input');

function day1_part1(input) {
    input = _.map(input, mass => _.floor(mass / 3) - 2)
    return _.sum(input);
}

function day1_part2(input) {
    input = _.map(input, mass => {
        let fuel = _.floor(mass / 3) - 2;
        let req = fuel;
        while (req > 0) {
            req = _.floor(req / 3) - 2;
            if (req > 0) {
                fuel += req;
            } else {
                break;
            }
        }
        return fuel;
    });
    return _.sum(input);
}

// console.log("Part 1 - " + day1_part1(input));
console.log("Part 2 - " + day1_part2(input));
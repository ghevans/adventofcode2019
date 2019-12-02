const _ = require('lodash');
const input = require('./day1input');

function day1_part1(input) {
    return _(input)
            .map(mass => _.floor(mass / 3) - 2)
            .sum();
}

function day1_part2(input) {
    return _(input)
            .map(mass => {
                let totalFuel = _.floor(mass / 3) - 2;
                let fuel = totalFuel;
                while (fuel > 0) {
                    fuel = _.floor(fuel / 3) - 2;
                    totalFuel += (fuel > 0) ? fuel : 0;
                }
                return totalFuel;
            })
            .sum();
}

console.log("Part 1 - " + day1_part1(input));
console.log("Part 2 - " + day1_part2(input));
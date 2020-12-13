const _ = require('lodash');
const input = require('./input');

const earliest = 1000677;
const testEarliest = 939;

function part1(buses, earliest) {
    let wait = 0;
    while(true) {
        for(bus of buses) {
            if ((earliest+wait) % bus.val === 0) {
                return bus.val * wait;
            }
        }
        wait++;
    }
}

function part2(buses) {
    let time = 0;
    let step = buses[0].val; // starting step is always the first busId

    for(let i = 1; i < buses.length; i++) {
        let bus = buses[i];
        while(true) {
            // We found the next part of pattern, update the step, else loop again by current step
            if ((time + bus.offset) % bus.val === 0) {
                step = step * bus.val;
                break;
            } else {
                time += step;
            }
        }
    }
    return time;
}

console.log("Part 1 - " + part1(input, earliest));
console.log("Part 2 - " + part2(input));
const _ = require('lodash');
const input = require('./input');

function part1(input, match) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i+1; j < input.length; j++) {
            if (parseInt(input[i]) + parseInt(input[j]) == match) {
                return input[i] * input[j];
            }
        }
    }
}

function part2(input, match) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i+1; j < input.length; j++) {
            for (let k = j+1; k < input.length; k++) {
                if (parseInt(input[i]) + parseInt(input[j]) + parseInt(input[k]) == match) {
                    return input[i] * input[j] * input[k]; 
                }
            }
        }
    }
}

console.log("Part 1 - " + part1(input, 2020));
console.log("Part 2 - " + part2(input, 2020));
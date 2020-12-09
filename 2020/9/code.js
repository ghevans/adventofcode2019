const _ = require('lodash');
const input = require('./input');

function part1(code, length) {
    for(let i = length; i < code.length; i++) {
        let group = code.slice(i - length, i); 
        if (!canSum(group, code[i])) {
            return code[i];
        }
    }
    console.log('ut oh');
}

function canSum(group, current) {
    return group.flatMap((val, index) => group.slice(index+1).map(next => val + next )).includes(current);
}

function part2(code, invalidNum) {
    for(let i = code.indexOf(invalidNum) -1; i >= 0; i--) {
        let group = [code[i]];
        if (_.sum(group) < invalidNum) {
            for (let j = i - 1; j >= 0; j--) {
                group.push(code[j])
                if (_.sum(group) === invalidNum) {
                    return _.min(group) + _.max(group)
                }
            }
        }
    }
}

const invalidNum = part1(input, 25);
console.log("Part 1 - " + invalidNum);
console.log("Part 2 - " + part2(input, invalidNum));
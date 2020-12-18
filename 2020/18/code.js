const _ = require('lodash');
const input = require('./input');

function part1(equations) {
    let sum = 0;
    for (eq of equations) {
        let ans = solve(eq);
        console.log(`${eq} => ${ans}\n`);
        sum += ans;
    }
    return sum;
}


function solve(eq) {
    while(eq.indexOf('(') >= 0) {
        eq = eq.replace(/\(([^()]+)\)/g, match => {
            return solvePart(match.substring(1, match.length-1));
        })
    }
    return solvePart(eq);
}

function solvePart(eq) {
    let parts = eq.split(' ');
    while(parts.length > 1) {
        let ans = eval(parts.slice(0, 3).join(''));
        parts = parts.slice(3);
        parts.unshift(ans);
    }
    return parts[0];
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
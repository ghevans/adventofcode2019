const _ = require('lodash');
const input = require('./input');

function start(equations, advanced) {
    let sum = 0;
    for (eq of equations) {
        let ans = solve(eq, advanced);
        // console.log(`${eq} => ${ans}\n`);
        sum += ans;
    }
    return sum;
}

function solve(eq, advanced) {
    while(eq.indexOf('(') >= 0) {
        eq = eq.replace(/\(([^()]+)\)/g, match => {
            return (advanced) ? solveAdvancedPart(match.substring(1, match.length-1)) 
                              : solvePart(match.substring(1, match.length-1));
        })
    }
    return (advanced) ? solveAdvancedPart(eq) 
                      : solvePart(eq);
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

function solveAdvancedPart(eq) {
    let parts = eq.split(' ');
    while(parts.indexOf('+') > 0) {
        let loc = parts.indexOf('+');
        let ans = eval(parts.slice(loc-1,loc+2).join(''));
        parts = parts.slice(0,loc-1).concat(ans).concat(parts.slice(loc+2));
    }

    while(parts.length > 1) {
        let ans = eval(parts.slice(0, 3).join(''));
        parts = parts.slice(3);
        parts.unshift(ans);
    }
    return parts[0];
}

console.log("Part 1 - " + start(input, false));
console.log("Part 2 - " + start(input, true));
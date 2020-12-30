const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let rule8 = input.parsed.find(rule => rule.id === 8).regex;
    let rule11 = input.parsed.find(rule => rule.id === 11).regex;

    let regex = new RegExp(`^${rule8}${rule11}$`);
    return input.msgs.filter(msg => regex.test(msg)).length
}

function part2(input) {
    // now 8: 42 | 42 8 (so it's at least 1 42 and N number additional 42s, so one or more)
    // now 11: 42 31 | 42 11 31 (so it's at least 1 42/31 combo and any multiple of that in pairs, so N 42s followed by N 31s)

    // 42 42 31 (0 loops)
    // 42 42 42 31 (1 8 loop)
    // 42 42 42 42 31 (2 8 loop)
    // 42 42 42 31 31 (1 11 loop)
    // 42 42 42 42 31 31 31 (2 11 loop)
    // one or more 42s, then N 42s and N 31s
    let rule42 = input.parsed.find(rule => rule.id === 42).regex;
    let rule31 = input.parsed.find(rule => rule.id === 31).regex;
    
    let new8 = `^${rule42}+`
    let validMessages = new Set();
    for (let i=1; i < 50; i++) {
        let regex = new RegExp(new8+`${rule42}{${i}}${rule31}{${i}}$`);
        let valid = input.msgs.filter(msg => regex.test(msg));
        for(msg of valid) {
            validMessages.add(msg);
        }
        // console.log(`valid messages: ${validMessages.size}`)
    }

    return validMessages.size;
}

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
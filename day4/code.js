const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let range = input.split('-');
    let passwords = [];

    for(let i = range[0]; i <= range[1]; i++) {
        if (checkValid(i)) {
            passwords.push(i);
        }
    }
    return passwords.length;
}

function checkValid(number) {
    let s = number.toString().split('');
    let hasDup = false;
    for (let i = 1; i < s.length; i++) {
        if (s[i] < s[i-1]) {
            return false;
        } else if (s[i] === s[i-1]) {
            hasDup = true;
        }
    }
    return hasDup;
}

function part2(input) {
    let range = input.split('-');
    let passwords = [];

    for(let i = range[0]; i <= range[1]; i++) {
        if (checkValid2(i)) {
            passwords.push(i);
        }
    }
    // console.log(passwords)
    return passwords.length;
}

function checkValid2(number) {
    let s = number.toString().split('');
    let numMap = {};
    let valid = false;

    numMap[s[0]] = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] < s[i-1]) {
            return false;
        }

        if (numMap[s[i]] === undefined) {
            numMap[s[i]] = 1;
        } else {
            numMap[s[i]] += 1;
        }
    }

    _(numMap).forEach(num => {
        if (num === 2) { 
            valid = true; 
        }
    })
    return valid;
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
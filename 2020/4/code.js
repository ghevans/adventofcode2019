const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let valid = 0;
    _.forEach(input, passport => {
        const keys = Object.keys(passport);

        if ((keys.length === 8) || (keys.length === 7 && !keys.includes("cid"))) {
            valid++;
        }
    })

    return valid;
}

function part2(input) {
    let valid = 0;
    _.forEach(input, passport => {
        const keys = Object.keys(passport);

        if ((keys.length === 8) || (keys.length === 7 && !keys.includes("cid"))) {
            if( validByr(passport) &&
                validIyr(passport) &&
                validEyr(passport) &&
                validHgt(passport) &&
                validHcl(passport) &&
                validEcl(passport) && 
                validPid(passport)) {
                valid++;
            }
        }
    })

    return valid;
}

function validByr(passport) {
    return checkPart(passport.byr, 4, 1920, 2002);
}

function validIyr(passport) {
    return checkPart(passport.iyr, 4, 2010, 2020);
}

function validEyr(passport) {
    return checkPart(passport.eyr, 4, 2020, 2030)
}

function validHgt(passport) {
    measurement = passport.hgt.slice(0, passport.hgt.length - 2);
    return (((passport.hgt.indexOf('cm') > 0) && measurement <= 193 && measurement >= 150) ||
            ((passport.hgt.indexOf('in') > 0) && measurement <= 76 && measurement >= 59));
}

function validHcl(passport) {
    return (passport.hcl.length === 7 && passport.hcl[0] === '#' && (passport.hcl.replace(/[^#a-f0-9]/g,'') === passport.hcl));
}

function validEcl(passport) {
    return ['amb','blu','brn','gry','grn','hzl','oth'].includes(passport.ecl);
}

function validPid(passport) {
    return ((""+passport.pid).length === 9 && ((""+passport.pid).replace(/[^0-9]/g,'') == passport.pid));
}

function checkPart(field, length, min, max) {
    return ((""+field).length === length && field <= max && field >= min);
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
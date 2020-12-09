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
            if( validByr(passport.byr) &&
                validIyr(passport.iyr) &&
                validEyr(passport.eyr) &&
                validHgt(passport.hgt) &&
                validHcl(passport.hcl) &&
                validEcl(passport.ecl) && 
                validPid(passport.pid)) {
                valid++;
            }
        }
    })

    return valid;
}

function validByr(byr) {
    return checkPart(byr, 4, 1920, 2002);
}

function validIyr(iyr) {
    return checkPart(iyr, 4, 2010, 2020);
}

function validEyr(eyr) {
    return checkPart(eyr, 4, 2020, 2030)
}

function validHgt(hgt) {
    measurement = hgt.slice(0, hgt.length - 2);
    return (((hgt.indexOf('cm') > 0) && measurement <= 193 && measurement >= 150) ||
            ((hgt.indexOf('in') > 0) && measurement <= 76 && measurement >= 59));
}

function validHcl(hcl) {
    return (hcl.length === 7 && hcl[0] === '#' && (hcl.replace(/[^#a-f0-9]/g,'') === hcl));
}

function validEcl(ecl) {
    return ['amb','blu','brn','gry','grn','hzl','oth'].includes(ecl);
}

function validPid(pid) {
    return ((""+pid).length === 9 && ((""+pid).replace(/[^0-9]/g,'') == pid));
}

function checkPart(field, length, min, max) {
    return ((""+field).length === length && field <= max && field >= min);
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
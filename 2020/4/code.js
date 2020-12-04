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
            console.log("VALID - only missing CID")
            if(checkPart(passport.byr, 4, 1920, 2002)) {
                console.log('byr valid')
                if(checkPart(passport.iyr, 4, 2010, 2020)) {
                    console.log('iyr valid')
                    if(checkPart(passport.eyr, 4, 2020, 2030)) {
                        console.log('eyr valid')
                        measurement = passport.hgt.slice(0, passport.hgt.length - 2);
                        if (((passport.hgt.indexOf('cm') > 0) && measurement <= 193 && measurement >= 150) ||
                            ((passport.hgt.indexOf('in') > 0) && measurement <= 76 && measurement >= 59)) {
                            console.log('hgt valid')
                            const validEyes = ['amb','blu','brn','gry','grn','hzl','oth'];
                            if(validEyes.includes(passport.ecl)) {
                                console.log('ecl valid');
                            }
                        }
                    }
                }
            }
            valid++;
        } else {
            // console.log("INVALID")
        }
    })

    return valid;
}

function checkPart(field, length, min, max) {
    return ((""+field).length === length && field <= max && field >= min);
}

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
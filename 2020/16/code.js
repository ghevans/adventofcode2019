const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let invalid = 0;
    for(ticket of input.nearby) {
        for (val of ticket) {
            if (!isValid(input.rules, val)) {
                invalid += val;
            }
        }
    }
    return invalid;
}

function isValid(rules, val) {
    for(rule of rules) {
        for(range of rule.valid) {
            if (val >= range[0] && val <= range[1]) {
                return true;
            }
        }
    }
    return false;
}

function part2(input) {
    let validTickets = [input.myTicket];
    for(ticket of input.nearby) {
        let valid = true;
        for (val of ticket) {
            if (!isValid(input.rules, val)) {
                valid = false;
                break;
            }
        }
        if (valid) { validTickets.push(ticket);}
    }
    // Now merge all the tickets into groups based on index in array
    let groups = mergeTickets(validTickets);

    // Build a 2d list of which groups can go in which slots
    let possibilities = [];
    for (let i = 0; i < groups.length; i++) {
        possibilities.push(findPossiblePlaces(input.rules, groups[i]));
    }

    let output = 1;
    for(loc of findCorrectPlaces(possibilities)) {
        output *= input.myTicket[loc];
    }

    return output;
}

function findCorrectPlaces(possibilities) {
    let departLocIds = [];
    let singles = possibilities.filter(poss => poss.length === 1);
    while (singles.length > 0) {
        singles.forEach(single => {
            let index = possibilities.findIndex(elem => elem === single); // find the index
            let name = single[0];
            if (name.startsWith('departure')) { 
                departLocIds.push(index); // add the index to the output
            }
            possibilities[index] = ''; // remove this from the possibilities 2d list

            // Remove this single from all other group options
            possibilities.forEach(poss => {
                poss = (poss.indexOf(name) >= 0) ? poss.splice(poss.indexOf(name),1) : poss;
            })
        });
        singles = possibilities.filter(poss => poss.length === 1);
    }
    return departLocIds;
}

function findPossiblePlaces(rules, group) {
    let out = [];
    for (rule of rules) {
        if(group.every(function(val) {
            return (val >= rule.valid[0][0] && val <= rule.valid[0][1]) || 
                   (val >= rule.valid[1][0] && val <= rule.valid[1][1]);
        })) {
            out.push(rule.rule);
        }
    }
    return out;
}

function mergeTickets(tickets) {
    let out = tickets[0].map(n => [n]);
    for (let i = 1; i < tickets.length; i++) {
        for (let j = 0; j < tickets[i].length; j++) {
            out[j].push(tickets[i][j]);
        }
    }
    return out;
}

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
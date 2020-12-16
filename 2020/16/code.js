const { map } = require('lodash');
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
            if (val >= Number(range[0]) && val <= Number(range[1])) {
                return true;
            }
        }
    }
    return false;
}

function part2(input) {
    let invalid = 0;
    let validTickets = [input.myTicket];
    for(ticket of input.nearby) {
        let valid = true;
        for (val of ticket) {
            if (!isValid(input.rules, Number(val))) {
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

    let finalMap = new Map();


    // find their index
    // add to map
    // remove from existing arrays
    // search for singles
    let singles = possibilities.filter(poss => poss.length === 1);
    let i = 1;
    while (singles.length > 0) {
        singles.forEach(single => {
            let index = possibilities.findIndex(elem => elem === single); // find the index
            let name = single[0];
            if (name.startsWith('depart')) { 
                finalMap.set(index, name); // add the index and name to the output
            }
            possibilities[index] = ''; // remove this from the possibilities 2d list

            possibilities.forEach(poss => {
                let index = poss.indexOf(name);
                if (index >= 0) {
                    poss = poss.splice(index, 1);
                }
            })
        })
        // console.log(possibilities)
        singles = possibilities.filter(poss => poss.length === 1);
        // console.log(singles);
    }
    console.log(finalMap)

    // `53,67,73,109,113,107,137,131,71,59,101,179,181,61,97,173,103,89,127,139`
    // 53*107*101*97*173*89
    // console.log(possibilities);
    return invalid;
}

function findPossiblePlaces(rules, group) {
    let out = [];
    for (rule of rules) {
        if(group.every(function(val) {
            let first = (val >= rule.valid[0][0] && val <= rule.valid[0][1])
            let second = (val >= rule.valid[1][0] && val <= rule.valid[1][1])
            return first || second;
        })) {
            out.push(rule.rule);
        }
    }
    return out;
}

function mergeTickets(tickets) {
    let out = tickets[0].map(n => [Number(n)]);
    for (let i = 1; i < tickets.length; i++) {
        for (let j = 0; j < tickets[i].length; j++) {
            out[j].push(tickets[i][j]);
        }
    }
    return out;
}

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
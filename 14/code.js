const _ = require('lodash');
const reactions = require('./input');

// let testMap = new Map();
// let test = `10 ORE => 10 A
// 1 ORE => 1 B
// 7 A, 1 B => 1 C
// 7 A, 1 C => 1 D
// 7 A, 1 D => 1 E
// 7 A, 1 E => 1 FUEL`.split('\n')
// .forEach(reaction => { 
//     reaction = reaction.split(" => ");

//     testMap.set(reaction[1].split(' ')[1], {
//         quant: reaction[1].split(' ')[0],
//         consumes: reaction[0].split(', ').map(e => { let t = e.split(' '); return { quant: t[0], chem: t[1]}; })
//     });
// });

function convert(leftovers, chem, quantity) {
    let ore = 0;
    let reaction = reactions.get(chem);
    let scaler = Math.ceil(quantity / reaction.quant);

    for (let req of reaction.consumes) {
        let chemName = req.chem;
        let needs = req.quant * scaler;

        if (chemName === 'ORE') {
            ore +=  needs;
        } else {
            let chemLeftovers = leftovers[chemName] || 0;
            if (chemLeftovers < needs) {
                ore += convert(leftovers, chemName, needs - chemLeftovers);
            }

            leftovers[chemName] -= needs;
        }
    }

    leftovers[chem] = (reaction.quant * scaler) + (leftovers[chem] || 0)

    return ore;
}

function part1() {
    return convert({}, 'FUEL', 1);
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1());
// console.log("Part 2 - " + part2(input));
const _ = require('lodash');
const input = require('./input');

function part1(input, bag) {
    let bags = [bag];
    findBags(input, bag.type).map(found => bags.push(found));

    let outerBags = new Set(bags.flatMap(bag => bag.type));
    let insideBags = new Set(bags.flatMap(bag => bag.holds.map(o => o.type)));
    while(!innerBagsEval(bags)) {
        _.forEach(bags, bag => {
            if(bag.holds.length > 0) {
                findBags(input, bag.type).map(found => bags.push(found));
                bags = _.uniqBy(bags, 'type');
                _.forEach(bag.holds, holds => {
                    if (holds.length > 0) {
                        findBags(input, bag.type).map(found => bags.push(found));
                    } else {
                        bags.push({type: type, holds: []});
                    }
                })
                bags = _.uniqBy(bags, 'type');
            }
        })
        
        outerBags = new Set(bags.flatMap(bag => bag.type));
        insideBags = new Set(bags.flatMap(bag => bag.holds.map(o => o.type)));
    }
    return bags.filter(b => b.holds.length > 0).length;
}

function innerBagsEval(bags) {
    let outer = new Set(bags.flatMap(bag => bag.type));
    let inner = Array.from(new Set(bags.flatMap(bag => bag.holds.map(o => o.type))));
    for(type of inner) {
        if(!outer.has(type)) {
            return false;
        }
    }
    return true;
}

function findBags(rules, bag) {
    return rules.filter(rule => rule.holds.filter(r => r.type === bag).length > 0);
}

function part2(input, bag) {
    let root = getRule(input, bag);
    let totalBags = sumChildren(input, root.holds) -1;
    return totalBags;
}

function sumChildren(rules, children) {
    if (children.length === 0) {
        return 1;
    }

    let sum = 0;
    for(child of children) {
        sum += Number(child.num) * sumChildren(rules, getRule(rules, child.type).holds);
    };
    
    return sum + 1;
}

function getRule(rules, type) {
    return rules.filter(rule => rule.type === type)[0];
}

console.log("Part 1 - " + part1(input, {type: 'shiny gold', holds: []}));
console.log("Part 2 - " + part2(input, 'shiny gold'));
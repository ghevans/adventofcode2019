const _ = require('lodash');
const input = require('./input');

function part1(input, w, t) {
    let layers = [];
    let numLayers = input.length / (w*t);
    for (let i = 0; i < numLayers; i++) {
        let l = input.substring(i*w*t, (1+i)*w*t);
        layers.push({
            layer: l,
            zeros: findBy(l, '0'),
            mult: findBy(l, '1') * findBy(l, '2')
        });
    }
    
    return _(layers).minBy('zeros').mult;
}

function findBy(layer, char) {
    return _.filter(layer.split(''), d => d === char).length;
}

function part2(input) {
    return "tbd";
}

let test = "123456782012";
// console.log("Part 1 - " + part1(test, 3, 2));
console.log("Part 1 - " + part1(input, 25, 6));
// console.log("Part 2 - " + part2(input));
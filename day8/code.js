const _ = require('lodash');
const input = require('./input');

function part1(input, w, t) {
    let layers = [];
    let numLayers = input.length / (w*t);
    for (let i = 0; i < numLayers; i++) {
        let l = input.substring(i*w*t, (1+i)*w*t);
        layers.push({
            layer: _.chunk(l, w),
            zeros: findBy(l, '0'),
            mult: findBy(l, '1') * findBy(l, '2')
        });
    }

    return _(layers).minBy('zeros').mult;
}

function findBy(layer, char) {
    return _.filter(layer.split(''), d => d === char).length;
}

function part2(input, w, t) {
    let output = [];

    let layers = [];
    let numLayers = input.length / (w*t);
    for (let i = 0; i < numLayers; i++) {
        let l = input.substring(i*w*t, (1+i)*w*t);
        layers.push({
            layer: _.chunk(l, w)
        });
    }

    output = layers[0].layer;
    for (let i = 1; i < numLayers; i++) {
        for (let j = 0; j < t; j++) {
            for (let k = 0; k < w; k++) {
                if (output[j][k] === '2') {
                    output[j][k] = layers[i].layer[j][k];
                }
            }
        }
    }
    
    return print(output, w, t);
}

function print(output, w, t) {
    let out = '';
    for (let i = 0; i < t; i++) {
        let row = '';
        for(let j = 0; j < w; j++) {
            row += (output[i][j] == '1') ? output[i][j] : ' ';
        }
        out += row + '\n';
    }
    return out;
}

console.log("Part 1 - " + part1(input, 25, 6));
console.log("Part 2 - \n" + part2(input, 25, 6));
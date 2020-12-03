const _ = require('lodash');
const input = require('./input');

function part1(input) {
    return countTrees(input, 1, 3);
}

function part2(input) {
    let s1 = countTrees(input,1,1);
    let s2 = countTrees(input,1,3);
    let s3 = countTrees(input,1,5);
    let s4 = countTrees(input,1,7);
    let s5 = countTrees2(input,2,1);

    return s1*s2*s3*s4*s5;
}

function countTrees2(input,down,right) {
    let trees = 0, depth = 0; i = 0, rowLength = input[0].length;
    while (depth <= input.length) {
        trees += (input[depth % input.length].charAt((i*right) % rowLength) === '#') ? 1 : 0;
        depth+=down;
        i++;
    }
    return trees;
}

function countTrees(input, down, right) {
    let trees = 0;
    for (let i = 0; i < input.length; i+=down) {
        trees += (input[i].charAt((i*right) % input[i].length) === '#') ? 1 : 0;
    }
    return trees;
}
console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
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
    let s5 = countTrees(input,2,1);

    return s1*s2*s3*s4*s5;
}

function countTrees(input, down, right) {
    let trees = 0, rowLength = input[0].length;
    for (let y = 0, x = 0; y < input.length; y+=down, x+=right) {
        trees += (input[y].charAt(x % rowLength) === '#') ? 1 : 0;
    }
    return trees;
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
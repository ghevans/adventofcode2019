const _ = require('lodash');
const input = require('./input');

function part1(input) {
    input.push(0)
    const sorted = input.sort((a,b) => a-b);
    sorted.push(sorted[sorted.length - 1] + 3)

    let singles = 0, doubles = 0, triples = 0;
    for (let i = 0, j = 1; j < sorted.length; i++, j++) {
        switch(sorted[j] - sorted[i]) {
            case 1:
                singles++;
                break;
            case 2:
                doubles++;
                break;
            case 3:
                triples++;
                break;
        }
    }
    // console.log(`singles: ${singles} | doubles: ${doubles} | triples: ${triples}`)

    return singles * triples;
}

function part2(input) {
    input.push(0);
    const sorted = input.sort((a,b) => a-b);
    sorted.push(sorted[sorted.length - 1] + 3);

    let pathsByIndex = Array(sorted.length).fill(0);
    pathsByIndex[0] = 1; // always 1 path starting from 0

    for (let i = 1; i < sorted.length; i++) {
        let start = (i-3 >= 0) ? i-3 : 0;

        sorted.slice(start,i)
              .filter(jolt => (jolt + 3 >= sorted[i]))
              .map(jolt => pathsByIndex[i] += pathsByIndex[sorted.indexOf(jolt)]);
    }

    return pathsByIndex[sorted.length - 1];
}

console.log("Part 1 - " + part1(_.cloneDeep(input)));
console.log("Part 2 - " + part2(_.cloneDeep(input)));
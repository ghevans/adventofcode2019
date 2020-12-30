const _ = require('lodash');
const {input, test, Tile} = require('./input');

function part1(grid) {
    console.log(grid[0]);
    let tileMap = new Map();
    let tile = grid[0];
    Tile.print(tile.grid);
    let orientations = [];
    orientations.push(tile.grid);
    orientations.push(tile.rotate().grid);
    orientations.push(tile.rotate().rotate().grid);
    orientations.push(tile.rotate().rotate().rotate().grid);
    orientations.push(tile.flipOnY().grid);
    orientations.push(tile.rotate().flipOnX().grid);
    orientations.push(tile.flipOnX().grid);
    orientations.push(tile.rotate().rotate().rotate().flipOnX().grid);
    tileMap.set(tile.id, orientations);

    console.log(tileMap);

    let edges = tile.getEdges();
    console.log(edges);
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(test));
// console.log("Part 2 - " + part2(input));
const _ = require('lodash');
const {input, test, Tile} = require('./input');

function part1(grid) {
    let edgeMap = findPairs(grid);

    let ans = 1;
    grid.filter(tile => tile.neighbors.size === 2).map(tile => ans *= tile.id);
    return ans;
}

function findPairs(grid) {
    let edgeMap = new Map();
    for(tile of grid) {
        let edges = tile.getEdges().concat(tile.flipOnX().getEdges());
        for ([index, edge] of edges.entries()) {
            if (edgeMap.has(edge)) {
                edgeMap.get(edge).push(tile.id);
            } else {
                edgeMap.set(edge, [tile.id])
            }
        }
    }

    for([edge,tiles] of edgeMap.entries()) {
        if (tiles.length !== 1) { 
            setNeighbors(grid, tiles);
        }
    }
    
    return edgeMap;
}

function setNeighbors(grid, tiles) {
    grid.filter(i => i.id === tiles[0])[0].addNeighbor(tiles[1]);
    grid.filter(i => i.id === tiles[1])[0].addNeighbor(tiles[0]);
}

function part2(grid) {
    let edgeMap = findPairs(grid);

    console.log(grid);

    // let neighborMap = new Map();
    // for(tile of grid) {
    //     let edges = tile.getEdges().concat(tile.flipOnX().getEdges());
    //     let obj = {}
    //     for ([index, edge] of edges.entries()) {
    //         let neighbor = edgeMap.get(edge).filter(t => t.tile != tile.id)[0] || '';
    //         obj[edge] = neighbor;
    //     }
    //     neighborMap.set(tile.id, obj);
    // }
    // // console.log(neighborMap);

    // console.log(edgeMap);
    // Tile.print(grid.filter(i => i.id === 2311)[0])
    // console.log(pairsMap);

    // // determine ordering of tiles
    // // remove edges from all tiles
    // // build full grid
    // // determine proper orientation to find sea monsters (how?)
    // // find sea monsters
    // // answer will be number of # - numberSeaMonsters*15

    // let t = Array.from(edgeMap, ([name, tiles]) => ({ name, tiles }));
    // console.log(t)
    // let key = 2311;
    // // for(key of edgeMap.keys()) {
    //     let m = t.filter(e => {
    //         console.log(e);
    //         let filt = e.tiles.filter(tile => {
    //             console.log(tile);
    //             tile.tile === key
    //         })
    //     });
        // console.log(m);
    // }
}

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(test));
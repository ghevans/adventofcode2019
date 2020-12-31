const _ = require('lodash');
const {input, test, Tile} = require('./input');

function part1(grid) {
    // for each Tile in the grid (n Tiles)
    // loop through all orientations (8 orientations)
    // getEdges for each of the orientations (4 edges)
    // if edgeMap has edge, set edgeMap(edge) = edgeMap.get(edge).push(tileId)
    // else set edgeMap(edge) = [tileId]
    // at this point we have edgeMap with ALL possible orientations and their tileId BUT NOT THE ORIENTATION THAT GENERATED THE EDGE
    // so let's also save orientationId with tileId in the edgeMap
    // the corners will be the edges that ONLY HAVE 2 members in the array
    let edgeMap = new Map();
    for(tile of grid) {
        let edges = tile.getEdges().concat(tile.flipOnX().getEdges());
        for ([index, edge] of edges.entries()) {
            if (edgeMap.has(edge)) {
                edgeMap.get(edge).push({tile: tile.id, orientation: index});
            } else {
                edgeMap.set(edge, [{tile: tile.id, orientation: index}])
            }
        }
    }
    let pairsMap = new Map();
    for([edge,tiles] of edgeMap.entries()) {
        if (tiles.length === 1) { 
            edgeMap.delete(edge);
        } else {
            if (pairsMap.has(tiles[0].tile)) {
                pairsMap.get(tiles[0].tile).add(tiles[1].tile);
            } else {
                pairsMap.set(tiles[0].tile, new Set().add(tiles[1].tile));
            }
            if (pairsMap.has(tiles[1].tile)) {
                pairsMap.get(tiles[1].tile).add(tiles[0].tile);
            } else {
                pairsMap.set(tiles[1].tile, new Set().add(tiles[0].tile));
            }
        }
    }
    
    let ans = 1;
    for ([tileId, pairs] of pairsMap.entries()) {
        if(pairs.size === 2) {
            ans *= tileId;
        }
    }

    return ans;
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
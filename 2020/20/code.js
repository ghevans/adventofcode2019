const _ = require('lodash');
const Tile = require ('./tile')
const {input, test} = require('./input');

function part1(grid) {
    let edgeMap = findPairs(grid);

    let ans = 1;
    grid.filter(tile => tile.neighborTiles.size === 2).map(tile => ans *= tile.id);
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
    grid.find(i => i.id === tiles[0]).addNeighbor(tiles[1]);
    grid.find(i => i.id === tiles[1]).addNeighbor(tiles[0]);
}

function getMyEdges(edgeMap, tileId) {
    return Array.from(edgeMap, ([name, tiles]) => ({ name, tiles })).filter(edge => edge.tiles.includes(tileId));
}

function getTile(grid, tileId) {
    return grid.find(tile => tile.id === tileId);
}

function part2(grid) {
    let size = Math.sqrt(grid.length);
    let edgeMap = findPairs(grid);
    for(tile of grid) {
        tile.updateEdges();
    }

    for(tile of grid) {
        let edges = ['top','bottom','left','right'];
        for(edge of edges) {
            let neighbor = grid.find(t => t.id !== tile.id && t.edgePossibilities.includes(tile.edges[edge]))
            if(neighbor !== undefined) {
                tile.neighbors[edge] = neighbor.id;
                tile.neighborTiles.add(neighbor.id);
            }
        }
    }

    let topLeft = grid.find(tile => tile.neighborTiles.size === 2 && tile.neighbors.right !== null && tile.neighbors.bottom !== null)
    // console.log(topLeft)

    let orderedGrid = [...Array(size)].map(x=>Array(size))
    orderedGrid[0][0] = topLeft.id;
    let x = y = 0;
    let currentTile = startRowTile = topLeft;
    Tile.print(currentTile)
    // while(currentTile.neighbors.down != null) {

        while(currentTile.neighbors.right !== null) {
            let edgeToMatch = currentTile.edges.right;

            console.log(`walking right, trying to match: ${currentTile.edges.right}`)
            let nextTile = grid.find(tile => tile.id === currentTile.neighbors.right);

            if(edgeToMatch !== nextTile.edges.left) {
                let nextLeftFlipped = nextTile.edges.left.split('').reverse().join('');
                if(edgeToMatch === nextLeftFlipped) {
                    console.log(`CORRECTLY ALIGNED AFTER FLIP`)
                    nextTile = nextTile.flipOnX();
                    nextTile.updateEdges();
                    Tile.print(nextTile);
                } else {
                    // need to rotate
                    for(let i = 1; i < 4; i++) {
                        nextTile = nextTile.rotate(1);
                        nextTile.updateEdges();
                        if(edgeToMatch === nextTile.edges.left) {
                            console.log(`CORRECTLY ALIGNED AFTER ${i} ROTATION(s)`);
                            Tile.print(nextTile);
                            break;
                        }
                    }
                }
            } else {
                console.log(`CORRECTLY ALIGNED WITHOUT UPDATE`)
                Tile.print(nextTile);
            }

            x++;
            orderedGrid[y][x] = nextTile.id;
            currentTile = nextTile;
            console.log(`=====================`)
        }       

    //     y++;
    //     currentTile = 
    // }
    // console.log(orderGrid);
    // console.log(grid.filter(t => orderGrid[0].includes(t.id)))

    // grid.map(tile => console.log(`${(tile.neighborTiles.size ===2) ? 'CORNER': ''} || Tile ${tile.id} || neighbors: ${JSON.stringify(tile.neighbors)}`))

    // // determine ordering of tiles
    // // remove edges from all tiles
    // // build full grid
    // // determine proper orientation to find sea monsters (how?)
    // // find sea monsters
    // // answer will be number of # - numberSeaMonsters*15
}

// function printGrid(grid, orderedGrid) {
//     let out = '';
//     for(let y=0; y < orderedGrid.length;y++) {
//         for(let x=0; x < orderedGrid[0].length; x++) {
//             let tile = grid.find(t => t.id === orderedGrid[y][x]);
//             out[]
//         }
//     }
// }

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(test));
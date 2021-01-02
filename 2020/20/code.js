const _ = require('lodash');
const Tile = require ('./tile')
const {input, test} = require('./input');
const { e } = require('mathjs');

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

function part2(grid) {
    let size = Math.sqrt(grid.length);
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

    let orderedGrid = [...Array(size)].map(x=>Array(size))
    orderedGrid[0][0] = topLeft.id;
    let x = y = 0;
    let currentTile = startRowTile = topLeft;
    // Tile.print(currentTile)
    while(currentTile.neighbors.bottom != null || currentTile.neighbors.right !== null) {
        while(currentTile.neighbors.right !== null) {
            let edgeToMatch = currentTile.edges.right;

            // console.log(`walking right, trying to match: ${edgeToMatch}`)
            let nextTile = grid.find(tile => tile.id === currentTile.neighbors.right);
            let nextTileIndex = grid.findIndex(tile => tile.id === currentTile.neighbors.right)

            if(edgeToMatch !== nextTile.edges.left) {
                let nextLeftFlipped = nextTile.edges.left.split('').reverse().join('');
                if(edgeToMatch === nextLeftFlipped) {
                    // console.log(`CORRECTLY ALIGNED AFTER FLIP`)
                    nextTile = nextTile.flipOnX();
                    nextTile.updateEdges();
                    grid[nextTileIndex] = nextTile;
                    // Tile.print(nextTile);
                } else {
                    // need to rotate
                    for(let i = 1; i < 4; i++) {
                        nextTile = nextTile.rotate(1);
                        nextTile.updateEdges();
                        grid[nextTileIndex] = nextTile;
                        if(edgeToMatch === nextTile.edges.left) {
                            // console.log(`CORRECTLY ALIGNED AFTER ${i} ROTATION(s)`);
                            // Tile.print(nextTile);
                            break;
                        }
                    }
                }
            } else {
                // console.log(`CORRECTLY ALIGNED WITHOUT UPDATE`)
                // Tile.print(nextTile);
            }

            x++;
            orderedGrid[y][x] = nextTile.id;
            currentTile = nextTile;
            // console.log(`=====================`)
        }       

        edgeToMatch = startRowTile.edges.bottom;

        let nextTile = grid.find(tile => tile.id === startRowTile.neighbors.bottom);
        let nextTileIndex = grid.findIndex(tile => tile.id === startRowTile.neighbors.bottom)

        if(nextTile === undefined) {
            break; // this is when we've hit the bottom and are done
        }

        if(edgeToMatch !== nextTile.edges.top) {
            let nextTopFlipped = nextTile.edges.top.split('').reverse().join('');
            if(edgeToMatch === nextTopFlipped) {
                // console.log(`CORRECTLY ALIGNED AFTER FLIP`)
                nextTile = nextTile.flipOnX();
                nextTile.updateEdges();
                grid[nextTileIndex] = nextTile;
                // Tile.print(nextTile);
            } else {
                for(let i = 1; i < 4; i++) {
                    nextTile = nextTile.rotate(1);
                    nextTile.updateEdges();
                    grid[nextTileIndex] = nextTile;
                    if(edgeToMatch === nextTile.edges.top) {
                        // console.log(`CORRECTLY ALIGNED AFTER ${i} ROTATION(s)`);
                        // Tile.print(nextTile);
                        break;
                    }
                }
            }
        } else {
            // console.log(`CORRECTLY ALIGNED WITHOUT UPDATE`)
            // Tile.print(nextTile);
        }
        
        y++; x = 0;
        orderedGrid[y][x] = nextTile.id;
        startRowTile = currentTile = nextTile;
    }
    // Tile.print(grid.find(t => t.id === 3079))
    // Tile.print(grid.find(t => t.id === 1171))
    console.log(orderedGrid);
    printGrid(grid, orderedGrid);
    // // determine ordering of tiles
    // // remove edges from all tiles
    // // build full grid
    // // determine proper orientation to find sea monsters (how?)
    // // find sea monsters
    // // answer will be number of # - numberSeaMonsters*15
}

function printGrid(grid, orderedGrid) {
    let out = '';
    let dim = grid.find(t => t.id === orderedGrid[0][0]).grid.length;
    for(let y=0; y < orderedGrid.length;y++) {
        let tileRow = '';        
        for(let z=0; z < dim; z++ ) {
            let row = '';
            for(let x=0; x < orderedGrid[0].length; x++) {
                let tile = grid.find(t => t.id === orderedGrid[y][x]);
                row += " | " + tile.grid[z].split('').join(' ');
            }
            tileRow += row + '\n';
        }
        out += tileRow + '\n'
    }
    console.log(out);
}

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(test));
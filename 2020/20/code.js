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

    // determine ordering of tiles
    let x = y = 0;
    // let corners = grid.filter(tile => tile.neighborTiles.size === 2 && tile.neighborTiles.bottom !== null);
    let currentTile = startRowTile = grid.find(tile => tile.neighborTiles.size === 2 && tile.neighbors.right !== null && tile.neighbors.bottom !== null);;
    let orderedGrid = [...Array(size)].map(x=>Array(size))
    orderedGrid[0][0] = currentTile.id;
    // console.log(`currentTile: ${currentTile.id}`);console.log(currentTile.neighbors)

    while(true) {
        // console.log(`starting new row with ${currentTile.id}`)
        while(true) {
            let edgeToMatch = currentTile.edges.right;
            // console.log(currentTile)
            let nextTile = grid.find(tile => tile.id !== currentTile.id && tile.edgePossibilities.includes(edgeToMatch));
            if (nextTile === undefined) {
                // console.log("here")
                break;
            }
            // console.log(`nextTile: ${nextTile.id}`);

            let nextTileIndex = grid.findIndex(tile => tile.id === nextTile.id);
            if(edgeToMatch !== nextTile.edges.left) {
                let nextLeftFlipped = nextTile.edges.left.split('').reverse().join('');
                if(edgeToMatch === nextLeftFlipped) {
                    // console.log(`CORRECTLY ALIGNED ${nextTile.id} to ${currentTile.id} AFTER FLIP`)
                    nextTile = nextTile.flipOnX();
                    nextTile.updateEdges();
                    grid[nextTileIndex] = nextTile;
                } else {
                    for(let i = 1; i < 4; i++) {
                        nextTile = nextTile.rotate(1);
                        nextTile.updateEdges();
                        grid[nextTileIndex] = nextTile;
                        if(edgeToMatch === nextTile.edges.left) {
                            // console.log(`CORRECTLY ALIGNED ${nextTile.id} to ${currentTile.id} AFTER ${i} ROTATION(s)`);
                            break;
                        } else {
                            nextLeftFlipped = nextTile.edges.left.split('').reverse().join('');
                            if(edgeToMatch === nextLeftFlipped) {
                                // console.log(`CORRECTLY ALIGNED ${nextTile.id} to ${currentTile.id} AFTER ${i} ROTATION(s) AND A FLIP`)
                                nextTile = nextTile.flipOnX();
                                nextTile.updateEdges();
                                grid[nextTileIndex] = nextTile;
                                break;
                            } 
                        }
                    }
                }
            } else {
                // console.log(`CORRECTLY ALIGNED ${nextTile.id} to ${currentTile.id} BY DEFAULT`);
            }

            x++;
            orderedGrid[y][x] = nextTile.id;
            currentTile = nextTile;
        }       
        
        edgeToMatch = startRowTile.edges.bottom;
        // console.log(`back at the start with ${startRowTile.id}`)
        let nextTile = grid.find(tile => tile.id !== startRowTile.id && tile.edgePossibilities.includes(edgeToMatch));
        if(nextTile === undefined) {
            break; // this is when we've hit the bottom and are done
        }
        let nextTileIndex = grid.findIndex(tile => tile.id === nextTile.id)
        // console.log(`next row will start with ${nextTile.id} matching ${startRowTile.edges.bottom} === ${nextTile.edgePossibilities}`)

        if(edgeToMatch !== nextTile.edges.top) {
            let nextTopFlipped = nextTile.edges.top.split('').reverse().join('');
            if(edgeToMatch === nextTopFlipped) {
                // console.log(`CORRECTLY ALIGNED ${nextTile.id} to ${currentTile.id} AFTER FLIP`)
                nextTile = nextTile.rotate(2).flipOnX();
                nextTile.updateEdges();
                grid[nextTileIndex] = nextTile;
            } else {
                for(let i = 1; i < 4; i++) {
                    nextTile = nextTile.rotate(1);
                    nextTile.updateEdges();
                    grid[nextTileIndex] = nextTile;
                    if(edgeToMatch === nextTile.edges.top) {
                        // console.log(`CORRECTLY ALIGNED ${nextTile.id} to ${currentTile.id} AFTER ${i} ROTATION(s)`);
                        break;
                    } else {
                        nextTopFlipped = nextTile.edges.top.split('').reverse().join('');
                        if(edgeToMatch === nextTopFlipped) {
                            // console.log(`CORRECTLY ALIGNED AFTER  ${i} ROTATION(s) AND A FLIP`)
                            nextTile = nextTile.rotate(2).flipOnX();
                            nextTile.updateEdges();
                            grid[nextTileIndex] = nextTile;
                            break;
                        } 
                    }
                }
            }
        } else {
            // console.log(`CORRECTLY ALIGNED ${nextTile.id} to ${currentTile.id} BY DEFAULT`);
        }
        y++; x = 0;
        orderedGrid[y][x] = nextTile.id;
        startRowTile = currentTile = nextTile;
    }

    // remove edges from all tiles
    // build full grid
    for([index, tile] of grid.entries()) {
        grid[index] = tile.removeEdges();
    }

    // this is our proper image, needs rotation / flipping to find monsters
    let image = printGrid(grid, orderedGrid);

    // determine proper orientation to find sea monsters
    for(let j = 0; j < 2; j++) {
        for(let i = 0; i < 4; i++) {
            // find sea monsters
            let numMonsters = searchForMonster(image);
            if(numMonsters > 0) {
                console.log(`\nFound ${numMonsters} sea monsters in this image (${image.match(/#/g).length - (numMonsters*15)} roughness)\n${image}`)
            }
            image = rotateImage(image);
        }
        // do flip
        image = flipImage(image);
    }
}

function flipImage(image) {
    image = image.split('\n')
    let newImage = Array(image.length);
    for(let y = 0; y < image.length; y++) {
        newImage[y] = image[image.length - y - 1];
    }
    return newImage.join('\n');
}

function rotateImage(image) {
    image = image.split('\n');
    let newImage = [...Array(image.length)].map(x=>Array(image.length));
    for(let y = 0; y < image.length; y++) {
        for(let x = 0; x < image[0].length; x++) {
            newImage[x][image.length-y-1] = image[y][x];
        }
    }
    return newImage.map(row => row.join('')).join('\n');
}

// monster =>
// `                  # 
//  #    ##    ##    ###
//   #  #  #  #  #  #   `;
function searchForMonster(image) {
    let monsterRegex = new RegExp(`.{18}#.(.)*\n(.)*#.{4}##.{4}##.{4}###.(.)*\n(.)*.#..#..#..#..#..#...`,'g');
    let numberMonsters = 0;
    while ((myArray = monsterRegex.exec(image)) !== null) {
        numberMonsters++;
    }

    return numberMonsters;
}

function printGrid(grid, orderedGrid) {
    let out = '';
    let ret = '';
    let dim = grid.find(t => t.id === orderedGrid[0][0]).grid.length;
    for(let y=0; y < orderedGrid.length;y++) {
        let tileRow = '', retTR = '';        
        for(let z=0; z < dim; z++ ) {
            let row = '', retR = '';
            for(let x=0; x < orderedGrid[0].length; x++) {
                let tile = grid.find(t => t.id === orderedGrid[y][x]);
                row += " | " + tile.grid[z].split('').join(' ');
                retR += tile.grid[z];
            }
            tileRow += row + '\n';
            retTR += retR + '\n';
        }
        out += tileRow + '\n'
        ret += retTR;
    }
    // console.log(out);
    return ret.slice(0,-1);
}

// console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let tiles = new Set();
    for(tile of input) {
        let coor = { x: 0, y: 0};
        for (let i = 0; i < tile.length; i++) {
            let dir = tile[i];
            switch(dir) {
                case 'n':
                    switch(tile[i+1]) {
                        case 'e':
                            coor.x++;
                            coor.y--;
                            break;
                        case 'w':
                            coor.y--;
                            break;
                    }
                    i++;
                    break;
                case 's':
                    switch(tile[i+1]) {
                        case 'e':
                            coor.y++;
                            break;
                        case 'w':
                            coor.x--;
                            coor.y++;
                            break;
                    }
                    i++;
                    break;
                case 'e':
                    coor.x += 1;
                    break;
                case 'w':
                    coor.x -= 1;
                    break;
            }
        }
        if (tiles.has(`${coor.x},${coor.y}`)) {
            // console.log(`visited: [${coor.x},${coor.y}] and flipped it back to white`)
            tiles.delete(`${coor.x},${coor.y}`);
        } else {
            // console.log(`visited: [${coor.x},${coor.y}] and flipped it to black`)
            tiles.add(`${coor.x},${coor.y}`);
        }
    }
    return tiles;
}

function part2(tiles) {
    // console.log(`total options: ${options.size}`)
    for (let i = 0; i < 100; i++) {
        let options = buildOptions(tiles);
        let nextDay = new Set();
        for (option of options) {
            // let coor = tile.split(',').map(Number);
            let neighbors = checkCoor(tiles, option);
            if(tiles.has(option)) {
                // console.log(`current option ${option} is currently BLACK and has ${neighbors} nearby`)
                if(neighbors === 1 || neighbors === 2) {
                    // console.log(`will remain black`)
                    nextDay.add(option);
                }
            } else {
                // console.log(`current option ${option} is currently WHITE`)
                if(neighbors === 2) {
                    // console.log(`will turn BLACK`)
                    nextDay.add(option);
                }
            }
        }
    
        console.log(`Day ${i+1}: ${[...nextDay.values()].length}`)
        tiles = nextDay;
    }
    return [...tiles.values()].length;
}

function buildOptions(tiles) {
    let adjacent = [{x:-1,y:0},{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:1}];
    let options = new Set();
    for(tile of tiles) {
        let coor = tile.split(',').map(Number)
        options.add(tile); // add myself
        for(dir of adjacent) {
            options.add(`${coor[0]+dir.x},${coor[1]+dir.y}`) // add my 6 neighbors
        }
    }
    return options;
}

function checkCoor(tiles, coor) {
    let out = 0;
    let nearby = buildOptions(new Set().add(coor));
    nearby.delete(coor);
    for(tile of nearby.values()) {
        out += (tiles.has(tile)) ? 1 : 0;    
    }
    return out;
}

// console.log("Part 1 - " + [...part1(input).values()].length);
console.log("Part 2 - " + part2(part1(input)));
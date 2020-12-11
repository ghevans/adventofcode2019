const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let prevSeatMap = input;
    let maxX = _.maxBy(prevSeatMap, 'x').x;
    let maxY = _.maxBy(prevSeatMap, 'y').y;

    let i = 0;
    while (true) {
        let curSeatMap = doRound(prevSeatMap, maxX, maxY);
        
        // print(curSeatMap, maxX, maxY, i+1);
        // console.log(i+1)
        if (noChanges(prevSeatMap, curSeatMap, maxX, maxY)) {
            // console.log(`Stabilized after ${i+1} rounds`)
            return curSeatMap.filter(s => s.val === '#').length;
        }
        prevSeatMap = curSeatMap;
        i++;
    }
}

function noChanges(prevSeatMap, curSeatMap, maxX, maxY) {
    for(let y = 0; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            let prevSeat = prevSeatMap.filter(seat => seat.x === x && seat.y === y)[0].val;
            let curSeat = curSeatMap.filter(seat => seat.x === x && seat.y === y)[0].val;
            if (prevSeat !== curSeat) {
                return false;
            }
        }
    }
    return true;
}

function doRound(seatMap, maxX, maxY) {
    let newSeatMap = [];

    for(let y = 0; y <= maxY; y++) {
        for (let x = 0; x <= maxX; x++) {
            let seat = seatMap.filter(seat => seat.x === x && seat.y === y)[0];
            let nearby = getNearby(seatMap, x, y).filter(s => s !== seat);
            let occupied = nearby.filter(s => s.val === '#');
            // console.log(`numOccupied: ${occupied.length}`)

            switch (seat.val) {
                case 'L':
                    newSeatMap.push({x: x, y: y, val: (occupied.length === 0) ? '#' : 'L'})
                    // seat.val = (occupied.length === 0) ? '#' : 'L';
                    break;
                case '#':
                    newSeatMap.push({x: x, y: y, val: (occupied.length >= 4) ? 'L' : '#'})
                    // seat.val = (occupied.length >= 4) ? 'L' : '#';
                    break;
                case '.':
                    newSeatMap.push({x: x, y: y, val: '.'})
                    break;
            }
        }
    }

    return newSeatMap;
}

function getNearby(seatMap, startX, startY) {
    let out = [];
    for(let y = startY-1; y <= startY+1; y++) {
        for (let x = startX-1; x <= startX+1; x++) {
            let seat = seatMap.filter(seat => seat.x === x && seat.y === y)[0];
            if (seat !== undefined) {
                out.push(seat);
            }
        }
    }
    return out;
}

function print(seatMap, maxX, maxY, round) {
    let out = `Round ${round}\n`;
    for(let y = 0; y <= maxY; y++) {
        let row = '';
        for (let x = 0; x <= maxX; x++) {
            row += seatMap.filter(s => s.x === x && s.y === y)[0].val + ' ';
        }
        out += row + '\n';
    }
    console.log(out + '\n');
}


function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1(input));
// console.log("Part 2 - " + part2(input));
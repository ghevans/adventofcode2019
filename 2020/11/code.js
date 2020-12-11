const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let prevSeatMap = input;
    let i = 0;
    while (true) {
        let curSeatMap = doRound(prevSeatMap);
        
        // print(curSeatMap, i+1);
        if (noChanges(prevSeatMap, curSeatMap)) {
            return curSeatMap.flat().filter(s => s === '#').length;
        }
        prevSeatMap = curSeatMap;
        i++;
    }
}

function noChanges(prevSeatMap, curSeatMap) {
    for(let y = 0; y < prevSeatMap.length; y++) {
        for (let x = 0; x < prevSeatMap[0].length; x++) {
            let prevSeat = prevSeatMap[y][x];
            let curSeat = curSeatMap[y][x];
            if (prevSeat !== curSeat) {
                return false;
            }
        }
    }
    return true;
}

function doRound(seatMap) {
    let newSeatMap = [];

    for(let y = 0; y < seatMap.length; y++) {
        let row = [];
        for (let x = 0; x < seatMap[0].length; x++) {
            let seat = seatMap[y][x];
            let nearby = getNearby(seatMap, x, y);
            let occupied = nearby.filter(s => s === '#');

            switch (seat) {
                case 'L':
                    row.push((occupied.length === 0) ? '#' : 'L');
                    break;
                case '#':
                    row.push((occupied.length >= 4) ? 'L' : '#');
                    break;
                case '.':
                    row.push('.');
                    break;
            }
        }
        newSeatMap.push(row);
    }

    return newSeatMap;
}

function getNearby(seatMap, startX, startY) {
    let out = [];
    for(let y = startY-1; y <= startY+1; y++) {
        let row = seatMap[y];
        if (row !== undefined) {
            for (let x = startX-1; x <= startX+1; x++) {
                let seat = row[x];
                if (seat !== undefined && !(x === startX && y === startY)) {
                    out.push(seat);
                }
            }
        }
    }
    return out;
}

function print(seatMap, round) {
    let out = `Round ${round}\n`;
    for(let y = 0; y < seatMap.length; y++) {
        let row = '';
        for (let x = 0; x < seatMap[0].length; x++) {
            row += seatMap[y][x] + ' ';
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
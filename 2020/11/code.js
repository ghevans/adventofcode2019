const _ = require('lodash');
const input = require('./input');

function part1(input) {
    return runSim(input, 4, false);
}

function part2(input) {
    return runSim(input, 5, true);
}

function runSim(input, tolerance, part2) {
    let prevSeatMap = input;
    while (true) {
        let newSeatMap = doRound(prevSeatMap, tolerance, part2);

        if (noChanges(prevSeatMap, newSeatMap)) {
            return newSeatMap.flat().filter(s => s === '#').length;
        }
        prevSeatMap = newSeatMap;
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

function doRound(seatMap, tolerance, part2) {
    let newSeatMap = [];

    for(let y = 0; y < seatMap.length; y++) {
        let row = [];
        for (let x = 0; x < seatMap[0].length; x++) {
            let seat = seatMap[y][x];
            let nearby = (part2) ? getFirstVisible(seatMap, x, y) : getAdjacent(seatMap, x, y);
            let occupied = nearby.filter(s => s === '#');

            switch (seat) {
                case 'L':
                    row.push((occupied.length === 0) ? '#' : 'L');
                    break;
                case '#':
                    row.push((occupied.length >= tolerance) ? 'L' : '#');
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

function getAdjacent(seatMap, startX, startY) {
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

function getFirstVisible(seatMap, startX, startY) {
    let slopes = [[-1,-1],[-1,0],[-1,1],
                  [0,-1],[0,1],
                  [1,-1],[1,0],[1,1]];

    let out = [];
    for (slope of slopes) {
        let i = 1;
        while (true) {
            let row = seatMap[startY+(slope[0]*i)];
            if (row === undefined) { break; }
            
            let pos = row[startX+(slope[1]*i)];
            if (pos === undefined) { break; }

            if (pos !== '.') { 
                out.push(pos);
                break;
            }
            i++;
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
    console.log(out);
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
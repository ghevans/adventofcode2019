const _ = require('lodash');
const input = require('./input');

const small = `.#..#
.....
#####
....#
...##`.split('\n')
        .map(l => l.split(''));

const part2test = `.#..##.###...#######
##.############..##.
.#.######.########.#
.###.#######.####.#.
#####.##.#.##.###.##
..#####..#.#########
####################
#.####....###.#.#.##
##.#################
#####.##.###..####..
..######..##.#######
####.##.####...##..#
.#####..#.######.###
##...#.##########...
#.##########.#######
.####.#.###.###.#.##
....##.##.###..#####
.#.#.###########.###
#.#.#.#####.####.###
###.##.####.##.#..##`.split('\n')
.map(l => l.split(''));

function buildMap(input) {
    let map = {};
    _(input).forEach((line, y) => {
        _(line).forEach((val, x) => {
            if (val === '#') {
                map[`${x},${y}`] = { x: x, y: y};
            }
        })
    })
    return map;
}

function detect(map, astr) {
    let angleMap = {};
    _(map).filter(o => `${o.x},${o.y}` !==`${astr.x},${astr.y}`)
        .forEach(o => {
            let angle = Math.atan2(astr.y - o.y, o.x - astr.x) * 180 / Math.PI;
            if (angleMap[angle] === undefined) {
                angleMap[angle] = `${o.x},${o.y}`;
            }
        });

    return angleMap;
}

function part1(input) {
    let map = buildMap(input);
    let maxSeen = { seen: 0};
    _(map).forEach(astr => {
        let seen = Object.keys(detect(map, astr)).length;
        if (seen > maxSeen.seen) {
            maxSeen = {
                astr: astr,
                seen: seen
            }
        }
    })
    return maxSeen;
}

function part2(input) {
    let map = buildMap(input);
    let laser = part1(input).astr;
    delete map[`${laser.x},${laser.y}`];

    let vaporized = [];
    console.log(laser);
    console.log(map);
    let detected = detect(map, laser);
    console.log(detected);
    
    let start = 90;
    for (let i = 0; i < 360 ; i++) {
        if (start - i < 0) {
            if (detected[`${360 + (start - i)}`]) {
                vaporized.push(`${detected[`${360 + (start - i)}`]}`);
                delete map[`${detected[`${360 + (start - i)}`]}`];
            }
        } else {
            if (detected[`${start - i}`]) {
                vaporized.push(`${detected[`${start - i}`]}`);
                delete map[`${detected[`${start - i}`]}`];
            }
        }
    }
    console.log(vaporized);
    console.log(map);
    return 1;
}

// console.log("Part 1 - " + JSON.stringify(part1(input)));
console.log("Part 2 - " + JSON.stringify(part2(small)));
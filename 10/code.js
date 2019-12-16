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

function part1(input) {
    let astrMap = parseMap(input);
    let detected = astrMap.map(astr => detect(astrMap, astr));

    let mostSeen = detected.sort((a, b) => {
        return b.detected.length - a.detected.length;
    })[0];

    return { astrMap, detected: mostSeen.detected, laser: mostSeen };
}

function part2(input) {
    let laser = part1(input).laser;
    let uniqAngles = Array.from(new Set(laser.beams.map(b => b.angle)))
        .sort((a, b) => {
            const aa = (a + 360 - 90.001) % 360;
            const ab = (b + 360 - 90.001) % 360;
            return ab - aa
        });

    let vaporized = [];
    while (vaporized.length < 200) {
        let i = vaporized.length;
        let curAngle = uniqAngles[i % uniqAngles.length];

        let nextAsteroid = [].concat(laser.beams)
            .filter(b => b.angle === curAngle)
            .filter(astr => !astr.vaporized)
            .sort((a,b) => {
                a.dist - b.dist;
            });
            
        if(nextAsteroid[nextAsteroid.length -1] !== undefined) {
            let shoot = nextAsteroid[nextAsteroid.length -1];
            shoot.vaporized = true;
            vaporized.push(shoot);
            // console.log(`Vaporized [${vaporized.length}]: ${shoot.x},${shoot.y} angle ${shoot.angle}`);
        }
    }
    let lastAstr = vaporized[vaporized.length-1];
    return (lastAstr.x * 100) + lastAstr.y;
}

function parseMap(input) {
    const asteroids = [];
    _(input).forEach((line, y) => {
        _(line).forEach((val, x) => {
            if (val === '#') {
                asteroids.push({
                    x: x,
                    y: y
                });
            }
        })
    })
    return asteroids;
}

function detect(asteroids, laser) {
    const others = [].concat(asteroids).filter(astr => !(astr.x === laser.x && astr.y === laser.y));

    const beams = others.map(astr => {
        return {
            x: astr.x,
            y: astr.y,
            dist: Math.sqrt(Math.pow(laser.x - astr.x, 2) + Math.pow(astr.y - laser.y, 2)),
            angle: Math.atan2(laser.y - astr.y, astr.x - laser.x) * 180 / Math.PI
        }
    });

    const detected = Array.from(new Set(beams.map(b => b.angle))).map(angle => {
        const shared = [].concat(beams)
            .filter(astr => astr.angle === angle)
            .sort((a, b) => {
                return a.dist - b.dist
            });
        return shared[0];
    })

    laser.beams = beams;
    laser.detected = detected;
    return laser;
}

const test2 = `.#..##.###...#######
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
console.log("Part 1 - " + part1(input).detected.length);
console.log("Part 2 - " + JSON.stringify(part2(input)));
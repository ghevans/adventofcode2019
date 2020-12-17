const { isUndefined } = require("lodash");

let input = `.......#
....#...
...###.#
#...###.
....##..
##.#..#.
###.#.#.
....#...`;

let test = `.#.
..#
###`;

module.exports = 
    input.split('\n')
        .flatMap((row, y) => { 
            return row.split('')
                .map((val, x) => { 
                    if (val === '#') {
                        return { 
                            x: x,
                            y: y,
                            z: 0
                        }
                    }
                })
                .filter(val => val !== undefined)
            });
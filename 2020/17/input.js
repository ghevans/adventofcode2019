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

let output = new Map();
test.split('\n')
    .map((row, y) => {
        row.split('')
           .map((val, x) => {
                output.set(`${x},${y},0`, val);
            })
        });

module.exports = output;
// test.split('\n')
//                      .map(row => row.split(''));
                        //     .map((val, x) => { 
                        //         return { 
                        //             x: x,
                        //             y: y,
                        //             z: 0,
                        //             state: val
                        //         }
                        //     })
                        // });
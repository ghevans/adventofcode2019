let input = `1,3,-11
17,-10,-8
-1,-15,2
12,-4,-4`
    .split('\n')
    .map(loc => {
        let parts = loc.split(',')
        return {
            x: Number(parts[0]),
            y: Number(parts[1]),
            z: Number(parts[2]),
            vx: 0,
            vy: 0,
            vz: 0
        }
    });

module.exports = input;
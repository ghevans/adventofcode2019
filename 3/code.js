const _ = require('lodash');
const input = require('./input');

function part1(input) {
    let maze = {};
    walkRoute(maze, input[0], 1);

    return _(walkRoute(maze, input[1], 2))
            .map(point => {
                return Math.abs(point.x) + Math.abs(point.y);
            })
            .min();
}

function walkRoute(maze, line, number) {
    let output = [], x = 0, y = 0, totalSteps = 0;
    let steps = line.split(',');
    _(steps).forEach(step => {
        for(let i = 1; i <= Number(step.substring(1)); i++) {
            totalSteps++;
            switch(step[0]) {
                case 'U':
                    y += 1;
                    break;
                case 'D':
                    y -= 1;
                    break;
                case 'L':
                    x -= 1;
                    break;
                case 'R':
                    x += 1;
                    break;
            }
            if (maze[x+','+y] === undefined) {
                maze[x+','+y] = {
                    num: number,
                    steps: totalSteps
                };
            } else if (maze[x+','+y].num !== number) {
                output.push({ x: x, y: y, steps: maze[x+','+y].steps+totalSteps});
            }
        }
    });

    return output;
}

function part2(input) {
    let maze = {};
    walkRoute(maze, input[0], 1);
    return _(walkRoute(maze, input[1], 2))
            .map(point => {
                return point.steps;
            })
            .min();
}

console.log("Part 1 - " + part1(input));
console.log("Part 2 - " + part2(input));
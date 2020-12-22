const _ = require('lodash');
const {p1, p2, t1, t2} = require('./input');

function part1() {
    // let p1 = t1, p2 = t2;
    while(p1.length > 0 && p2.length > 0) {
        // console.log(`-- Round ${i} --`)
        playRound(p1,p2);
    }
    // console.log(`== Post-game results ==\nPlayer 1's deck: ${p1}\nPlayers 2's deck: ${p2}`)
    let winner = (p1.length > 0) ? p1 : p2;
    let multi = 1;
    let score = 0;
    while(winner.length > 0) {
        score += (winner.pop()*multi)
        multi++;
    }
    return score;
}

function playRound(p1, p2) {
    // console.log(`Player 1's deck: ${p1}\nPlayer 2's deck: ${p2}`);
    let p1Card = p1.shift(), p2Card = p2.shift();
    // console.log(`Player 1 plays: ${p1Card}\nPlayer 2 plays: ${p2Card}`)
    if (p1Card > p2Card) {
        // console.log(`Player 1 wins the round!\n`)
        p1.push(p1Card,p2Card);
    } else {
        // console.log(`Player 2 wins the round!\n`)
        p2.push(p2Card, p1Card);
    }
}

function part2(input) {
    return "tbd";
}

console.log("Part 1 - " + part1());
// console.log("Part 2 - " + part2(input));
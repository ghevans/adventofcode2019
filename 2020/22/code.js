const _ = require('lodash');
const {p1, p2, t1, t2} = require('./input');

function part1() {
    // let p1 = t1, p2 = t2, i = 1;
    let player1 = _.cloneDeep(p1), player2 = _.cloneDeep(p2);
    while(player1.length > 0 && player2.length > 0) {
        // console.log(`-- Round ${i} --`)
        playRound(player1,player2);
    }
    // console.log(`== Post-game results ==\nPlayer 1's deck: ${p1}\nPlayers 2's deck: ${p2}`)

    return (player1.length > 0) ? getScore(player1) : getScore(player2);
}

function getScore(deck) {
    let multi = 1;
    let score = 0;
    while(deck.length > 0) {
        score += (deck.pop()*multi)
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

function part2() {
    // let p1 = t1, p2 = t2;

    playGame(p1,p2,1);
    
    return (p1.length > 0) ? getScore(p1) : getScore(p2);
}

function playGame(p1, p2, gameNumber) {    
    let history = new Set();
    let round = 1;
    // console.log(`=== Game ${gameNumber} ===`)
    while(p1.length > 0 && p2.length > 0) {
        if (history.has(`p1:${p1}`) || history.has(`p2:${p2}`)) {
            return 1;
        }
        history.add(`p1:${p1}`)
        history.add(`p2:${p2}`)

        // console.log(`-- Round ${round} (Game ${gameNumber}) --`)
        playAdvancedRound(p1, p2, gameNumber, round);
        round++;
    }

    return (p1.length > 0) ? 1 : 2;
    // console.log(`== Post-game results ==\nPlayer 1's deck: ${p1}\nPlayers 2's deck: ${p2}`)
}

function playAdvancedRound(p1, p2, gameNumber, round) {
    // console.log(`Player 1's deck: ${p1}\nPlayer 2's deck: ${p2}`);
    let p1Card = p1.shift(), p2Card = p2.shift();
    // console.log(`Player 1 plays: ${p1Card}\nPlayer 2 plays: ${p2Card}`)

    if (p1.length >= p1Card && p2.length >= p2Card) {
        // console.log(`Playing a sub-game to determine winner`)

        let winner = playGame(p1.slice(0,p1Card), p2.slice(0,p2Card), gameNumber+1);
        if (winner === 1) {
            p1.push(p1Card, p2Card);
        } else {
            p2.push(p2Card, p1Card);
        }
    } else {
        if (p1Card > p2Card) {
            // console.log(`Player 1 wins the round ${round} of game ${gameNumber}!\n`)
            p1.push(p1Card,p2Card);
        } else {
            // console.log(`Player 2 wins the round ${round} of game ${gameNumber}!\n`)
            p2.push(p2Card, p1Card);
        }
    }
}

console.log("Part 1 - " + part1());
console.log("Part 2 - " + part2());
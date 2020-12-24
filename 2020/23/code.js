const _ = require('lodash');
const input = require('./input');

const test = `389125467`.split('').map(Number);

function part1(input, moves) {
    let curPos = 0;
    let cups = input;
    for(let i = 0; i < moves; i++) {
        let curVal = cups[curPos];
        let nextVal = cups[(curPos+4)%cups.length];
        let toMove = pickUp(cups,curPos+1);
        _.remove(cups, function(val) { return toMove.includes(val);});
        
        cups.splice(getDest(cups, curVal)+1, 0, ...toMove);
        curPos = cups.indexOf(nextVal);
    }
    
    return getAnswer(cups);
}

function getAnswer(cups) {
    let ans = '';
    let start = cups.indexOf(1);
    for(let i = 1; i < cups.length; i++) {
        ans += cups[(start+i)%cups.length]
    }
    return ans;
}

function pickUp(cups, start) {
    let out = [];
    for(let i = 0; i < 3; i++) {
        out.push(cups[(start+i)%cups.length])
    }
    return out;
}

function getDest(cups, curVal) {
    let sub = 1;
    while (true) {
        if (curVal-sub === 0) {
            return cups.indexOf(Math.max(...cups));
        }
        let nextIndex = cups.indexOf(curVal-sub);
        if(nextIndex >= 0) {
            return nextIndex;
        }
        sub++;
    }
}

function part2(input, numCups) {
    let cups = input;
    let pointers = buildPointers(cups, numCups);
    let currentCup = pointers[0];

    for(let i = 0; i <= 10000000; i++){
        let moved1 = pointers[currentCup];
        let moved2 = pointers[moved1];
        let moved3 = pointers[moved2];

        let nextIndex = getNextIndex(currentCup, [moved1,moved2,moved3], numCups);

        let temp = pointers[moved3];
        pointers[moved3] = pointers[nextIndex];
        pointers[nextIndex] = pointers[currentCup];
        pointers[currentCup] = temp;

        currentCup = pointers[currentCup];
    }
    return pointers[1] * pointers[pointers[1]];
}

function buildPointers(cups, numCups) {
    let out = [...Array(numCups+1).keys()].map(val => ++val);
    out[0] = out[out.length-1] = cups[0]; // pointer at 0 and 999999 both go to first cup in our string
    out[cups[cups.length - 1]] = Math.max(...cups) + 1; // connect last cup to start of the +1 array to million

    for(let i = 0; i < cups.length - 1; i++){
        out[cups[i]] = cups[i+1];
    }
    
    return out;
}

function getNextIndex(curIndex, removedCups, numCups) {
    if (curIndex !== 1) {
        let nextIndex = curIndex - 1;
        while(removedCups.includes(nextIndex)) {
            nextIndex--;
        }
        if(nextIndex === 0) {
            return numCups;
        }
        return nextIndex;
    } 
    return numCups;
}

// console.log("Part 1 - " + part1(input, 100));
console.log("Part 2 - " + part2(input, 1000000));
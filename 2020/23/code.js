const yallist = require('yallist');
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

function part2(input, moves) {
    let cups = test;
    let list = yallist.create();
    for(let i = 0; i < 1000000; i++) {
        if (cups[i] !== undefined) {
            list.push(cups[i])
        } else {
            list.push(i);
        }
    }
    list.get(list.length-1).
    console.log(`done: ${list.length} | ${list.get(list.length-1)}`)
    // let curPos = 0;
    // let cups = test;
    // for(let i = 0; i < moves; i++) {
    //     let curVal = cups[curPos];
    //     let nextVal = cups[(curPos+4)%cups.length];
    //     let toMove = pickUp(cups,curPos+1);
    //     _.remove(cups, function(val) { return toMove.includes(val);});
        
    //     cups.splice(getDest(cups, curVal)+1, 0, ...toMove);
    //     curPos = cups.indexOf(nextVal);
    // }
    
    // return getAnswer(cups);
}

// console.log("Part 1 - " + part1(input, 100));
console.log("Part 2 - " + part2(input,10000000));
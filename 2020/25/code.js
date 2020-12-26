const _ = require('lodash');
const {card, door} = require('./input');
const testCard = 5764801;
const testDoor = 17807724;

const divisor = 20201227;
const subjectNumber = 7;

function part1(card, door) {
    return getEncryptionKey(card, findLoopNumber(door));
}

function getEncryptionKey(subjectNumber, loopNumber) {
    let key = 1;
    for(let i = 0; i < loopNumber; i++) {
        key = (key*subjectNumber) % divisor;
    }
    return key;
}

function findLoopNumber(input) {
    let newNum = subjectNumber % divisor, loopNumber = 1;
    while(newNum != input) {
        newNum = (newNum*subjectNumber) % divisor;
        loopNumber++;
    }
    return loopNumber;
}

console.log("Part 1 - " + part1(card, door));
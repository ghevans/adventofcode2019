const _ = require('lodash');
const input = require('./input');

function part1(seq, dur) {
    for (let i = seq.length; i <= dur; i++) {
        let last = seq[i-1];
        if(seq.filter(v => v == last).length === 1) {
            seq.push(0);
        } else {
            let occur = seq.reduce(function(out,val,index) {
                if (val === last) {
                    out.push(index);
                }
                return out;
            }, []);
            let diff = occur.slice(-2)
            seq.push(diff[1] - diff[0]);
        }

        if (i % 100000 === 0) {
            console.log(i);
        }
    }
    return seq[dur-1];
}

function part2(seq, dur) {
    let map = {};
    seq.forEach((val,index) => map[val] = [index]);
    let next = seq[seq.length-1];
    let last = '';
    for(i = seq.length; i <= dur; i++) {
        last = next;
        let occur = map[last];
        if (occur.length === 1) {
            if (map['0'] === undefined) {
                map['0'] = [i];
            } else {
                map['0'].push(i);
                map['0'] = map['0'].slice(-2); // only keep 2 around
            }
            next = '0'
        } else {
            next = occur[1] - occur[0];
            if (map[next] === undefined) {
                map[next] = [i]
            }
             else {
                map[next].push(i);
                map[next] = map[next].slice(-2); // only keep 2 around
            }
        }
    }
    return last;
}

console.log("Part 1 - " + part1(input, 2020));
console.log("Part 2 - " + part2(input, 30000000));
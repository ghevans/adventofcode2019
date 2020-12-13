let input = `29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,661,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,x,x,x,x,23,x,x,x,x,x,x,x,521,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19`;
let test = `5,2,3`

module.exports = input.split(',')
                      .map((val,index) => { 
                            if (val !== 'x') {
                                return {val: Number(val), offset: index }
                            }})
                      .filter(o => o !== undefined);
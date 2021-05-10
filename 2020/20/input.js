const Tile = require('./tile.js')

let input = `Tile 2647:
#....#####
.##......#
##......##
.....#..#.
.........#
.....#..##
#.#....#..
#......#.#
#....##..#
...##.....

Tile 1283:
######..#.
#.#..#.#..
..#..#...#
.#.##..#..
#......#..
#.#....##.
.#.....#.#
#.#..#.#.#
.#......##
...##.....

Tile 3547:
#.#.#.###.
#.........
#....##...
#.....#..#
#.....#.#.
##..##...#
#...##....
......#..#
#...##....
.....###.#

Tile 1451:
##..#.#...
#.#.......
##.#.....#
....#.....
...#...##.
......#.#.
#...##.##.
........#.
.#.##.#...
..##..#...

Tile 3137:
....#.##.#
#....#...#
..#.#.....
...####..#
.#.###...#
.......#..
##.##.#..#
.#.##....#
#...#....#
..##.##..#

Tile 2897:
###..#.##.
..#......#
.....#....
###.#....#
#.#..#...#
.#...##..#
##..##.##.
#.....#..#
.#......##
#.#.#.##.#

Tile 1093:
..#.#.#.#.
#.#.......
..##....#.
.#.....#.#
#........#
.#....#..#
##....#..#
#.##..#..#
..###...##
.######.##

Tile 1217:
#..#....##
#.....#...
##...##..#
#.....#...
..#.#..#..
#..#....##
.##.#.....
......#...
.#........
.#..###.#.

Tile 2801:
###..##.#.
.........#
##.#...###
#......#..
#........#
......#...
##.####...
.....##...
..#..#.##.
...###.##.

Tile 1361:
...#.##..#
....#.....
###.......
#......#..
.......##.
#...#..#..
#.....##.#
##........
#.#.......
###.#..###

Tile 2063:
...#....##
##...#..##
#........#
........##
#.......##
#.........
##.....##.
.....##..#
.#.##.#...
.#..#####.

Tile 3797:
##..#...#.
.###.#.##.
.....#.##.
..#.......
...#.#....
........##
#.#.#.##.#
#.....#.##
#.......#.
.....#.##.

Tile 1289:
####.##.#.
.....#....
#..#.#....
####...#..
#.#..#..#.
.#.##..#..
#........#
....#..#..
........#.
###.#.####

Tile 1427:
##.##..##.
###..#.##.
#..##...#.
#..#.#...#
#........#
#...##....
#........#
.....#..#.
.####....#
##.#.##.#.

Tile 1951:
....##.#.#
.........#
#........#
.#..#...#.
.....#####
#......#.#
...##....#
......#...
..#...#..#
....####.#

Tile 1483:
....####..
.......#.#
###..#..##
...#.#...#
#..##...##
##.#......
#...#..#..
..#...#.##
.........#
.#...#....

Tile 1789:
##..#####.
....#....#
........#.
..#.#..#.#
..##.#..##
.........#
.........#
#..#.#..##
....##....
#.#.......

Tile 2129:
#.###.#..#
....##...#
.#..#..##.
...###.##.
..#..#...#
....##...#
#.........
#...#..###
#...#.....
...#....##

Tile 2137:
..#.####.#
##...#.#..
.......###
.#.....#.#
.#....##.#
#.......#.
#....#...#
#.....####
......##.#
..#####.##

Tile 3761:
.####.#...
####..#..#
#...##..##
.#.....#.#
....#....#
#.......#.
...#..#..#
#.##...##.
...###...#
...##.#..#

Tile 1327:
..####.#.#
#..#......
......#.##
#..##.....
..##.##..#
#.#.#.....
####.....#
..#.......
#.#...##..
#.##....#.

Tile 2741:
.#..#...#.
#....#..#.
......##.#
....#.#..#
........##
...#..#...
......##..
#...#..#.#
......##..
..#..#..#.

Tile 1699:
.###..####
##.....#.#
.....##.##
#.#...##..
.#........
.#....#..#
#..#....#.
.#...#...#
#.......#.
##.#..#..#

Tile 1151:
..#.##....
##....#...
###.#..#.#
#.......##
....#.#..#
#...###...
.#..#.#..#
#.#..##..#
.#.#.#.#..
.###..####

Tile 2273:
#.#.#.#.##
..........
#......#..
#.....#...
#.#...#...
##....##..
##..##.#..
#.#####.##
##.##...##
#...##..##

Tile 1999:
##.##...##
#......#..
##..#.....
#........#
#.#...####
..#....#.#
#..#...#..
.........#
#...##....
##.##.##..

Tile 1721:
....##...#
###.#....#
.##..#....
.#.#.#....
...##....#
##..#....#
#....#.###
#.....##..
....#...##
..#.#.#..#

Tile 2521:
..#######.
#.#..##.#.
.#....##.#
..#...####
.......##.
##...###..
...##....#
.##.#.....
###..##..#
####.##.#.

Tile 2111:
..#.#..#..
...#.....#
..####...#
.#.#..##.#
.##..#.##.
........##
........##
#..#.#....
...#.###..
.#.#...#..

Tile 2767:
.#######..
##.......#
#...#.##..
....#...##
#........#
..#.###...
....#..#.#
##....#.##
..##....##
.#####.#..

Tile 2141:
####.#....
#..#.#...#
...#..#..#
.......#..
.....###.#
#....#....
.......#.#
.#...#..##
...#......
.###.####.

Tile 2557:
.#.##..#..
..##.....#
#.#.#....#
..##...#..
...#..##.#
..........
##......##
#..#......
#.#..#...#
##.#####..

Tile 2269:
.#.#...##.
#.......##
#.....##..
##.#......
#.##..###.
.#.....##.
....#....#
....#...##
#..##.....
#.#.#.#.##

Tile 3511:
.#.#.##...
.#.....##.
.#....#..#
#.#......#
#.#.#.....
#........#
..#.......
.##.#.....
##.#.....#
..####..##

Tile 2789:
#......#..
#...#.....
#.........
.......#.#
...#....##
#.##..###.
#...##...#
.........#
.........#
.###..##..

Tile 2971:
#.##.#....
...#.....#
.#....#...
#.#..##...
#.....#...
####.....#
#..###..##
#....#....
#..#.##...
#.#..###..

Tile 3719:
#.###.....
...#.....#
...##...##
.#..#.#..#
#..#.#..#.
#.#..#..##
#...###..#
.#.#..#.##
........#.
#....###..

Tile 1901:
.#...##.##
#.........
.#.#.....#
#.##.....#
#........#
#....#...#
.....##.##
##.###..##
....#....#
....##..##

Tile 3191:
#.#..###.#
#...#..##.
#.....#...
.#.#.#....
.#..##....
#.....#.#.
.##.......
....#....#
#..##.#...
####....##

Tile 3709:
..#......#
#..#...#.#
#.##....#.
.#..#.##..
..#......#
#....##...
##........
....#....#
.........#
.#.#..###.

Tile 1613:
...##..##.
#......#..
..##.#..##
......##..
.#..#..##.
.......##.
.......#.#
...#.#....
#......#.#
###..#....

Tile 2441:
..#.######
#.#.......
#..#.#....
....#...##
#...#...##
#.##...#.#
........##
#.#...#...
#..####.##
#.##.####.

Tile 1409:
..####.#.#
..##....#.
..#.#...#.
..##.##...
.#.##....#
#.....##.#
####.....#
###....#..
####..#.#.
#..##.##.#

Tile 1523:
.#.##..##.
#..#.#....
##.#.#...#
....#.##.#
#........#
#.#.......
#...##...#
...#..##.#
#.##...#..
.####..#..

Tile 1367:
#..#...#.#
#.#.......
..#..#....
.###..###.
###..#.##.
##...#..#.
#..#...#.#
......##..
##.....#.#
.#####..##

Tile 1783:
...#.####.
.####..#..
#....#.###
#.#..#.#.#
#.#.#.#..#
#.......##
#.##.#.#..
.#.#....#.
#..#.#...#
.###..##.#

Tile 1871:
.##..#.##.
#........#
#...#....#
##.#..##..
##.....##.
#.....#.##
........##
....#....#
#.........
....#.#..#

Tile 3217:
#.#...#.##
.........#
.........#
#...#.....
#....#.#.#
.........#
...#.##.##
#...#.....
.#..#....#
#..###.#.#

Tile 3163:
...##.#.##
#.#......#
....#...##
#.......##
###..#.#..
.#....####
##....#.##
#.......#.
.....#..#.
.##.#.#.##

Tile 3271:
##.#.#.##.
##....##.#
#.#.##..##
#.#...##.#
.##......#
#.....#.#.
#........#
##..##....
#.#..##..#
#..#.####.

Tile 2707:
..###.#...
#...#.....
#.#..#....
#..##...##
.###......
.#..##...#
#...#.....
....#.....
#..#.#....
.##....#.#

Tile 3083:
##..#.#.##
#..#....##
.........#
..#.#...##
..#.......
.#.#.....#
..#..#.#..
#...#.#..#
#..#.#....
#.###..##.

Tile 1051:
####...##.
...#.#...#
..........
..#.......
#......#..
.#.##.##..
#....#.#.#
#..#.#...#
#.#..##..#
......###.

Tile 3767:
.#..##.###
...#.#....
..#.....#.
#.#.......
.#.....#.#
##..#....#
#...#..#.#
........##
#........#
..#....##.

Tile 2267:
.#..#..#..
.#.#.#....
.#......#.
#...#....#
.###..#...
.##.#...##
..#.##.##.
...#.#.##.
##.#.##..#
.#.##.....

Tile 1973:
#.#####..#
.#.......#
#..#.#..#.
#.#.#.#.#.
.##.......
#.#.....#.
.#.......#
#...##.#.#
##.......#
.##...####

Tile 3671:
#..##.#.##
....##...#
.###.##...
.........#
#..#.....#
..##...#..
......#...
..#..#..##
..#.......
##..###..#

Tile 3221:
#.#..###.#
#..#....##
#..#......
#...#...##
..#..#..#.
#..##...#.
...#....#.
.....#..#.
##..#..#..
.....#...#

Tile 1549:
.###.##..#
#.#.##...#
#....#....
..........
#.#......#
##.#.#..##
...#.#..##
........#.
#.#....###
#....#...#

Tile 3461:
.######..#
#.......##
.......#..
.#...#....
..##....#.
#.....##..
##.#.#..#.
.........#
##.##.#...
....#...##

Tile 2459:
..##.##.#.
...#..#...
.........#
#.#..#..##
#.###.#...
##.#......
.......#..
.........#
........##
#.##...#..

Tile 3203:
.#...####.
..##..#.#.
#..#..##..
#.#....##.
...#.#....
.......###
#.....##..
....#....#
#......#..
###.......

Tile 2203:
#.#..##.##
.......#..
......#.##
#.......##
#..##.##.#
..#.....##
#.##.....#
#.#....#..
.##.....##
......#...

Tile 3637:
#...###.#.
#.........
..#.......
...#.....#
#..##....#
#........#
.......#..
#....#.#..
#.#..##..#
..#.#..##.

Tile 2467:
..##.##...
##....####
...#.#.#.#
#.##...#.#
...##.##..
#.....#...
##........
..#...#.#.
#...####.#
#......###

Tile 2411:
...##....#
...##..###
...##.####
#.#..##.#.
..##.#.###
.#..#.###.
....####.#
.....##.#.
#.........
.#..#..###

Tile 2221:
####.....#
#.#.....##
.#....#...
.#.#......
.##..#..#.
....#.....
.........#
##.......#
#....#....
.##.######

Tile 1487:
..#..##...
.........#
#..#...###
....#...#.
.#...##.#.
.....#.#.#
.....##...
#.##......
#.#.......
#.#####.#.

Tile 1481:
#.###.##..
....##...#
....#.....
...#......
##.###.#.#
#.##..####
..#......#
.#....##.#
..##.##.#.
.#####.#.#

Tile 1669:
#...##.##.
...#..#...
.##..#.#.#
#..#..#..#
#......#.#
.#......##
........#.
......#..#
.##..#.#.#
##.##....#

Tile 3167:
.#.####...
.........#
#......##.
.....#....
..#.#...##
#.#.####.#
...#....#.
.........#
#...#.#..#
#.#.#.#.#.

Tile 3347:
###...##..
#.#......#
...#.....#
..........
#.#.....#.
..####..##
..#.#.#..#
##...#..#.
..##.....#
#..#....#.

Tile 2213:
#..#####.#
..........
#..#.##.#.
...###.#.#
......##..
......#..#
.##.....##
..#....###
...####..#
.####.#.##

Tile 3329:
..##...#..
#.#....#.#
#...#..#..
......#.##
#...####.#
..........
##....##.#
#......##.
....##...#
..####.##.

Tile 3851:
#.#....##.
.........#
#.....#...
##.##.....
...#.###..
#....##...
.....#.##.
.#........
#......#.#
...#..#..#

Tile 2659:
#.#...#.#.
.....#.##.
#..##.####
#.#.##....
#....#..#.
...#...#..
...#....#.
#....#.#..
.##.#....#
.....#..#.

Tile 1933:
.####.##..
#..####...
.#..####..
.#.#.##...
......#.#.
##........
.#.#.....#
#..#......
....#.....
...#...##.

Tile 3299:
###.##..#.
.......#..
...#...##.
###...#.##
......##..
....#.#..#
.###......
.#.#####..
#..#.#..#.
.....#.#.#

Tile 3691:
...###...#
#.........
#.#.....##
#.#....#..
#..#...#..
..........
##...##..#
.#...#...#
#.....#.##
.###..#...

Tile 3733:
#..#.#####
.....#....
....###..#
#..#.#....
#.#..#.###
..###...##
......#.##
...###....
...#....#.
..##......

Tile 2131:
##.#..#.#.
.#...#..##
#.......#.
....##...#
.###..#...
...#####..
.....#...#
##..#..##.
..##....#.
.#...####.

Tile 1723:
.....#####
.#.#..#...
##......#.
#.......##
.###...#..
#..#......
#.........
......#..#
.........#
.###.##.##

Tile 3463:
##.#....##
#....##..#
..#.#.....
#.#...#..#
#....#....
..#....#.#
#...#..###
##....#.##
..#.#.....
.#..#.##..

Tile 2549:
#.####.#..
...##....#
##..#.##.#
..###.#..#
#.#......#
#........#
....#.....
#......#.#
#....####.
...##.#.##

Tile 1031:
#..#.#.#.#
......##..
#........#
.###......
..#..#..#.
##....##..
......#...
...#...###
.###...#..
.##.#.###.

Tile 1979:
#.######..
.#.#.....#
#........#
#..##.....
##........
##.....#..
......#...
.........#
.#........
..#.#####.

Tile 2939:
#.#...#.##
.#..#....#
.#.....#.#
##......##
...#..##..
#....#.##.
#...##.#.#
..#...#...
##.....#..
.....##.#.

Tile 2381:
..##.###.#
..##...#..
.#...#....
#......#.#
##.......#
#..####...
...#.#.#.#
#.##.....#
..#......#
#..#.##...

Tile 3943:
#.#.###..#
.......###
#.#...###.
#..##.#..#
#......#..
#.##...#.#
#.........
##....##.#
....#.#...
.###.#....

Tile 1553:
#####.####
#...#.....
#.#.....#.
##......#.
#....#.#..
.#.....#.#
##....#.#.
#........#
.........#
.#.....##.

Tile 2351:
.###.###..
#.....#...
##.##....#
..#..##.#.
#.#.......
#....#....
......##.#
##...##..#
.#.....#..
.#.###..#.

Tile 2311:
#.#.#..##.
#..###.#..
...##..#.#
###.......
##........
#.#.......
..##.....#
.#.####...
..#.#.#...
###..##.#.

Tile 1567:
..###.#.##
.#.....###
#...#..##.
#.......#.
.......#..
#....#....
...#.##.#.
....#...##
....#....#
#.#...##..

Tile 2579:
#.##..##..
#......#..
#..#..#..#
##.......#
....##.#.#
#.####..#.
#..#..#.##
#...#..#.#
...##...#.
#..#.###..

Tile 3593:
.#.##.#.##
#...#....#
..........
##....#..#
##......##
#.........
......#..#
...#.....#
....#....#
##..###..#

Tile 2281:
##....###.
...#......
#......#.#
##.#..#..#
###.#..##.
.#...#...#
..........
.#.###.#..
#..#......
#..#.##.#.

Tile 1193:
.......###
##..#..#..
.###...###
....#.###.
..#...#..#
#.#....#..
...####..#
#....#..##
.#.......#
.#.#...##.

Tile 3833:
...#####..
#..####...
#.#....###
...##.#.##
..#...#..#
.##.#####.
#..#..#..#
#...##....
.....#.#..
.##.##.#.#

Tile 2003:
.#.###.#..
.........#
..#..#....
#.........
#..##....#
.......#.#
......#...
#....##..#
.#......##
..#..##.#.

Tile 2731:
#.#..#..##
....#..#.#
..#...#...
..#..#....
#.#..#...#
#....##...
#.........
#..##..#.#
#.........
.###.#....

Tile 3881:
..##......
#...#..#.#
##...#....
....#.....
##.......#
.....#####
...#....##
.........#
..........
#..##.####

Tile 3673:
##..###.#.
...##....#
###.....##
#..#...#.#
#.##......
..#.#.....
..#.#....#
.###.....#
.###.##...
###.#..#.#

Tile 1021:
#..###.#..
###..##.#.
#..##....#
.....###..
....##...#
....#.....
#.##..#..#
..........
.......#.#
..#.##..#.

Tile 2423:
#.....####
.##.#....#
.#........
##.....#..
#.....###.
#...#...#.
#...#..#.#
.#..#..##.
##.......#
.#####.###

Tile 3923:
..#....###
#.....#..#
#...#.#.#.
.#.......#
#..#.#....
.......#.#
##....##.#
.#..#...#.
#...##..#.
..#.#.#..#

Tile 2753:
..####..#.
#.......#.
#.##.#..##
#.#.#.....
#..#......
....#.#...
.#.#..#..#
#.....#..#
##.#..#...
#####....#

Tile 3929:
....#####.
##..#.##..
##.#.#.##.
##...#.#..
#........#
.##.#..#..
#..#.##...
##..#...#.
.....#...#
###..####.

Tile 3041:
.##.#..#.#
#..#...#..
###..#..#.
.#.#....##
...##.....
#....#..##
#........#
##.#...#..
##....#..#
...#..#..#

Tile 3433:
..#.#.#...
#.#.......
.....#....
..#......#
#..#.....#
........##
##..##.##.
##........
#.#.##..##
###.###..#

Tile 2719:
..##..#..#
#.##..##..
#......#..
#...##..##
..#..#.#.#
#......###
..###..#..
....#.#..#
....##...#
##..#..###

Tile 1201:
.#...##.##
#........#
##...##...
..........
.....#.#..
#.##.....#
...#.##..#
.........#
.#.#.....#
.##...#...

Tile 1129:
...####..#
......##..
#.....##..
#.......#.
#......#..
...##....#
........##
##.#.#.#..
...#..##.#
...##....#

Tile 3019:
..#...###.
.....#.##.
#.##.....#
.#.##..#..
.#..###..#
..#.####.#
#..#.#...#
.......#.#
#..##.#..#
#.##....##

Tile 1747:
##.###.#..
#.......#.
#...#..#.#
##...##.#.
..###.#..#
#..#..##..
#...#.....
..#.......
...#..#.#.
.##..##.##

Tile 1741:
.##.#..#.#
#...##..##
#....#.#.#
##...##..#
##.......#
#...#..##.
...#.##.##
...#..#.#.
.......#.#
.#####.###

Tile 1867:
#..##.....
.......###
#..##....#
##...#....
...###....
##..#.....
.##.......
#.....###.
#...#..#.#
...###....

Tile 2803:
.#.##....#
#.####..#.
#.........
#.#......#
.......#.#
........#.
..#..#.#.#
....###...
#...##....
...###....

Tile 3643:
#..#..#.##
####.#..#.
#.#...#.##
.#..#.....
##....#..#
.##.......
.......#.#
...##.#...
.....#.##.
#...####.#

Tile 2437:
..###..###
....#.....
..........
#.#..#.###
##...####.
....##....
...##.....
##..#.##..
#......#..
#.#.....#.

Tile 1069:
..####....
##..##...#
.#..#..##.
.#....##.#
###.#.#.##
...##..#.#
##....#...
#.#....#.#
.#.....#.#
#.#.#.....

Tile 1381:
.###.#.##.
....#..#..
#.......##
#...#.....
.#...#..##
...#....##
#..#.###..
..######.#
#....#...#
#######.#.

Tile 2617:
..##..#.#.
#.....##.#
..#.#..#..
.##.#..#..
###...#.#.
.###.##...
#.#.......
#..##.#..#
##.....#..
.##..#..##

Tile 2393:
.##..#.#.#
..#.#..###
..##..#.##
....#.....
#...#.....
##.#.....#
.#.#..#.#.
##.....#..
.......#.#
####..#...

Tile 3529:
#.#...##.#
......#..#
.........#
#.....#...
.......#..
.....#.#.#
.....#....
#....#.#.#
....#.##.#
.####.#..#

Tile 2953:
...##...#.
##.#.#..##
#...#.....
##.#...###
...#......
#.#.#..#.#
.#...#...#
##....#.##
.......#..
.#.#..#...

Tile 3617:
#..##...##
......#...
#....#....
..........
.######.##
##..#.#.##
#.#...#...
........#.
.######.##
##...###.#

Tile 3863:
.##.#...##
#...#.....
..#.#....#
#....#..##
.....###..
#.#......#
#.......#.
...#.....#
#.........
..###....#

Tile 3727:
#.###.##.#
..........
...##.....
..#..#..##
#......###
#....##...
###.##....
.....#....
##.####.#.
#..#.#.###

Tile 3803:
###..#.##.
.##......#
.........#
###.....##
....###..#
.......#.#
........##
#..#......
##......##
#.###..#..

Tile 1579:
#...##.###
.....#.###
.##...#...
#.#..#..#.
..##.....#
.........#
..........
#.....#.##
.....#....
.###..#...

Tile 1049:
#..#.##.##
##......##
..#.##...#
#.......#.
###.....#.
.....#.#.#
...#......
..##......
#.#....#..
##..#.#...

Tile 2687:
##..#.##..
.#........
##..#...#.
.#.#.....#
.#..#.#..#
#.###..#..
..#......#
#.......##
#..#.....#
#.##.#..##

Tile 1637:
#..##...##
##..#....#
...#....#.
#....#....
.....#...#
#...#...##
.#....#...
#.........
..#....#..
.#.####...

Tile 3527:
.#....#.#.
#.......#.
..#....#.#
####.#.#.#
...#..#...
###..#.###
##..#....#
#.##....##
..#......#
.....#.#..

Tile 2963:
#.#.#.#.#.
#.....#...
##.#.....#
..##......
..#.......
.#...#.##.
###......#
##....#..#
.#...#..##
..##..##.#

Tile 2287:
##.######.
.#.##.##..
#..#....##
##.#.#...#
.......##.
#...##...#
...##..#..
##....#.#.
....#.##..
..#.#..###

Tile 3677:
###.....##
#..#.#..#.
#.#.......
.....#..##
..........
......#.##
.....#..#.
#..#...#..
.##......#
#...##.##.

Tile 3559:
..#..#.##.
###......#
..#.##....
#.#..#....
##..##..##
..#...#.#.
#.....#.##
....#....#
...#.#...#
...#.###..

Tile 2837:
..#...#...
.....##...
#.#..#...#
....#....#
...####.##
#.........
...#...##.
.#..###.#.
....#.....
.###.##.#.

Tile 3539:
..##....#.
........#.
......#..#
...#..#...
###....###
#...#.....
.#........
#.....#...
..##.#..#.
..###..#.#

Tile 1667:
.#..####..
.....#....
......#...
#.#...##.#
#...#.#..#
##.#.#...#
##..#..#..
#...##...#
.#..###...
..#..####.

Tile 2791:
#.##.###.#
...#..#...
##.....###
...#.#..##
.........#
.###...#..
...#.....#
##.....##.
###.......
#..#.#....

Tile 2609:
..##.#....
##.#.#...#
#.#..#....
#.........
...#..#..#
#...#.#...
##.##....#
.###......
##.....##.
#.#...#.#.

Tile 3061:
####..#.##
#.....##..
..........
......#...
..#.#..###
.#.#..#..#
.#...#...#
#........#
.....#.#..
#..#....##`.split('\n\n').map(tile => {
    let parts = tile.split(`:\n`);
    return new Tile(parts[0].slice(-4), parts[1].split('\n'));
});

let test = `Tile 2311:
..##.#..#.
##..#.....
#...##..#.
####.#...#
##.##.###.
##...#.###
.#.#.#..##
..#....#..
###...#.#.
..###..###

Tile 1951:
#.##...##.
#.####...#
.....#..##
#...######
.##.#....#
.###.#####
###.##.##.
.###....#.
..#.#..#.#
#...##.#..

Tile 1171:
####...##.
#..##.#..#
##.#..#.#.
.###.####.
..###.####
.##....##.
.#...####.
#.##.####.
####..#...
.....##...

Tile 1427:
###.##.#..
.#..#.##..
.#.##.#..#
#.#.#.##.#
....#...##
...##..##.
...#.#####
.#.####.#.
..#..###.#
..##.#..#.

Tile 1489:
##.#.#....
..##...#..
.##..##...
..#...#...
#####...#.
#..#.#.#.#
...#.#.#..
##.#...##.
..##.##.##
###.##.#..

Tile 2473:
#....####.
#..#.##...
#.##..#...
######.#.#
.#...#.#.#
.#########
.###.#..#.
########.#
##...##.#.
..###.#.#.

Tile 2971:
..#.#....#
#...###...
#.#.###...
##.##..#..
.#####..##
.#..####.#
#..#.#..#.
..####.###
..#.#.###.
...#.#.#.#

Tile 2729:
...#.#.#.#
####.#....
..#.#.....
....#..#.#
.##..##.#.
.#.####...
####.#.#..
##.####...
##..#.##..
#.##...##.

Tile 3079:
#.#.#####.
.#..######
..#.......
######....
####.#..#.
.#...#.##.
#.#####.##
..#.###...
..#.......
..#.###...`.split('\n\n').map(tile => {
    let parts = tile.split(`:\n`);
    return new Tile(parts[0].slice(-4), parts[1].split('\n'));
});

module.exports = {input, test, Tile};
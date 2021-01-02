class Tile {
    constructor(id, grid) {
        this.id = Number(id);
        this.grid = grid;
        this.edges = {
            top: null,
            bottom: null,
            left: null,
            right: null
        }
        this.edgePossibilities = null;
        this.neighbors = {
            top: null,
            bottom: null,
            left: null,
            right: null
        }
        this.neighborTiles = new Set();
    }

    // Rotates 90 degrees clockwise for the number of turns specified
    rotate(turns) {
        let newTile = new Tile(this.id, this.grid);
        for(let i = 0; i < turns; i++) {
            newTile.grid = this.#rotate(newTile.grid);
        }
        return newTile;
    }

    #rotate(grid) {
        let newGrid = [...Array(grid.length)].map(x=>Array(grid.length));
        for(let y = 0; y < grid.length; y++) {
            for(let x = 0; x < grid[0].length; x++) {
                newGrid[x][grid.length-y-1] = grid[y][x];
            }
        }
        
        return newGrid.map(row => row.join(''));
    }

    flipOnX() {
        let newGrid = Array(this.grid.length);
        for(let y = 0; y < this.grid.length; y++) {
            newGrid[y] = this.grid[this.grid.length - y - 1];
        }
        return new Tile(this.id, newGrid);
    }

    getEdges() {
        return [this.grid[0],
                this.rotate(1).grid[0],
                this.rotate(2).grid[0],
                this.rotate(3).grid[0]];
    }

    updateEdges() {
        this.edges.top = this.grid[0];
        this.edges.bottom = this.grid[this.grid.length-1];
        this.edges.left = this.rotate(1).grid[0].split('').reverse().join('');
        this.edges.right = this.rotate(3).grid[0];
        this.edgePossibilities = [this.edges.top, this.edges.bottom, this.edges.left, this.edges.right, 
                                this.#reverseEdge(this.edges.top), this.#reverseEdge(this.edges.bottom), 
                                this.#reverseEdge(this.edges.left), this.#reverseEdge(this.edges.right)]
    }

    #reverseEdge(edge) {
        return edge.split('').reverse().join('');
    }

    removeEdges() {
        let newGrid = [...Array(this.grid.length-2)].map(x=>Array(this.grid.length-2));
        for (let y = 0; y < this.grid.length - 2; y++) {
            newGrid[y] = this.grid[y+1].slice(1,this.grid[y+1].length-1);
        }
        return new Tile(this.id, newGrid);
    }

    addNeighbor(tileId) {
        this.neighborTiles.add(tileId);
    }

    static print(tile) {
        let out = `Tile ${tile.id}\n`;
        for(let y = 0; y < tile.grid.length; y++) {
            let row = "";
            for (let x = 0; x < tile.grid[0].length; x++) {
                row += `${tile.grid[y][x]} `;
            }
            out += `${row}\n`;
        }
        console.log(out);
    }
}

module.exports = Tile
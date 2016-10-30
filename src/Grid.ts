class Grid {

    _startNode: TileNode;
    _endNode: TileNode;
    _nodes: TileNode[][] = [];
    _numCols: number;
    _numRows: number;

    constructor(numCols: number, numRows: number) {
        this._numCols = numCols;
        this._numRows = numRows;
        //this._nodes = new Array()

        for (var i = 0; i < this._numCols; i++) {
            this._nodes[i] = new Array();
            for (var j = 0; j < this._numRows; j++) {
                this._nodes[i][j] = new TileNode(i, j);
            }
        }
    }
  public setStartNode(x: number, y: number) {
        this._startNode = this._nodes[x][y];
    }

    public setEndNode(x: number, y: number) {
        this._endNode = this._nodes[x][y];
    }


}
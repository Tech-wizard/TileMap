class AStar {

		  _openList: TileNode[] = [];//Array<TileNode>//

		  _closedList: TileNode[] = [];  //已考察表

		  _grid: Grid;

		  _startNode: TileNode;
		  _endNode: TileNode;


		  _path: TileNode[][] = [];

	_heuristic: Function = this.diagonal;
		  _straightCost: number = 1.0;
		  _diagCost: number = Math.SQRT2;


	public findPath(grid: Grid): Boolean {
		this._grid = grid;

		// for (var i = 0; i < this._grid._numCols; i++) {
		//             this. _openList[i] = new Array();
		// 			this._closedList[i] = new Array();

		//         }
		this._openList = new Array();
		this._closedList = new Array();

		this._startNode = this._grid._starNode;
		this._endNode = this._grid._endNode;

		this._startNode.g = 0;
		this._startNode.h = this._heuristic(this._startNode);
		this._startNode.f = this._startNode.g + this._startNode.h;

		return this.search();
	}

	public search(): Boolean {

		var currentNode: TileNode = this._startNode;

		while (currentNode != this._endNode) {
			//_openList = [];  //当前待考察列表

			var startX: number = Math.max(0, currentNode.x - 1);
			var endX: number = Math.min(this._grid._numCols - 1, currentNode.x + 1);

			var startY: number = Math.max(0, currentNode.y - 1);
			var endY: number = Math.min(this._grid._numRows - 1, currentNode.y + 1);

			//check Nodes from ( startX, startY ) to (endX, endY );
			for (var i: number = startX; i <= endX; i++) {

				for (var j: number = startY; j <= endY; j++) {
					var test: TileNode = this._grid._nodes[i][j];
					if (test == currentNode || !test.walkable) {
						continue;
					}

					var cost: number = this._straightCost;
					if (currentNode.x == test.x || currentNode.y == test.y) {
						cost = this._diagCost;
					}

					var g: number = currentNode.g + cost;
					var h: number = this._heuristic(test);
					var f: number = g + h;

					if (this.isOpen(test) || this.isClosed(test)) {
						if (test.f > f) {
							test.f = f;
							test.g = g;
							test.h = h;
							test.parent = currentNode
						}
					} else {
						test.f = f;
						test.g = g;
						test.h = h;

						test.parent = currentNode;
						this._openList.push(test);
					}
				}
			}


			this._closedList.push(currentNode);  //已考察列表

			if (this._openList.length == 0) {
				//	trace("no path found!");
				return false;
			}

			//this._openList.sortOn("f", Array.NUMERIC);
			this._openList.sort(function (a, b) {
				if (a > b) {
					return 1;
				} else if (a < b) {
					return -1
				} else {
					return 0;
				}
			})
			currentNode = this._openList.shift();

			//trace("find node: " + currentNode.x + " " + currentNode.y + " f:" + currentNode.f)
		}

		this.buildPath();

		return true;
	}

		  validNode(node: TileNode, currentNode: TileNode): Boolean {
		if (currentNode == node || !node.walkable) return false;

		if (!this._grid._nodes[currentNode.x][node.y].walkable) return false;

		if (!this._grid._nodes[node.x][currentNode.y].walkable) return false;

		return true;
	}

		  isOpen(node: TileNode): Boolean {
		for (var i: number = 0; i < this._openList.length; i++) {
			if (this._openList[i] == node) {
				return true;
			}
		}
		//return this._openList.indexOf(node) > 0 ? true : false;
	}

		  isClosed(node: TileNode): Boolean {
		return this._closedList.indexOf(node) > 0 ? true : false;
	}

    buildPath(): void {

		this._path = new Array();

		var node: TileNode = this._endNode;
		this._path.push(new Array(node));

		while (node != this._startNode) {
			node = node.parent;
			this._path.unshift(new Array(node));
		}
	}

		  manhattan(node: TileNode): number {
		return Math.abs(this._endNode.x - node.x) * this._straightCost + Math.abs(_endNode.y - node.y) * _straightCost;
	}

		  euclidian(node: TileNode): number {
		var dx: number = this._endNode.x - node.x;
		var dy: number = this._endNode.y - node.y;

		return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
	}


	diagonal(node: TileNode): number {
		var dx: number = Math.abs(this._endNode.x - node.x);
		var dy: number = Math.abs(this._endNode.y - node.y);

		var diag: number = Math.min(dx, dy);
		var straight: number = dx + dy;

		return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
	}

	public visited(): TileNode[] {
		return this._closedList.concat(this._openList);
	}
}
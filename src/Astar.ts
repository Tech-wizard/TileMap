	//  class AStar
	// {	
		
	// 	  _openList: Array;   //待考察表
		
	
	// 	  _closedList: Array;  //已考察表
		
	// 	  _grid: Grid;
		
	// 	  _startNode: TileNode;
	// 	  _endNode: TileNode;
		
	
	// 	  _path: Array;
		
	// 	  _heuristic: Function = diagonal;
	// 	  _straightCost: Number = 1.0;
	// 	  _diagCost: Number = Math.SQRT2;
		
		
		
	// 	public findPath( grid: Grid ): Boolean
	// 	{	
	// 		_grid = grid;
			
	// 		_openList = new Array();
	// 		_closedList = new Array();
			
	// 		_startNode = _grid.startNode;
	// 		_endNode = _grid.endNode;
			
	// 		_startNode.g = 0;
	// 		_startNode.h = _heuristic( _startNode );
	// 		_startNode.f = _startNode.g + _startNode.h;
			
	// 		return search();
	// 	}
		
	// 	 search(): Boolean
	// 	{
	// 		var currentNode: Node = _startNode;
			
	// 		while( currentNode != _endNode )
	// 		{
	// 			//_openList = [];  //当前待考察列表
				
	// 			var startX: number = Math.max( 0, currentNode.x - 1 );
	// 			var endX: number = Math.min( _grid.numCols - 1, currentNode.x + 1 );
				
	// 			var startY: number = Math.max( 0, currentNode.y -1 );
	// 			var endY: number = Math.min( _grid.numRows - 1, currentNode.y + 1 );
				
	// 			//check Nodes from ( startX, startY ) to (endX, endY );
	// 			for( var i:number = startX; i <= endX; i++ )
	// 			{
	// 				trace( "...................................." + i );
	// 				for( var j:number = startY; j <= endY; j++ )
	// 				{
	// 					var node: Node = _grid.getNode( i, j );
	// 					trace( "node: " + node.x + " " + node.y )
						
	// 					if ( validNode( node, currentNode ) )
	// 					{		
	// 						var cost: Number = _diagCost;
							
	// 						if ( currentNode.x == node.x || currentNode.y == node.y )
	// 						{
	// 							cost = _straightCost;
	// 						}
							
	// 						var g: Number = currentNode.g + cost * node.costMultiplier;
	// 						var h: Number = _heuristic( node );
	// 						var f: Number = g + h;
							
	// 						if( isOpen( node ) || isClosed( node ) )
	// 						{
	// 							if ( node.f > f )
	// 							{
	// 								node.f = f;
	// 								node.g = g;
	// 								node.h = h;
	// 								node.parent = currentNode
	// 							}
	// 						}else
	// 						{
	// 							node.f = f;
	// 							node.g = g;
	// 							node.h = h;
								
	// 							node.parent = currentNode;
	// 							_openList.push( node );
	// 						}
	// 					}	
	// 				}
	// 			}	
				
	// 			_closedList.push( currentNode );  //已考察列表
				
	// 			if ( _openList.length == 0 )
	// 			{
	// 				trace( "no path found!" );
	// 				return false;
	// 			}
					
	// 			_openList.sortOn( "f", Array.NUMERIC );
	// 			currentNode = _openList.shift() as Node;
				
	// 			trace( "find node: " + currentNode.x + " " + currentNode.y + " f:" + currentNode.f )
	// 		}
				
	// 		buildPath();
			
	// 		return true;
	// 	}
		
	// 	  validNode( node: Node, currentNode: Node ): Boolean
	// 	{
	// 		if( currentNode == node || !node.walkable ) return false;
			
	// 		if ( !_grid.getNode( currentNode.x, node.y ).walkable ) return false;
			
	// 		if ( !_grid.getNode( node.x, currentNode.y ).walkable ) return false;
				
	// 		return true;
	// 	}
		
	// 	  isOpen( node: Node ): Boolean
	// 	{
	// 		return _openList.indexOf( node ) > 0 ? true : false;
	// 	}
		
	// 	  isClosed( node: Node ): Boolean
	// 	{
	// 		return _closedList.indexOf( node ) > 0 ? true : false;
	// 	}
		
	// 	  buildPath(): void
	// 	{
	// 		trace( "buildPath" );
	// 		_path = new Array();
			
	// 		var node: Node = _endNode;
	// 		_path.push( node );
			
	// 		while( node != _startNode )
	// 		{
	// 			node = node.parent;
	// 			_path.unshift( node );
	// 		}
	// 	}
		
	// 	  manhattan( node: Node ): Number
	// 	{
	// 		return Math.abs( _endNode.x - node.x )*_straightCost + Math.abs( _endNode.y - node.y )*_straightCost;
	// 	}
		
	// 	  euclidian( node: Node ): Number
	// 	{
	// 		var dx: Number = _endNode.x - node.x;
	// 		var dy: Number = _endNode.y - node.y;
			
	// 		return Math.sqrt(dx*dx + dy*dy ) * _straightCost;
	// 	}
		
		
	// 	 diagonal( node: TileNode ): Number
	// 	{
	// 		var dx: Number = Math.abs( _endNode.x - node.x );
	// 		var dy: Number = Math.abs( _endNode.y - node.y );
			
	// 		var diag: Number = Math.min( dx, dy );
	// 		var straight: Number = dx + dy;
			
	// 		return _diagCost * diag + _straightCost * ( straight - 2*diag );
	// 	}
		
	// }
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap(player) {
        _super.call(this);
        this.init();
        this._player = player;
        this._i = 0;
    }
    var d = __define,c=TileMap,p=c.prototype;
    // public playerMove() {
    // }
    p.init = function () {
        var _this = this;
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        var moveX;
        var moveY;
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var localX = e.localX;
            var localY = e.localY;
            var playerX = Math.floor(_this._player._body.x / TileMap.TILE_SIZE);
            var playerY = Math.floor(_this._player._body.y / TileMap.TILE_SIZE);
            // var playerX: number = 0;
            // var playerY: number = 0;
            var gridX = Math.floor(localX / TileMap.TILE_SIZE);
            var gridY = Math.floor(localY / TileMap.TILE_SIZE);
            _this._astar = new AStar();
            var grid = new Grid(12, 12, config);
            grid.setStartNode(playerX, playerY);
            grid.setEndNode(gridX, gridY);
            //console.log(grid._nodes);
            if (_this._astar.findPath(grid)) {
                // astar._path.map((tile) => {
                //     console.log(`x:${tile.x},y:${tile.y}`)
                // });
                //  while (this._i < this._astar._path.length) {
                //    this._i++;
                //  }    
                //this.mapMove(moveX, moveY, this._astar._path);
                for (_this._i = 1; _this._i < _this._astar._path.length; _this._i++) {
                    //console.log(this._astar._path[this._i].x, this._astar._path[this._i].y);
                    // moveX = this._astar._path[this._i].x * TileMap.TILE_SIZE+TileMap.TILE_SIZE/2;
                    // moveY = this._astar._path[this._i].y * TileMap.TILE_SIZE+TileMap.TILE_SIZE/2;
                    egret.setTimeout(function () {
                        var moveX = 0;
                        var moveY = 0;
                        moveX = _this._astar._path[_this._i].x * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
                        moveY = _this._astar._path[_this._i].y * TileMap.TILE_SIZE + TileMap.TILE_SIZE / 2;
                        _this._player.move(moveX, moveY);
                        egret.Tween.get(_this._player._body).call(function () {
                            egret.Tween.get(_this._player._body).to({ x: moveX, y: moveY }, 500).wait(200);
                        }, _this);
                    }, _this._i, _this._i * 800);
                }
                _this._player.idle();
            }
        }, this);
        // public mapMove(moveX: number, moveY: number, path: TileNode[]) {
        //    // console.log(this._i);
        //     egret.Tween.get(this._player._body).to({ x: moveX, y: moveY }, 800).wait(200).call(() => {
        //         for(this._i=0;this._i < path.length;this._i++) {
        //             console.log(path[this._i].x, path[this._i].y);
        //             moveX = path[this._i].x * TileMap.TILE_SIZE;
        //             moveY = path[this._i].y * TileMap.TILE_SIZE;
        //             //this.mapMove(moveX, moveY, path);
        //             egret.Tween.get(this._player._body).to({ x: moveX, y: moveY }, 800).wait(300);
        //         }
        //     }
        //     );
        // }
    };
    TileMap.TILE_SIZE = 64;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var config = [
    { x: 0, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 2, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 0, walkable: false, image: "zhangai_jpg" },
    { x: 4, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 6, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 0, walkable: false, image: "zhangai_jpg" },
    { x: 8, y: 0, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 11, y: 0, walkable: true, image: "dimian_jpg" },
    { x: 0, y: 1, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 1, walkable: false, image: "zhangai_jpg" },
    { x: 2, y: 1, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 1, walkable: true, image: "dimian_jpg" },
    { x: 4, y: 1, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 1, walkable: false, image: "zhangai_jpg" },
    { x: 6, y: 1, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 1, walkable: false, image: "zhangai_jpg" },
    { x: 8, y: 1, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 1, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 1, walkable: false, image: "zhangai_jpg" },
    { x: 11, y: 1, walkable: false, image: "zhangai_jpg" },
    { x: 0, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 2, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 2, walkable: false, image: "zhangai_jpg" },
    { x: 4, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 6, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 2, walkable: false, image: "zhangai_jpg" },
    { x: 8, y: 2, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 11, y: 2, walkable: true, image: "dimian_jpg" },
    { x: 0, y: 3, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 3, walkable: false, image: "zhangai_jpg" },
    { x: 2, y: 3, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 3, walkable: true, image: "dimian_jpg" },
    { x: 4, y: 3, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 3, walkable: false, image: "zhangai_jpg" },
    { x: 6, y: 3, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 3, walkable: true, image: "dimian_jpg" },
    { x: 8, y: 3, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 3, walkable: false, image: "zhangai_jpg" },
    { x: 10, y: 3, walkable: false, image: "zhangai_jpg" },
    { x: 11, y: 3, walkable: true, image: "dimian_jpg" },
    { x: 0, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 2, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 4, walkable: false, image: "zhangai_jpg" },
    { x: 4, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 4, walkable: false, image: "zhangai_jpg" },
    { x: 6, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 8, y: 4, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 11, y: 4, walkable: true, image: "dimian_jpg" },
    { x: 0, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 1, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 2, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 3, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 4, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 5, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 6, y: 5, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 8, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 5, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 11, y: 5, walkable: false, image: "zhangai_jpg" },
    { x: 0, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 2, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 4, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 6, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 8, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 9, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 11, y: 6, walkable: true, image: "dimian_jpg" },
    { x: 0, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 1, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 2, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 3, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 4, y: 7, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 6, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 7, y: 7, walkable: true, image: "dimian_jpg" },
    { x: 8, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 7, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 11, y: 7, walkable: false, image: "zhangai_jpg" },
    { x: 0, y: 8, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 8, walkable: false, image: "zhangai_jpg" },
    { x: 2, y: 8, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 8, walkable: true, image: "dimian_jpg" },
    { x: 4, y: 8, walkable: false, image: "zhangai_jpg" },
    { x: 5, y: 8, walkable: true, image: "dimian_jpg" },
    { x: 6, y: 8, walkable: false, image: "zhangai_jpg" },
    { x: 7, y: 8, walkable: true, image: "dimian_jpg" },
    { x: 8, y: 8, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 8, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 8, walkable: false, image: "zhangai_jpg" },
    { x: 11, y: 8, walkable: true, image: "dimian_jpg" },
    { x: 0, y: 9, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 9, walkable: false, image: "zhangai_jpg" },
    { x: 2, y: 9, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 9, walkable: false, image: "zhangai_jpg" },
    { x: 4, y: 9, walkable: false, image: "zhangai_jpg" },
    { x: 5, y: 9, walkable: true, image: "dimian_jpg" },
    { x: 6, y: 9, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 9, walkable: true, image: "dimian_jpg" },
    { x: 8, y: 9, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 9, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 9, walkable: true, image: "dimian_jpg" },
    { x: 11, y: 9, walkable: true, image: "dimian_jpg" },
    { x: 0, y: 10, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 10, walkable: false, image: "zhangai_jpg" },
    { x: 2, y: 10, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 10, walkable: true, image: "dimian_jpg" },
    { x: 4, y: 10, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 10, walkable: true, image: "dimian_jpg" },
    { x: 6, y: 10, walkable: false, image: "zhangai_jpg" },
    { x: 7, y: 10, walkable: true, image: "dimian_jpg" },
    { x: 8, y: 10, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 10, walkable: false, image: "zhangai_jpg" },
    { x: 10, y: 10, walkable: false, image: "zhangai_jpg" },
    { x: 11, y: 10, walkable: true, image: "dimian_jpg" },
    { x: 0, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 1, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 2, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 3, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 4, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 5, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 6, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 7, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 8, y: 11, walkable: false, image: "zhangai_jpg" },
    { x: 9, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 10, y: 11, walkable: true, image: "dimian_jpg" },
    { x: 11, y: 11, walkable: true, image: "dimian_jpg" },
];
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.data = data;
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes(data.image);
        bitmap.width = 64;
        bitmap.height = 64;
        //this.addChild(bitmap);
        this.x = data.x * TileMap.TILE_SIZE;
        this.y = data.y * TileMap.TILE_SIZE;
        this.addChild(bitmap);
    }
    var d = __define,c=Tile,p=c.prototype;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
//# sourceMappingURL=Map.js.map
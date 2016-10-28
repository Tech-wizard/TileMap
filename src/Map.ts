
class TileMap extends egret.DisplayObjectContainer {

    public static TILE_SIZE = 128;
    constructor() {
        super();
        this.init();
    }

    private init() {
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / TileMap.TILE_SIZE);
            var gridY = Math.floor(localY / TileMap.TILE_SIZE);
        }, this)

    }

}



var config = [
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" },
    { x: 0, y: 0, walkable: true, image: "" }
]




interface TileData {
    x: number;
    y: number;
    walkable: boolean;
    image: string;

}

class Tile extends egret.DisplayObjectContainer {

    data: TileData;
    constructor(data: TileData) {
        super();
        this.data = data;
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes(data.image);
        //bitmap.scaleX = bitmap.scaleY =2;
        this.x = data.x * TileMap.TILE_SIZE;
        this.y = data.y * TileMap.TILE_SIZE;

    }


}





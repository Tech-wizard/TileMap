var config = [
    { x: 0, y: 0, walkable: true, image: "" }
];
var gird = new astar.gird(8, 8);
for (var i = 0; i < config.length; i++) {
    var tile = config[i];
    var bitmap = new egret.Bitmap();
    bitmap.x = tile.x * 32;
    bitmap.y = tile.y * 32;
    bitmap.texture = RES.getRes(tile.image);
}
//# sourceMappingURL=Map.js.map
// 自動生成的代碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級1":
            case "層級1":return tiles.createTilemap(hex`0a00070001020202020202020203070a09090a0a09090a04070a09090a0909090a0407090909090a09090904070a090a0909090a0904070a090909090a09090406080808080a08080805`, img`
. . . . . . . . . . 
. 2 . . 2 2 . . 2 . 
. 2 . . 2 . . . 2 . 
. . . . . 2 . . . . 
. 2 . 2 . . . 2 . . 
. 2 . . . . 2 . . . 
. . . . . 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動生成的代碼。請勿編輯。

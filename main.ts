

let Player = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`World_1`)
controller.moveSprite(Player)
scene.cameraFollowSprite(Player)
let playerx
let oPlayerx = 0
let playery
let oPlayery = 0
let changex
let changey
let change = 0
let stepForEn = 500
let counter = 0
game.onUpdate(function () {
    getSteps()
    console.log(counter)
    counter += change
    if (counter > stepForEn) { // To check if character has been displaced enough
        counter = counter - stepForEn
        battle.tileMap()

    }
})
function getSteps(): number {
    playerx = Player.x
    playery = Player.y
    changex = oPlayerx - playerx
    changey = oPlayery - playery
    oPlayerx = playerx
    oPlayery = playery
    changex = Math.abs(changex)
    changey = Math.abs(changey)
    change = changex + changey
    return change
}
let myMinimap = minimap.minimap(1000000, 150, 0)
minimap.getImage(myMinimap)
minimap.includeSprite(myMinimap, Player)
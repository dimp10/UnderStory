let Player = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`World_1`)
controller.moveSprite(Player)
scene.cameraFollowSprite(Player)

let Counter = 99
let playerx
let oPlayerx = 0
let playery
let oPlayery = 0
let changex
let changey
let change = 0
let stepForEn = 10

game.onUpdate(function() {
    getSteps()
})

function getSteps(): void{
    playerx = Player.x
    playery = Player.y
    changex = oPlayerx - playerx
    changey = oPlayery - playery
    oPlayerx = playerx
    oPlayery = playery
    Math.abs(changex)
    Math.abs(changey)
    change = changex + changey
}

if (change > stepForEn) { // To check if character has been displaced enough
    change = change - stepForEn
    console.debug("yes")

}


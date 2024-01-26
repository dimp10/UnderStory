tiles.setCurrentTilemap(tilemap`World_1`)
let myMinimap = minimap.minimap(1000000, 150, 0)
minimap.getImage(myMinimap)
let tileMap = sprites.create(minimap.getImage(myMinimap), SpriteKind.Player)
let Player = sprites.create(assets.image`Player`)
Player.setPosition(234, 150)
//Player.z = -5

tileMap.setPosition(80,60)

// function make_minimap() {
//     let minimap_object = minimap.minimap(1.25)
//     let minimap_image = minimap.getImage(minimap_object)
//     let minimap_sprite = sprites.create(minimap_image, SpriteKind.Player)
// }

let minimap_object = minimap.minimap(1.25)
let minimap_image = minimap.getImage(minimap_object)
let minimap_sprite = sprites.create(minimap_image, SpriteKind.Player)

function update_minimap() {
    let minimap_object = minimap.minimap(1.25)
    minimap.includeSprite(minimap_object, Player)
    minimap_sprite.setImage(minimap.getImage(minimap_object))
}

controller.moveSprite(Player)
//scene.cameraFollowSprite(Player)
let playerx
let oPlayerx = 0
let playery
let oPlayery = 0
let changex
let changey
let change = 0
let stepForEn = 500
let counter = -386

game.onUpdate(function () {
    getSteps()
    update_minimap()
    console.log(counter)
    counter += change
    if (counter > stepForEn) { // To check if character has been displaced enough
        counter = counter - stepForEn
        battle.tileMap()
        //minimap_sprite.setFlag(SpriteFlag.Invisible, true)

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
//minimap.includeSprite(myMinimap2, Player)
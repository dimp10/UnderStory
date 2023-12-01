Player = sprites.create(assets.image("""
    Player
    """), SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    World_1
    """))
controller.move_sprite(Player)
scene.camera_follow_sprite(Player)
Counter = 99
stepForEn = 10
while Counter == 100:
    # Counts To Check Steps(ticks)
    playerx = Player.x
    playery = Player.y
    changex = oPlayerx - playerx
    changey = oPlayery - playery
    oPlayerx = playerx
    oPlayery = playery
    abs(changex)
    abs(changey)
    change = changex + changey
    Counter = Counter - 1
while Counter < 100 and Counter > 0:
    Counter = Counter - 1
if Counter == 0:
    Counter = 100
# Ends here 
if change > stepForEn:
    # To check if character has been displaced enough
    change = change - stepForEn
    console.debug("yes")
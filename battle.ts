// Add your code here
namespace battle{
    export function battle(){
        let box = 1
        let Player = sprites.create(assets.image`Soul`)
        tiles.setCurrentTilemap(tilemap`Battle`)
        let minimap_object = minimap.minimap(1.25)
        let minimap_image = minimap.getImage(minimap_object)
        let minimap_sprite = sprites.create(minimap_image, SpriteKind.Player)
        if (controller.left.isPressed())
            if (box == 1)
                box = 4
            else
                box --
            
        if (controller.right.isPressed())
            if (box == 4)
                box = 1
            else
                box ++

        function tileMap() {
        
            
        }
        function battle_() {
        }
        
        

        function update_minimap_() {
            let minimap_object = minimap.minimap(1.25)
            minimap.includeSprite(minimap_object, Player)
            minimap_sprite.setImage(minimap.getImage(minimap_object))
        }

        // game.onUpdate(function () {
        //     update_minimap_()


        // })
        
    }
}
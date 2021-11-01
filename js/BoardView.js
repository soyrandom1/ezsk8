let boardImage = localStorage.getItem("board-image")

//let lijaImage = localStorage.getItem("griptape-image")

let img

class BoardView extends Phaser.Scene {
    constructor() {
        super('BoardView')
    }

    preload()
    {
       this.textures.addBase64('brdtxt', boardImage)
    }
    create() {

        scn = this
        let lockedBoardDesign = false

        gWidth = this.sys.game.config.width
        gHeigth = this.sys.game.config.height

        this.add.image(gWidth / 2, gHeigth / 2, 'background')
        this.textures.on('addtexture', function() {
            img = this.add.image(gWidth / 2, gHeigth / 2, 'boardTexture')

        }, this)

        this.textures.addBase64('boardTexture', boardImage)
        if(localStorage.getItem('board') == 'pop')
        {
            this.add.image(gWidth / 2, gHeigth / 2, 'mask').setDepth(3)
        }else
        {
            this.add.image(gWidth / 2, gHeigth / 2, 'cruiserMask').setDepth(3)
        }

        setTimeout(function() {
            img.setDepth(0)
            img.setInteractive({
                draggable: true
            })

            img.on('drag', function(pointer, dragX, dragY) {
                if (!lockedBoardDesign) {
                    //console.log(gameObject)
                    this.x = dragX
                    this.y = dragY
                }

            })

        }, 200);

    }
}
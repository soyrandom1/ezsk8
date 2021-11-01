//let boardImage = localStorage.getItem("board-image")

let lijaImage = localStorage.getItem("griptape-image")

let imgGrip

class GripView extends Phaser.Scene {
    constructor() {
        super('GripView')
    }

    preload() {
        this.textures.addBase64('grptxt', lijaImage)
    }
    create() {

        let lockedBoardDesign = false
        this.alreadyLoaded = false
        gWidth = this.sys.game.config.width
        gHeigth = this.sys.game.config.height
        if (localStorage.getItem('board') == 'pop') {
            this.add.image(gWidth / 2, gHeigth / 2, 'lija')
        } else {
            this.add.image(gWidth / 2, gHeigth / 2, 'cruiserGrip')
        }

        this.textures.on('addtexture', function() {
            if (this.alreadyLoaded) {
                imgGrip = this.add.image(gWidth / 2, gHeigth / 2, 'gripTexture')
            }
            this.alreadyLoaded = true
            console.log('load')


        }, this)
        this.textures.addBase64('gripTexture', lijaImage)
            //console.log(imgGrip)
            // 
        if (localStorage.getItem('board') == 'pop') {
            this.add.image(gWidth / 2, gHeight / 2, 'lija')
            this.add.image(gWidth / 2, gHeigth / 2, 'mask').setDepth(3)
        } else {
            //this.add.image(gWidth / 2, gHeight / 2, 'cruiserGrip').setScale(2)
            this.add.image(gWidth / 2, gHeigth / 2, 'cruiserMask').setDepth(3)
        }

        setTimeout(function() {
            //imgGrip.setDepth(0)
            imgGrip.setAlpha(.4)
            imgGrip.setInteractive({
                draggable: true
            })

            imgGrip.on('drag', function(pointer, dragX, dragY) {
                if (!lockedBoardDesign) {
                    //console.log(gameObject)
                    this.x = dragX
                    this.y = dragY
                }

            })

        }, 200);

    }
}
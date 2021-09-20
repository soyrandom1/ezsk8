class BoardView extends Phaser.Scene {
    constructor() {
        super('BoardView')

    }
    preload() {
        this.load.plugin('rexcanvasplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcanvasplugin.min.js', true);
    }
    create() {
        let lockedBoardDesign = false
        let lockedLijaDesign = false
        gWidth = this.sys.game.config.width
        gHeigth = this.sys.game.config.height

        this.add.image(gWidth / 2, gHeigth / 2, 'background')

        this.img = this.add.image(gWidth / 2, gHeigth / 2, 'generic')

        this.add.image(gWidth / 2, gHeigth / 2, 'backgroundLija')

        this.lija = this.add.image(gWidth * .648, gHeigth * .507, 'lija').setScale(1.05)

        this.imgLija = this.add.image(gWidth, gHeigth / 2, 'generic').setAlpha(.35)

        this.add.image(gWidth / 2, gHeigth / 2, 'mask')
        this.add.image(gWidth / 2, gHeigth / 2, 'maskLija')

        this.imgLija.setInteractive({
            draggable: true
        })
        this.img.setInteractive({
            draggable: true
        })

        this.img.on('drag', function(pointer, dragX, dragY) {
            if (!lockedBoardDesign) {
                //console.log(gameObject)
                this.x = dragX
                this.y = dragY
            }

        })
        this.imgLija.on('drag', function(pointer, dragX, dragY) {
            if (!lockedLijaDesign) {
                //console.log(gameObject)
                this.x = dragX
                this.y = dragY
            }

        })
        let lockBoardDesign = this.add.image(gWidth * .25, gHeigth / 2, 'lock').setScale(.2).setInteractive()
        let lockLijaDesign = this.add.image(gWidth * .65, gHeigth / 2, 'lock').setScale(.2).setInteractive()
        lockLijaDesign.on('pointerdown', function() {
            if (lockedLijaDesign) {
                lockedLijaDesign = false
                lockLijaDesign.setTint()

            } else {
                lockedLijaDesign = true
                lockLijaDesign.setTint(0x808080)
            }
        })

        lockBoardDesign.on('pointerdown', function() {
            if (lockedBoardDesign) {
                lockedBoardDesign = false
                lockBoardDesign.setTint()

            } else {
                lockedBoardDesign = true
                lockBoardDesign.setTint(0x808080)
            }
        })


    }
}
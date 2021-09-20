var animationTime = 200


class ButtonImage extends Phaser.GameObjects.Image {    
    constructor({scene, x=0, y=0, image, 
        text="", 
        textConfig={},
         scale=1, 
         clickFunction = ()=>{},
         levelButtons = false,
         sound = "soundButton"
        }) 
    {
        super(scene, x, y, image)
        scene.add.existing(this)
        
        this.startScale = scale
        this.setScale(this.startScale)

        this.text
        if (text) {
            let off = {x:0, y:0}
            if (levelButtons) {
                off = {x: 5, y: 5}
            }
            this.text = scene.add.text(x + off.x, y + off.y, text, textConfig)
            this.text.setOrigin(0.5)
            this.text.setScale(this.startScale)
        }

        this.setInteractive()
        this.setScrollFactor(0)

        this.isDown = false
        this.on("pointerover", ()=>{
            scene.tweens.add({
                targets: this.text? [this, this.text] : this,
                duration: animationTime,
                scale: this.startScale*1.1,
                ease: 'Back'
            })
        })
        this.on("pointerout", ()=>{
            scene.tweens.add({
                targets: this.text? [this, this.text] : this,
                duration: animationTime,
                scale: this.startScale,
                ease: 'Back'
            })
        })
        this.on("pointerdown", ()=>{
            this.isDown = true
            scene.tweens.add({
                targets: this.text? [this, this.text] : this,
                duration: animationTime,
                scale: this.startScale*0.8,
                ease: 'Back'
            })
        })
        this.on("pointerup", ()=>{
            this.isDown = false
            scene.tweens.add({
                targets: this.text? [this, this.text] : this,
                duration: animationTime,
                animationTimecale: this.startScale,
                ease: 'Back',
                onComplete: ()=> {
                    //DATA.sound[sound].play()
                    clickFunction.call()
                }
            })
        })
    }
}

function mapNumbers(number, in_min, in_max, out_min, out_max)
{
    return(number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

class PieMeter extends Phaser.GameObjects.Graphics {

    //credits for this timer implementation:
    // https://andradearts.com/quick-code-circle-pie-meter-class-for-phaser-3/
    // _scene:  the scene you want to display the meter in
    // _x, _y:  the position to display the meter
    // _radi:   the fadius of the meter
    // _dir:    the direction of the meter.  Value is either 1 or 0
    // _flip:   flips the meter horizontially and is used in conjunction with the _dir
    constructor(_scene, _x, _y, _radi, _dir, _flip) {
        super(_scene, { x: _x, y: _y }) 
        this.angle = 0 
        this.alpha = 1 
        this.scaleY = _flip 
        this.setActive(true) 
        this.myRadius = _radi 
        this.direction = _dir 
        _scene.add.existing(this) 
    }

    // requires a vaule between 0 amd 360
    drawPie(howMuch) {

        this.clear() 
        this.fillStyle(0xDE5AFF, 1) 

        let radius = this.myRadius 

        // Rotate to make 0 as 12 o'clock
        this.angle = -90 


        if (this.direction == 0) {
            this.slice(0, 0, radius, 0, Phaser.Math.DegToRad(howMuch), true) 
        } else {
            this.slice(0, 0, radius, Phaser.Math.DegToRad(howMuch), 0, true) 
        }

        this.fillPath() 
    }
}

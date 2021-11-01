class PreloadScene extends Phaser.Scene {
    constructor() {
        /*In pack we are going to load all the assets we need for our Preload screen.
         Do not load anything that is not going to be used exclusively in this screen.
         All the assets load in super are going to be available to use in any other screen if needed*/
        super({
            key: 'PreloadScene',
            pack: {
                files: [
                    /*{ 
                    					type:'image'
                    					key:'preloadBackground'
                    					url:'./assets/preloadBackground.png'
                    				},
                    				{
                    					type:'image'
                    					key:'loadBarFront'
                    					url:'./assets/loadBarFront.png'
                    				}*/
                ]
            }
        })
    }

    preload() {
            //we save the game width and height in our globals, it will be usefull later./


            //here we preload every single game asset.
            this.load.image('background', './assets/background.png')
            this.load.image('generic', './assets/generic.png')
            this.load.image('mask', './assets/mask.png')
            this.load.image('lock', './assets/lock.png')
            this.load.image('backgroundLija', './assets/backgroundLija.png')
            this.load.image('maskLija', './assets/maskLija.png')
            this.load.image('lija', './assets/lija.png')
            this.load.image('cruiserGrip', './assets/cruiserGrip.png')
            this.load.image('cruiserMask', './assets/cruiserMask.png')

            //example
            //this.load.multiatlas('player_animations', './assets/atlas/playerAnim.json', 'assets')



            //here we draw the preload scene
            //this.add.image(gWidth/2, gHeigth/2, 'preloadBackground')


            //load bar
            //this.add.image(gWidth/2, gHeigth * 0.7, 'loadBarFront')

        }
        //create function gets called after every file has been loaded. 
        //Here you could add a button, i recommend just switching to a splash scene and remove this scene from the pool
        //because it's not going to be used anymore. 
    create() {
        console.log('preload')
        this.scene.start('BoardView')
      
        
            //this.scene.remove('Preload')
    }
}
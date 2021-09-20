var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var mobile = /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
var ios = /iPhone|Ipad/i.test(navigator.userAgent)
var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

var gWidth
var gHeigth



var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER,
    width: 550,
    height: 400,
    scene: [PreloadScene, BoardView]
}

var game = new Phaser.Game(config)
window.game = game

//a placeHolder font style
var style = {
    font: "65px Arial",
    fill: "#ff0044",
    align: "center"
}


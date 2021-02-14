// import Factory from './model/_factory'
import Ninja from './sprite/_ninja'
import Bg from './sprite/_bg'
import Cloud from './sprite/_cloud'
import Mountain from './sprite/_mountain'
import Ground from './sprite/_ground'
import Jump from './sprite/_janpBtn'
import River from './sprite/_river'
import Maluta from './sprite/_malta'

class Main {
  constructor() {
    console.log('Main.constructor')
    this.game = null
    this.SCROLL_SPEED = -10
  }

  init(game) {
    console.log('Main.init')
    this.fps = 24
    this.game = game
    this.game.fps = this.fps
    // this.game.addEventListener('load', () => {
    //   this.game.pushScene( this.game.mainScene() )
    // })
    // this.game.mainScene = () => {
    //   const scene = new Scene()
    //   scene.backgroundColor = 'black'
    //   return scene
    // }
    this.game.onload = () => this.load()
    this.game.on('enterframe', () => this.on())
    this.items = {}
    this.asset = {}
    this.flameCount = 0
    this.second = 0
    this.scene = null
    this.gameStart = false
  }

  facade() {
    console.log('Main.facade')
    this.game.preload('img/ninja.png', 'img/bg.jpg', 'img/btn_jump.png', 'img/kawa.png', 'img/maruta.jpg', 'img/cloud.png', 'img/mountain.png', 'img/grand.png')
    this.game.preload('bgm/se_maoudamashii_retro08.mp3')
  }

  on() {
    console.log('Main.on')
    this.flameCount += 1
    this.second = this.flameCount / this.fps

    if (this.gameStart) {
      const second = this.flameCount % this.fps
      if (second === 0 && this.random(1, 3) % 2 === 0) new Cloud(this).apply()
      if (second === 0 && this.random(1, 3) % 2 === 0) new Cloud(this).apply()
      if (second === 0 && this.random(1, 5) % 2 === 0) new Mountain(this).apply()
    }
  }

  timerInit() {
    this.flameCount = 0
    this.second = 0
  }

  removeScene(scene) {
    if (!scene) return
    while(scene.firstChild){
        scene.removeChild(scene.firstChild);
    }
  }

  replaceScene(scene) {
    this.game.replaceScene(scene)
    this.scene = scene
  }

  titleScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    const label = new Label('右端まで最速で走りきれ<br><br> タッチでゲームシーンへ')
    label.textAlign = 'center'
    label.x = 180
    label.y = 300
    label.font = '26px sans-serif'
    label.color = '#ffffff'
    scene.addChild(label)
    scene.on('touchstart', () => this.gameScene(scene))
    this.replaceScene(scene)
    scene.backgroundColor = '#4a62e6'
  }

  gameScene(old) {
    this.removeScene(old)
    this.timerInit()
    const scene = new Scene()

    this.replaceScene(scene)
    scene.backgroundColor = '#4a62e6'
    // this.items.bg = new Bg(this).init(1).apply()
    // this.items.bg2 = new Bg(this).init(640).apply()
    //
    new Cloud(this).init().apply()
    new Cloud(this).init().apply()
    new Mountain(this).init().apply()
    new Ground(this).apply()
    // this.items.river = new River(this)
    // this.items.maluta = new Maluta(this)
    // this.items.prayer = new Ninja(this).apply()
    // this.items.jumpBtn = new Jump(this).apply()

    this.gameStart = true
  }

  clearScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    const label = new Label('GAME CLEAR')
    label.y = 280
    label.x = 230
    label.font = '26px sans-serif'

    const time = new Label(`クリアタイム ${this.second}秒`)
    time.font = '26px sans-serif'
    time.y = 320
    time.x = 180
    scene.addChild(label)
    scene.addChild(time)
    scene.on('touchstart', () => this.titleScene())
    this.replaceScene(scene)
  }


  start() {
    console.log('Main.start')
    this.titleScene()
    this.game.start()
  }

  stop() {
    console.log('Main.stop')
    this.game.stop()
    this.gameStart = false
  }

  clear() {
    this.clearScene()
    this.gameStart  = false
  }

  load() {
    console.log('Main.load')
  }

  random(min = 0, max = 0) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min
  }
}
export default new Main()

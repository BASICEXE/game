// import Factory from './model/_factory'
import Ninja from './sprite/_ninja'
import Bg from './sprite/_bg'
import Jump from './sprite/_janpBtn'
import River from './sprite/_river'

class Main {
  constructor() {
    console.log('Main.constructor')
    this.game = null
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
  }

  facade() {
    console.log('Main.facade')
    this.game.preload('img/ninja.png', 'img/bg.jpg', 'img/btn_jump.png', 'img/kawa.png')
    this.game.preload('bgm/se_maoudamashii_retro08.mp3')
  }

  on() {
    console.log('Main.on')
    this.flameCount += 1
    this.second = this.flameCount / this.fps
  }

  removeScene(scene) {
    if (!scene) return
    while(scene.firstChild){
        scene.removeChild(scene.firstChild);
    }
  }

  replaceScene(scene) {
    this.game.replaceScene(scene)
  }

  titleScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    const label = new Label('右端まで走りきれ タッチでゲームシーンへ')
    scene.addChild(label)
    scene.on('touchstart', () => this.gameScene(scene))
    this.replaceScene(scene)
  }

  gameScene(old) {
    this.removeScene(old)
    const scene = new Scene()

    this.items.bg = new Bg(this).init(1).apply(scene)
    this.items.bg2 = new Bg(this).init(640).apply(scene)
    this.items.river = new River(this).apply(scene)
    this.items.ninja = new Ninja(this).apply(scene)
    this.items.jumpBtn = new Jump(this).setPrayer(this.items.ninja).apply(scene)
    this.replaceScene(scene)
  }

  clearScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    const label = new Label('GAME CLEAR')
    scene.addChild(label)
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
  }

  clear() {
    this.clearScene()
  }

  load() {
    console.log('Main.load')
  }
}
export default new Main()

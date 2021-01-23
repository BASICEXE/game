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
    console.log('Main.on', this.game)
    this.flameCount += 1
    this.second = this.flameCount / this.fps
  }

  start() {
    console.log('Main.start')
    this.game.start()
  }

  stop() {
    console.log('Main.stop')
    this.game.stop()
  }

  load() {
    console.log('Main.load')
    this.items.bg = new Bg(this.game)
    this.items.bg.init(1).apply()

    this.items.bg2 = new Bg(this.game)
    this.items.bg2.init(640).apply()

    this.items.river = new River(this.game)
    this.items.river.apply()

    this.items.ninja = new Ninja(this.game)
    this.items.ninja.apply()

    this.items.jumpBtn = new Jump(this.game)
    this.items.jumpBtn.setPrayer(this.items.ninja).apply()
  }
}
export default new Main()

import Factory from './model/_factory'
import Ninja from './sprite/_ninja'
import Bg from './sprite/_bg'
import Jump from './sprite/_janpBtn'
// import Controller from './model/_controller'
// import Jump from './button/_jump'

class Main {
  constructor() {
    console.log('Main.constructor')
    this.game = null
  }

  init(game) {
    console.log('Main.init')
    this.game = game
    this.game.fps = 24
    // this.game.addEventListener('load', () => {
    //   this.game.pushScene( this.game.mainScene() )
    // })
    // this.game.mainScene = () => {
    //   const scene = new Scene()
    //   scene.backgroundColor = 'black'
    //   return scene
    // }
    this.game.onload = () => this.load()
    this.items = {}
    this.asset = {}
  }

  facade() {
    console.log('Main.facade')
    this.game.preload('img/ninja.png', 'img/bg.jpg', 'img/btn_jump.png')
    this.game.preload('bgm/se_maoudamashii_retro08.mp3')
    // const label = new Label('Hello, enchant.js!')
    // this.game.rootScene.addChild(label)
    // this.game.rootScene.backgroundColor = '#333'
  }

  assets() {
    this.asset.ninja = this.game.assets['img/ninja.png']
    this.asset.bg = this.game.assets['img/bg.jpg']
    this.asset.jump = this.game.assets['bgm/se_maoudamashii_retro08.mp3'].clone()
    this.asset.jumpBtn = this.game.assets['img/btn_jump.png']
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
    this.assets()
    this.items.bg = new Bg(640, 640, this.game)
    this.items.bg.image(this.asset.bg).init(1).apply()

    this.items.bg2 = new Bg(640, 640, this.game)
    this.items.bg2.image(this.asset.bg).init(640).apply()

    this.items.ninja = new Ninja(16, 25, this.game)
    this.items.ninja.image(this.asset.ninja).soundEffect(this.asset.jump).apply()


    this.items.jumpBtn = new Jump(50, 50, this.game)
    this.items.jumpBtn.image(this.asset.jumpBtn).setPrayer(this.items.ninja).apply()
    // const circle = this.factory().circle(40, 40, 'rgba(252, 0, 0, 0.8)')
    // this.game.rootScene.addChild(bg)
    // const button2 = new Button('ボタン', 'light', 20, 320)

    // const test = new Controller(circle, this.game).instance()

    // this.game.rootScene.addChild(button2)
  }

  factory() {
    return Factory
  }
}
export default new Main()

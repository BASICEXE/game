import Factory from './model/_factory'
import Ninja from './sprite/_ninja'
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
    this.game.preload('img/test.gif')

    // const label = new Label('Hello, enchant.js!')
    // this.game.rootScene.addChild(label)
    // this.game.rootScene.backgroundColor = '#333'
  }

  assets() {
    this.asset.ninja = this.game.assets['img/test.gif']
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
    this.items.ninja = new Ninja(32, 32, this.game)
    this.items.ninja.image(this.asset.ninja).apply()
    // const circle = this.factory().circle(40, 40, 'rgba(252, 0, 0, 0.8)')
    // const button2 = new Button('ボタン', 'light', 20, 320)

    // const test = new Controller(circle, this.game).instance()

    // this.game.rootScene.addChild(button2)
  }

  factory() {
    return Factory
  }
}
export default new Main()

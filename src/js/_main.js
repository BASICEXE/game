import Test from './model/_ninja'

class Main {
  constructor() {
    console.log('Main.constructor')
    this.game = null
  }

  init(game) {
    console.log('Main.init')
    this.game = game
    this.game.fps = 24
    this.game.preload('img/test.gif')
    // this.game.addEventListener('load', () => {
    //   this.game.pushScene( this.game.mainScene() )
    // })
    // this.game.mainScene = () => {
    //   const scene = new Scene()
    //   scene.backgroundColor = 'black'
    //   return scene
    // }
  }

  facade() {
    console.log('Main.facade')
    // const label = new Label('Hello, enchant.js!')
    // this.game.rootScene.addChild(label)
    this.game.onload = () => this.load()
      // this.game.rootScene.addChild(label)
      // this.game.rootScene.backgroundColor = '#333'
  }

  load() {
    console.log('Main.load')
    const test = new Test(32, 32)
    const ninja = test.instance(this.game.assets['img/test.gif'])
    this.game.rootScene.addChild(ninja)

    ninja.on('enterframe', function() {
      this.x += 1
      // this.rotate(2)
      // this.scale(1.01, 1.01)
      if (this.x > 320) this.x = 0
    })
  }

  start() {
    console.log('Main.start')
    this.game.start()
  }
}
export default new Main()

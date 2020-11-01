import Item from './model/_item'

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
      // this.game.rootScene.addChild(label)
      // this.game.rootScene.backgroundColor = '#333'
    this.game.onload = () => this.load()
  }

  load() {
    console.log('Main.load')
    const item = new Item(32, 32)
    const ninja = item.instance(this.game.assets['img/test.gif'])
    this.game.rootScene.addChild(ninja)
  }

  start() {
    console.log('Main.start')
    this.game.start()
  }
}
export default new Main()

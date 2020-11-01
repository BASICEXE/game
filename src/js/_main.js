class Main {
  constructor() {
    this.game = null
  }

  init(game) {
    this.game = game
  }

  facade() {
    const label = new Label('Hello, enchant.js!')
    this.game.rootScene.addChild(label)
  }

  start() {
    this.game.start()
  }
}
export default new Main()

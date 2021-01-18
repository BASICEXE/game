class Base {
  constructor(x, y, game) {
    this.item = new Sprite(x, y)
    this.item.x = 0
    this.item.y = 0
    this.game = game

    this.item.on('enterframe', () => this.on())
  }

  on() {
  }

  image(data) {
    this.item.image = data
    return this
  }

  apply() {
    this.game.rootScene.addChild(this.item)
    return this
  }

  instance() {
    return this.item
  }
}

export default Base

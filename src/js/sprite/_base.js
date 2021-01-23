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


  before(reference) {
    this.game.rootScene.insertBefore(this.item, reference)
    return this
  }

  apply() {
    this.item.image = this.image
    this.game.rootScene.addChild(this.item)
    return this
  }

  remove() {
    this.game.rootScene.removeChild(this.item)
    return this
  }

  instance() {
    return this.item
  }
}

export default Base

class Item {
  constructor(x, y, game) {
    this.item = new Sprite(x, y)
    this.item.x = 0
    this.item.y = 0
    this.game = game
  }

  on(test) {
    if (test) this.item.on('enterframe', () => test(this.item))
  }

  instance(data) {
    this.item.image = data
    return this.item
  }
}

export default Item

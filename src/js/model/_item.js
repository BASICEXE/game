class Item {
  constructor(x, y, game) {
    this.item = new Sprite(x, y)
    this.item.x = 0
    this.item.y = 0
    this.item.on('enterframe', () => this.on())
    this.game = game
  }

  on() {
    if (this.game.input.left) this.item.x -= 5
    if (this.game.input.right) this.item.x += 5
    if (this.game.input.up) this.item.y -= 5
    if (this.game.input.down) this.item.y += 5
    if (this.item.x > 320) this.item.x = 0
  }

  instance(data) {
    this.item.image = data
    return this.item
  }
}

export default Item

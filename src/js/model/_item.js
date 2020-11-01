class Item {
  constructor(x, y) {
    this.item = new Sprite(x, y)
    this.item.x = 0
    this.item.y = 0
    this.item.on('enterframe', () => this.on())
  }

  on() {
    this.item.x += 1
    if (this.item.x > 320) this.item.x = 0
  }

  instance(data) {
    this.item.image = data
    return this.item
  }
}

export default Item

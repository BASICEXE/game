class Ninja {
  constructor(x, y) {
    this.item = new Sprite(x, y)
    this.item.x = 0
    this.item.y = 0
  }

  instance(data) {
    this.item.image = data
    return this.item
  }
}

export default Ninja

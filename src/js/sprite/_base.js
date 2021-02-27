class Base {
  constructor(x, y, Controller) {
    this.controller = Controller 
    this.item = new Sprite(x, y)
    this.item.x = 0
    this.item.y = 0
    this.game = Controller.game

    this.item.on('enterframe', () => this.on())
  }

  on() {
  }

  random(min = 0, max = 0) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min
  }

  apply(group) {
    this.item.image = this.image
    this.group = group
    this.group.addChild(this.item)
    return this
  }

  remove() {
    if (!this.group) return this
    this.group.removeChild(this.item)
    return this
  }

  instance() {
    return this.item
  }
}

export default Base

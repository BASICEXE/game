import Base from './_base'

class Bg extends Base {
  constructor(x, y, game) {
    super(x, y, game)
    this.item.y = 0
    // this.item.scale(2)
    // this.item.scaleY = 1
    // this.item.scaleX = -2
    this.item.frame = 1
    this.SCROLL_SPEED = 10
  }

  init(num) {
    this.item.x = num
    return this
  }

  on() {
    this.item.x += -10
    if (this.item.x <= -630) {
      this.item.x = 630
    }
  }
}

export default Bg

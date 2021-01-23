import Base from './_base'

class Bg extends Base {
  constructor(Controller) {
    super(640, 640, Controller)
    this.item.y = 0
    this.item.frame = 0
    this.image = this.game.assets['img/bg.jpg']
    return this
  }

  init(num) {
    this.item.x = num
    return this
  }

  on() {
    this.item.x += this.controller.SCROLL_SPEED
    if (this.item.x <= -640) {
      this.item.x = 640
    }
  }
}

export default Bg

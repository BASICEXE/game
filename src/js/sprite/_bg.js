import Base from './_base'

class Bg extends Base {
  constructor(game) {
    super(640, 640, game)
    this.item.y = 0
    this.item.frame = 0
    this.SCROLL_SPEED = 10
    this.image = this.game.assets['img/bg.jpg']
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

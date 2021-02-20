import Base from './_base'

export default class Rook extends Base {
  constructor(Controller) {
    super(251, 127, Controller)
    this.item.y = 500
    this.item.x = 640 + 251
    // this.item.x = 487
    this.item.scale(0.6)
    this.image = this.game.assets['img/rook.png']
    return this
  }

  move(num) {
    this.item.x += num
  }

  on() {
    this.move(this.controller.SCROLL_SPEED)
    // const prayer = this.controller.items.prayer
    // if (this.area.intersect(prayer.item)) {
    //   prayer.slowRun()
    //   this.controller.SCROLL_SPEED = 0
    // } else {
    //   prayer.backRun()
    //   this.controller.SCROLL_SPEED = -10
    // }
  }
}


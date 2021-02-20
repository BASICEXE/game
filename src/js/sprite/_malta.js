import Base from './_base'

class Maluta extends Base {
  constructor(Controller) {
    super(181, 81, Controller)
    this.item.y = 340
    this.item.x = 640 + 181
    // this.item.x = 487
    this.item.scale(0.8)
    this.image = this.game.assets['img/wind.png']
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

export default Maluta

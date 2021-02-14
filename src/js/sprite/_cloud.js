import Base from './_base'

class Cloud extends Base {
  constructor(Controller) {
    super(171, 51, Controller)
    const y = this.random(0, 20) * 10
    this.item.y = y
    this.item.x = 640
    this.item.frame = this.random(0, 2)
    if (y < 80) this.SPEED = this.random(2, 8)
    else this.SPEED = this.random(0, 2)
    this.image = this.game.assets['img/cloud.png']
    return this
  }

  init() {
    this.item.x = this.random(3, 64) * 15
    return this
  }

  on() {
    this.item.x += (this.controller.SCROLL_SPEED + this.SPEED)
    // if (this.item.x <= -171) {
    //   this.item.x = 640
    // }
  }
}

export default Cloud

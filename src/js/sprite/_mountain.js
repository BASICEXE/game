import Base from './_base'

class Mountain extends Base {
  constructor(Controller) {
    super(262, 138, Controller)
    this.item.y = 351
    this.item.x = 640
    this.item.frame = this.random(0, 1)
    this.image = this.game.assets['img/mountain.png']
    return this
  }

  init() {
    this.item.x = this.random(3, 64) * 15
    return this
  }

  on() {
    this.item.x += this.controller.scroll()
  }
}

export default Mountain

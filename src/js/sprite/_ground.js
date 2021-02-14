import Base from './_base'

class Ground extends Base {
  constructor(Controller) {
    super(640, 151, Controller)
    this.item.y = 489
    this.item.x = 0
    this.item.frame = 0
    this.image = this.game.assets['img/grand.png']
    return this
  }

  on() {
    // this.item.x += this.controller.SCROLL_SPEED
    // if (this.item.x <= -171) {
    //   this.item.x = 640
    // }
  }
}

export default Ground

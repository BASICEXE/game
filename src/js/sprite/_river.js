import Base from './_base'

class River extends Base {
  constructor(Controller) {
    super(153, 153, Controller)
    this.item.y = 490
    this.item.x = 640
    this.SCROLL_SPEED = 10
    this.image = this.game.assets['img/kawa.png']
    return this
  }

  on() {
    this.item.x += -10
  }
}

export default River

import Base from './_base'

class River extends Base {
  constructor(game) {
    super(153, 153, game)
    this.item.y = 490
    this.item.x = 640
    this.SCROLL_SPEED = 10
    this.image = this.game.assets['img/kawa.png']
  }

  on() {
    this.item.x += -10
  }
}

export default River

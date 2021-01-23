import Base from './_base'

class jumpBtn extends Base {
  constructor(Controller) {
    super(50, 50, Controller)
    this.item.y = 550
    this.item.x = 500
    // this.item.scale(2)
    this.item.on('touchstart', () => this.touchstart())
    this.item.on('touchend', () => this.touchend())

    this.player = null
    this.image = this.game.assets['img/btn_jump.png']
    return this
  }

  on() {
  }

  touchstart() {
    this.player.touchstart()
  }

  touchend() {
    this.player.touchend()
  }

  setPrayer(player) {
    this.player = player
    return this
  }
}

export default jumpBtn

import Base from './_base'

class jumpBtn extends Base {
  constructor(x, y, game) {
    super(x, y, game)
    this.item.y = 550
    this.item.x = 500
    this.player = null
    // this.item.scale(2)
    this.item.on('touchstart', () => this.touchstart())
    this.item.on('touchend', () => this.touchend())
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

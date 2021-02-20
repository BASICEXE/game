import EnemyBase from './_enemyBase'
import Bakuhatu from './_bakuhatu'

export default class Ashigaru extends EnemyBase {
  constructor(Controller) {
    super(25, 25, Controller)
    this.item.y = 490
    this.item.x = 640 + 25

    this.item.scale(1.8)

    this.item.frame = [0, 1, 2]
    this.image = this.game.assets['img/ashigaru.png']

    this.runSpeed = -1
    return this
  }

  move(num) {
    this.item.x += num + this.runSpeed
  }

  on() {
    this.move(this.controller.scroll())
    const prayer = this.controller.items.prayer
    if (this.controller.intersectPrayer(this.item)) {
      this.controller.SCROLL_SPEED = 0
      this.controller.SCROLL_FLG = 1
      prayer.runSpeed = 0
      prayer.SPEED_FLG = 1
      new Bakuhatu(this.controller, this.item.y - 55, this.item.x -65)
      this.item.remove()
    }
  }
}


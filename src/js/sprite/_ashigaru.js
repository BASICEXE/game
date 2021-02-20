import EnemyBase from './_enemyBase'

export default class Ashigaru extends EnemyBase {
  constructor(Controller) {
    super(25, 25, Controller)
    this.item.y = 490
    this.item.x = 640 + 25

    this.item.scale(1.8)

    this.item.frame = [0, 1, 2]
    this.image = this.game.assets['img/ashigaru.png']

    this.runSpeed = 1
    return this
  }

  move(num) {
    this.item.x += num + this.runSpeed
  }

  on() {
    this.move(this.controller.SCROLL_SPEED)
    const prayer = this.controller.items.prayer
    if (this.controller.intersectPrayer(this.item)) {
      prayer.slowRun()
      // this.controller.SCROLL_SPEED = 0
    } else {
      prayer.backRun()
      // this.controller.SCROLL_SPEED = -10
    }
  }
}


import EnemyBase from './_enemyBase'

export default class Musha extends EnemyBase {
  constructor(Controller) {
    super(25, 33, Controller)
    this.item.y = 488
    this.item.x = 200

    this.item.scale(1.5)
    this.item.scaleX = -1.5

    this.item.frame = [0, 1, 2]
    this.image = this.game.assets['img/musha.png']

    this.runSpeed = 0.6
    return this
  }

  move() {
    this.item.x += this.runSpeed
  }

  on() {
    this.move()
    if (this.controller.intersectPrayer(this.item)) this.controller.clear()
    if (this.item.x > 650) this.controller.over()
  }
}


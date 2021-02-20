import EnemyBase from './_enemyBase'

export default class Musha extends EnemyBase {
  constructor(Controller) {
    super(25, 33, Controller)
    this.item.y = 488
    this.item.x = 100

    this.item.scale(1.5)
    this.item.scaleX = -1.5

    this.item.frame = [0, 1, 2]
    this.image = this.game.assets['img/musha.png']

    this.runSpeed = 0.8
    return this
  }

  move() {
    this.item.x += this.runSpeed
  }

  on() {
    this.move()
    if (this.controller.intersectPrayer(this.item)) this.controller.clear()
  }
}


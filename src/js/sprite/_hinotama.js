import EnemyBase from './_enemyBase'

export default class Hinotama extends EnemyBase {
  constructor(Controller) {
    super(39, 25, Controller)
    this.item.y = this.random(380, 430)
    this.item.x = 620

    this.item.scale(1.5)
    // this.item.scaleX = -1.5

    this.item.frame = [0, 1]
    this.image = this.game.assets['img/hinotama.png']

    this.runSpeed = -10
    return this
  }

  move() {
    this.item.x += this.runSpeed
  }

  on() {
    this.move()
    if (this.controller.intersectPrayer(this.item)) this.controller.over()
  }
}


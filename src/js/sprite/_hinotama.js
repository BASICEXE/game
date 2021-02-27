import EnemyBase from './_enemyBase'
import Bakuhatu2 from './_bakuhatu2'

export default class Hinotama extends EnemyBase {
  constructor(Controller) {
    super(39, 25, Controller)
    this.item.y = this.random(380, 460)
    // this.item.y = 460
    this.item.x = 620

    this.item.scale(1.5)
    // this.item.scaleX = -1.5

    this.item.frame = [0, 1]
    this.image = this.game.assets['img/hinotama.png']

    this.runSpeed = -10
    this.flg = false
    return this
  }

  move() {
    this.item.x += this.runSpeed
    this.item.y += this.random(-10, 10)
    if (this.item.y > 460) this.item.y = 460
    if (this.item.y > 380) this.item.y = 380
  }

  getDegree(min, max, n) {
    n %= max
    if (n < min) n += max
    return n
  }

  on() {
    this.move()
    if (this.flg) this.controller.over()
    if (this.controller.intersectPrayer(this.item)) {
      new Bakuhatu2(this.controller, this.item.y - 55, this.item.x -65)
      this.flg = true
    }
  }
}


import EnemyBase from './_enemyBase'

export default class Musha extends EnemyBase {
  constructor(Controller) {
    super(25, 33, Controller)
    this.item.y = 462
    this.item.x = 200

    this.item.scale(2.5)
    this.item.scaleX = -2.5

    this.item.frame = [0, 1, 2]
    this.image = this.game.assets['img/musha.png']

    this.defaultRunSpeed = 0.4
    this.runSpeed = this.defaultRunSpeed
    this.SPEED_FLG = 0
    return this
  }

  move() {
    if (this.controller.isSecond()) this.oneSecond()
    this.item.x += this.runSpeed
  }

  oneSecond() {
    if (this.SPEED_FLG > 0) this.SPEED_FLG -= 1
    if (this.SPEED_FLG === 0) this.runSpeed = this.defaultRunSpeed
  }

  on() {
    this.move()
    if (this.controller.intersectPrayer(this.item)) this.controller.clear()
    if (this.item.x > 650) this.controller.over()
  }
}


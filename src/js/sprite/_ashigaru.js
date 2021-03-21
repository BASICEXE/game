import EnemyBase from './_enemyBase'
import Bakuhatu from './_bakuhatu'

export default class Ashigaru extends EnemyBase {
  constructor(Controller) {
    super(25, 25, Controller)
    this.item.y = 470
    this.item.x = 640 + 25

    this.item.scale(2.8)

    this.item.frame = [0, 1, 2]
    this.image = this.game.assets['img/ashigaru.png']

    this.runSpeed = -1
    this.isJump = false
    this.GROUND_Y = 470
    return this
  }

  move(num) {
    this.item.x += num + this.runSpeed
  }

  on() {
    this.move(this.controller.scroll())
    this.jump()
    const prayer = this.controller.items.prayer
    const boss = this.controller.items.boss
    if (this.controller.intersectPrayer(this.item)) {
      this.controller.SCROLL_SPEED = 0
      this.controller.SCROLL_FLG = 1
      prayer.slowRun()
      boss.runSpeed = 4
      boss.SPEED_FLG = 1
      new Bakuhatu(this.controller, this.item.y - 55, this.item.x -65)
      this.item.remove()
    }
  }

  jump() {
    if (this.random(1, 35) === 1) {
      if (!this.isJump) {
        this.isJump = true
        this.vy = this.random(-10, -15)
      }
    }
    // ジャンプ中
    if (this.isJump) {
      this.vy += 1
      this.item.y += this.vy
      if (this.item.y >= this.GROUND_Y) {
        this.item.y = this.GROUND_Y
        this.isJump = false
        this.item.frame = [0, 1, 2]
      }
    }
  }
}


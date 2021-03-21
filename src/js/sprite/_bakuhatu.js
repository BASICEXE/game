import EnemyBase from './_enemyBase'

export default class Bakuhatu extends EnemyBase {
  constructor(Controller, y, x) {
    super(150, 150, Controller)
    this.item.y = y
    this.item.x = x

    this.item.scale(-0.8)
    // this.item.scaleX = -1.5

    this.item.frame = 0
    this.item.image = this.game.assets['img/bakuhatsu3.png']
    this.controller.scene.addChild(this.item)

    this.item.on('enterframe', () => this.on())
    return this
  }

  on() {
    if (this.controller.isSecond()) this.remove()
  }

  apply() {
    return this
  }

  remove() {
    this.controller.scene.removeChild(this.item)
    return this
  }

}


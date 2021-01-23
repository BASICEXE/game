import Base from './_base'

class Maluta extends Base {
  constructor(Controller) {
    super(900, 309, Controller)
    this.item.y = 390
    this.item.x = 250
    this.item.scale(0.1)
    this.image = this.game.assets['img/maruta.jpg']

    this.apply()

    this.area = new Sprite(100, 300)
    this.area.y = 490 + 10
    this.area.x = 250
    const surf = new Surface(100, 300)
    surf.context.beginPath()
    surf.context.fillStyle = '#fff'
    surf.context.fillRect(0, 0, 100, 30)
    this.area.image = surf
    this.controller.scene.addChild(this.area)

    return this
  }

  move(num) {
    this.area.x += num
    this.item.x += num
  }

  on() {
    this.move(this.controller.SCROLL_SPEED)
    const prayer = this.controller.items.prayer
    if (this.area.intersect(prayer.item)) {
      prayer.slowRun()
      this.controller.SCROLL_SPEED = 0
    } else {
      prayer.backRun()
      this.controller.SCROLL_SPEED = -10
    }
  }
}

export default Maluta

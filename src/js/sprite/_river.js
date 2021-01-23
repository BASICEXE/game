import Base from './_base'

class River extends Base {
  constructor(Controller) {
    super(153, 153, Controller)
    this.item.y = 490
    this.item.x = 640
    this.SCROLL_SPEED = 10
    this.image = this.game.assets['img/kawa.png']

    this.apply()

    this.area = new Sprite(100, 30)
    this.area.y = 490 + 10
    this.area.x = 640 + 30
    // const surf = new Surface(100, 30)
    // surf.context.beginPath()
    // surf.context.fillStyle = '#fff'
    // surf.context.fillRect(0, 0, 90, 30)
    // this.area.image = surf
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
      this.controller.SCROLL_SPEED = -5
    } else {
      prayer.backRun()
      this.controller.SCROLL_SPEED = -10
    }
  }
}

export default River

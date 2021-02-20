import Base from './_base'

class River extends Base {
  constructor(Controller) {
    super(153, 153, Controller)
    this.item.y = 0
    this.item.x = 0
    this.image = this.game.assets['img/kawa.png']
    this.item.image = this.image

    this.area = new Sprite(100, 30)
    this.area.y = 10
    this.area.x = 20
    const surf = new Surface(100, 30)
    surf.context.beginPath()
    surf.context.fillStyle = '#fff'
    surf.context.fillRect(0, 0, 100, 30)
    this.area.image = surf
    // this.controller.scene.addChild(this.area)

    const group = new Group()
    group.addChild(this.area)
    group.addChild(this.item)
    group.y = 640 - 148
    group.x = 640 + 153
    this.group = group

    return this
  }

  move(num) {
    this.group.x += num
  }

  before(reference) {
    this.controller.scene.insertBefore(this.group, reference)
    return this
  }

  apply() {
    this.controller.scene.addChild(this.group)
    return this
  }

  on() {
    this.move(this.controller.scroll())
    // const prayer = this.controller.items.prayer
    // if (this.area.intersect(prayer.item)) {
    //   prayer.slowRun()
    //   this.controller.scroll(-5)
    // } else {
    //   prayer.backRun()
    //   this.controller.scroll(-10)
    // }
  }
}

export default River

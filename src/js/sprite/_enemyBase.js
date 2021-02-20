export default class EnemyBase {
  constructor(x, y, Controller) {
    this.controller = Controller 
    this.item = new Sprite(x, y)
    this.item.x = 0
    this.item.y = 0
    this.game = Controller.game

    this.item.on('enterframe', () => this.on())
    return this
  }

  move(num) {
    this.item.x += num
  }

  on() {
    this.move(this.controller.SCROLL_SPEED)
    // const prayer = this.controller.items.prayer
    // if (this.area.intersect(prayer.item)) {
    //   prayer.slowRun()
    //   this.controller.SCROLL_SPEED = 0
    // } else {
    //   prayer.backRun()
    //   this.controller.SCROLL_SPEED = -10
    // }
  }

  random(min = 0, max = 0) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min
  }

  before(reference) {
    this.game.rootScene.insertBefore(this.item, reference)
    return this
  }

  apply() {
    this.item.image = this.image
    this.controller.scene.addChild(this.item)
    return this
  }

  remove() {
    this.controller.scene.removeChild(this.item)
    return this
  }

  instance() {
    return this.item
  }
}


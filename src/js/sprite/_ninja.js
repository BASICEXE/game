import Base from './_base'

class Ninja extends Base {
  constructor(x, y, game) {
    super(x, y, game)
    this.isJump = false
    this.item.on('touchstart', () => this.touchstart())
    this.item.on('touchend', () => this.touchend())
  }

  touchstart() {
    if (!this.isJump) {
      this.isJump = true
      this.vy = -10
    }
  }

  touchend() {
  }

  jump() {
    const GROUND_Y = 100
    // ジャンプ中
    if (this.isJump) {
      this.vy += 1
      this.item.y += this.vy
      if (this.item.y >= GROUND_Y) {
        this.item.y = GROUND_Y
        this.isJump = false
      }
    }
  }

  on() {
    if (this.game.input.up) this.item.y -= 5
    if (this.game.input.down) this.item.y += 5
    this.jump()
    // if(++this.walkIndex >= this.walkPattern.length){
    //   this.walkIndex = 0;
    // }
    // this.frame = this.walkPattern[this.walkIndex];
  }
}

export default Ninja

import Base from './_base'

class Ninja extends Base {
  constructor(x, y, game) {
    super(x, y, game)
    this.isJump = false
    this.item.on('touchstart', () => this.touchstart())
    this.item.on('touchend', () => this.touchend())
    this.item.x = 100
    this.item.scale(2)
    this.item.frame = [0, 1, 2]
    this.GROUND_Y = 492
    this.item.y = this.GROUND_Y
  }

  touchstart() {
    if (!this.isJump) {
      this.soundEffect.play()
      this.isJump = true
      this.vy = -20
      this.item.frame = 0
    }
  }

  touchend() {
    if(this.isJump && this.vy < 0){
      this.vy /= 2;
    }
  }

  jump() {
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

  on() {
    this.jump()
  }
}

export default Ninja

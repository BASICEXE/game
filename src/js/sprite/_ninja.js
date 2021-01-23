import Base from './_base'

class Ninja extends Base {
  constructor(game) {
    super(16, 25, game)
    this.isJump = false
    this.GROUND_Y = 492
    this.item.on('touchstart', () => this.touchstart())
    this.item.on('touchend', () => this.touchend())
    this.item.x = 100
    this.item.scale(2)
    this.item.frame = [0, 1, 2]
    this.item.y = this.GROUND_Y

    this.soundEffect = this.game.assets['bgm/se_maoudamashii_retro08.mp3'].clone()
    this.image = this.game.assets['img/ninja.png']
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

  run() {
    if (!this.isJump) {
      this.item.x += 1
    }
  }

  on() {
    this.jump()
    this.run()
  }
}

export default Ninja

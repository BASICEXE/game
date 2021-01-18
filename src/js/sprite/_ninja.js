import Base from './_base'

class Ninja extends Base {
  constructor(x, y, game) {
    super(x, y, game)
  }

  on() {
    if (this.game.input.left) this.item.x -= 5
    if (this.game.input.right) this.item.x += 5
    if (this.game.input.up) this.item.y -= 5
    if (this.game.input.down) this.item.y += 5
    // if(++this.walkIndex >= this.walkPattern.length){
    //   this.walkIndex = 0;
    // }
    // this.frame = this.walkPattern[this.walkIndex];
  }
}

export default Ninja

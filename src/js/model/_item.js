class Item {
  constructor(x, y, game) {
    this.item = new Sprite(x, y)
    this.item.x = 0
    this.item.y = 0
    this.game = game

    this.item.on('enterframe', () => this.on())
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

  image(data) {
    this.item.image = data
  }

  instance() {
    return this.item
  }

  apply() {
    this.game.rootScene.addChild(this.item)
  }
}

export default Item

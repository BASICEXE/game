class Controller {
  constructor(item, game) {
    this.item = item
    this.item.on('touchstart', () => this.move())
    this.item.on('click', () => this.move())
    this.game = game
    const height = game.height - this.item.height - 20
    const width = game.width - this.item.width - 20
    this.item.y = height
    this.item.x = width
  }

  move() {
    console.log('...')
  }

  instance() {
    return this.item
  }
}

export default Controller

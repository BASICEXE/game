class Jump {
  constructor() {
    const button = new Button('ボタン', 'light')
    button.tag = 'ボタン'
    button.width = 200
    button.height = 10
    this.button = button
  }

  init(game) {
    button.x = game.width - 20
    button.y = game.height - 20
  }

  move() {
    console.log('...')
  }

  instance() {
    return this.button
  }
}

export default Jump

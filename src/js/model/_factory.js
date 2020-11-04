class Factory {
  constructor() {
  }
  drawCircle(w, h, color) {
    const player = new Sprite(w, h)
    const surf = new Surface(w, h)
    surf.context.beginPath()
    surf.context.fillStyle = color
    surf.context.fillRect(0, 0, w, h)
    player.image = surf
    return player
  }
  square(w, h, color) {
    const player = new Sprite(w, h)
    const surf = new Surface(w, h)
    surf.context.beginPath()
    surf.context.fillStyle = color
    surf.context.fillRect(0, 0, w, h)
    player.image = surf
    return player
  }
}

export default new Factory()

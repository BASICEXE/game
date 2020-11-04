class Factory {
  constructor() {
  }
  circle(w, h, color) {
    const player = new Sprite(w, h)
    const surf = new Surface(w, h)
    surf.context.beginPath()
    surf.context.arc(w * 0.5, h * 0.5, w * 0.5, 0, Math.PI*2, false)
    surf.context.fillStyle = color
    surf.context.fill()
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

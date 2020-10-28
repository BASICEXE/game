require('./enchant.min.js');

enchant()

window.onload = function(){
  const game = new Game(320, 320)

  const label = new Label('Hello, enchant.js!')
  game.rootScene.addChild(label)

  game.start()
}

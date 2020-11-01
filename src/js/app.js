require('./enchant.min.js');
enchant()

import Main from './_main'

window.onload = function(){
  console.log('読み込み完了')
  const core = new Core(320, 320)
  Main.init(core)
  Main.facade()
  Main.start()
}

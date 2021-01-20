import './enchant.js'
import './plugins/ui.enchant'
import './plugins/avatar.enchant'
enchant()

import Main from './_main'

window.main = Main

window.onload = function(){
  console.log('読み込み完了')

  const core = new Core(640, 640)
  Main.init(core)
  Main.facade()
  Main.start()
}

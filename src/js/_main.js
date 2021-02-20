// import Factory from './model/_factory'
import Ninja from './sprite/_ninja'
// import Bg from './sprite/_bg'
import Cloud from './sprite/_cloud'
import Mountain from './sprite/_mountain'
import Ground from './sprite/_ground'
import Jump from './sprite/_janpBtn'
import River from './sprite/_river'
import Maluta from './sprite/_malta'
import Rook from './sprite/_rook'
import Musha from './sprite/_musha'
import Ashigaru from './sprite/_ashigaru'
import Hinotama from './sprite/_hinotama'

class Main {
  constructor() {
    console.log('Main.constructor')
    this.game = null
    this.SCROLL_SPEED = -10
    this.SCROLL_FLG = 0
  }

  init(game) {
    console.log('Main.init')
    this.fps = 24
    this.game = game
    this.game.fps = this.fps
    // this.game.addEventListener('load', () => {
    //   this.game.pushScene( this.game.mainScene() )
    // })
    // this.game.mainScene = () => {
    //   const scene = new Scene()
    //   scene.backgroundColor = 'black'
    //   return scene
    // }
    this.game.onload = () => this.load()
    this.game.on('enterframe', () => this.on())
    this.items = {}
    this.asset = {}
    this.flameCount = 0
    this.second = 0
    this.scene = null
    this.gameStart = false
  }

  facade() {
    console.log('Main.facade')
    this.game.preload(
      'img/ninja.png',
      'img/btn_jump.png',
      'img/kawa.png',
      'img/cloud.png',
      'img/mountain.png',
      'img/grand.png',
      'img/wind.png',
      'img/rook.png',
      'img/musha.png',
      'img/ashigaru.png',
      'img/hinotama.png',
      'img/bakuhatsu3.png',
      'img/bakuhatsu1.png',
    )
    this.game.preload('bgm/se_maoudamashii_retro08.mp3')
  }

  on() {
    console.log('Main.on')
    this.flameCount += 1
    this.second = this.flameCount / this.fps

    // ストップ秒数がある場合
    if (this.isSecond() && this.SCROLL_FLG > 0) this.SCROLL_FLG -= 1
    // ストップ秒数がない場合
    if (this.isSecond() && this.SCROLL_FLG === 0) this.SCROLL_SPEED = -10

    if (this.gameStart) {
      const isSecond = this.isSecond()
      if (isSecond && this.random(1, 3) === 1) new Cloud(this).apply()
      if (isSecond && this.random(1, 4) === 1) new Cloud(this).apply()
      if (isSecond && this.random(1, 5) === 1) new Mountain(this).apply()
      if (isSecond) this.hurdle()
    }
  }

  isSecond() {
    // 秒を判定する
    return this.flameCount % this.fps === 0
  }

  hurdle() {
    if (this.random(1, 5) === 1) new Rook(this).apply()
    if (this.random(1, 9) === 1) new River(this)
    if (this.random(1, 3) === 1) new Ashigaru(this).apply()
    if (this.random(1, 3) === 1) new Hinotama(this).apply()
    // if (num === 2) new Maluta(this).apply()
  }

  timerInit() {
    this.flameCount = 0
    this.second = 0
  }

  removeScene(scene) {
    if (!scene) return
    while(scene.firstChild){
        scene.removeChild(scene.firstChild);
    }
  }

  replaceScene(scene) {
    this.game.replaceScene(scene)
    this.scene = scene
  }

  titleScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    const label = new Label('武者を捕まえろ<br><br> タッチでゲームシーンへ')
    label.textAlign = 'center'
    label.x = 180
    label.y = 300
    label.font = '26px sans-serif'
    label.color = '#ffffff'
    scene.addChild(label)
    scene.on('touchstart', () => this.gameScene(scene))
    this.replaceScene(scene)
    scene.backgroundColor = '#4a62e6'
  }

  gameScene(old) {
    this.removeScene(old)
    this.timerInit()
    const scene = new Scene()

    this.replaceScene(scene)
    scene.backgroundColor = '#4a62e6'
    new Cloud(this).init().apply()
    new Cloud(this).init().apply()
    new Mountain(this).init().apply()
    new Ground(this).apply()
    new River(this)
    // new Maluta(this).apply()
    new Rook(this).apply()
    new Ashigaru(this).apply()
    new Hinotama(this).apply()
    this.items.prayer = new Ninja(this).apply()
    this.items.jumpBtn = new Jump(this).apply()
    this.items.boss = new Musha(this).apply()

    this.gameStart = true
  }

  overScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    const label = new Label('GAME OVER')
    label.y = 280
    label.x = 230
    label.font = '26px sans-serif'

    scene.addChild(label)
    scene.on('touchstart', () => this.titleScene())
    this.replaceScene(scene)
  }

  clearScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    const label = new Label('GAME CLEAR')
    label.y = 280
    label.x = 230
    label.font = '26px sans-serif'

    const time = new Label(`タイム ${this.second}秒`)
    time.font = '26px sans-serif'
    time.y = 320
    time.x = 180
    scene.addChild(label)
    scene.addChild(time)
    scene.on('touchstart', () => this.titleScene())
    this.replaceScene(scene)
  }

  intersectPrayer(chara) {
    const prayer = this.getData(this.items, 'prayer.item')
    if (!prayer) return false
    return prayer.intersect(chara)
  }

  start() {
    console.log('メイン処理開始')
    this.titleScene()
    this.game.start()
  }

  stop() {
    console.log('メイン処理停止')
    this.game.stop()
    this.gameStart = false
  }

  over() {
    this.overScene()
    this.gameStart  = false
  }

  clear() {
    console.log('スクリーンクリア')
    this.clearScene()
    this.gameStart  = false
  }

  load() {
    console.log('メイン読み込み')
  }

  random(min = 0, max = 0) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min
  }

  scroll() {
    return this.SCROLL_SPEED
  }

  getData(object, path, defaultValue) {
    if (!object) return null
    const propertyArray = path.split('.')
    let result = object
    try {
      propertyArray.map((value) => {
        const r = result[value]
        result = r
      })
      return result
    } catch (e) {
      return defaultValue
    }
  }
}
export default new Main()

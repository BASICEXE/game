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
import { MyLabel } from './model/_label'

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
    this.restart = 0
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
      'bgm/se_maoudamashii_retro08.mp3',
      'bgm/MusMus-BGM-122.mp3',
      'bgm/MusMus-BGM-115.mp3',
      'bgm/MusMus-BGM-104.mp3',
      'bgm/panti.mp3',
      'bgm/bakuhatu.mp3',
    )
  }

  on() {
    console.log('Main.on')
    this.flameCount += 1
    if (this.isSecond()) this.second += 1

    // ストップ秒数がある場合
    if (this.isSecond() && this.SCROLL_FLG > 0) this.SCROLL_FLG -= 1
    // ストップ秒数がない場合
    if (this.isSecond() && this.SCROLL_FLG === 0) this.SCROLL_SPEED = -10

    if (this.gameStart) {
      const isSecond = this.isSecond()
      if (isSecond && this.random(1, 3) === 1) new Cloud(this).apply(this.bgGroup)
      if (isSecond && this.random(1, 4) === 1) new Cloud(this).apply(this.bgGroup)
      if (isSecond && this.random(1, 5) === 1) new Mountain(this).apply(this.bgGroup)
      if (isSecond) this.hurdle()
    }
  }

  isSecond() {
    // 秒を判定する
    return this.flameCount % this.fps === 0
  }

  hurdle() {
    if (this.random(1, 5) === 1) new Rook(this).apply(this.bgGroup)
    // if (this.random(1, 9) === 1) new River(this),apply(this.bgGroup)
    if (this.random(1, 3) === 1) new Ashigaru(this).apply(this.charaGroup)
    if (this.random(1, 5) === 1) new Hinotama(this).apply(this.charaGroup)
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
    if (this.bgm) this.bgm.stop()
    const scene = new Scene()
    scene.addChild(MyLabel(scene, 180, 250, '武者を捕まえろ', 27, 'center', '#ffffff'))
    scene.addChild(MyLabel(scene, 180, 300, 'タッチでゲームシーンへ', 27, 'center', '#ffffff'))
    scene.on('touchstart', () => this.gameScene(scene))
    scene.backgroundColor = '#4a62e6'
    this.replaceScene(scene)
  }

  gameScene(old) {
    this.removeScene(old)
    this.timerInit()
    const scene = new Scene()

    this.bgm = this.game.assets['bgm/MusMus-BGM-122.mp3'].clone()
    this.bgm.play()
    this.replaceScene(scene)
    scene.backgroundColor = '#4a62e6'

    const ctlGroup = new Group()
    const bgGroup = new Group()
    const charaGroup = new Group()

    this.items.prayer = new Ninja(this).apply(charaGroup)
    this.items.boss = new Musha(this).apply(charaGroup)
    new Hinotama(this).apply(charaGroup)
    new Ashigaru(this).apply(charaGroup)
    this.items.jumpBtn = new Jump(this).apply(ctlGroup)

    new Ground(this).apply(bgGroup)
    new Cloud(this).init().apply(bgGroup)
    new Cloud(this).init().apply(bgGroup)
    new Mountain(this).init().apply(bgGroup)
    new Rook(this).apply(bgGroup)

    this.scene.addChild(bgGroup)
    this.scene.addChild(charaGroup)
    this.scene.addChild(ctlGroup)
    this.bgGroup = bgGroup
    this.charaGroup = charaGroup

    this.gameStart = true
  }

  overScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    scene.backgroundColor = '#333'
    scene.addChild(MyLabel(scene, 180, 250, 'GAME OVER', 30, 'center', '#ffffff'))
    scene.addChild(MyLabel(scene, 190, 300, `タッチでリトライ`, 30, 'center', '#ffffff'))

    scene.on('touchstart', () => this.titleScene())
    this.replaceScene(scene)
    if (this.bgm) this.bgm.stop()
    this.bgm = this.game.assets['bgm/MusMus-BGM-104.mp3'].clone()
    this.bgm.play()
  }

  clearScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    scene.addChild(MyLabel(scene, 230, 280, 'GAME CLEAR', 30, 'center'))
    scene.addChild(MyLabel(scene, 250, 330, `タイム ${this.second}秒`, 30, 'center'))
    scene.addChild(MyLabel(scene, 220, 380, `リスタート${this.restart}回`, 30, 'center'))
    scene.on('touchstart', () => this.endScene())
    this.replaceScene(scene)
  }

  endScene(old) {
    this.removeScene(old)
    const scene = new Scene()
    scene.addChild(MyLabel(scene, 280, 80, '使用素材', 26, 'left'))
    scene.addChild(MyLabel(scene, 220, 180, 'フリーBGM・音楽素材MusMus <br>https://musmus.main.jp/<br>・Mid-range Strength<br>・隠密ファンク<br>・希望の青', 16, 'left'))
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
    this.restart += 1
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

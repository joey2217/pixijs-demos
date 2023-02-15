import Star from '../model/Star'
import star from '../assets/images/star.png'
import ground from '../assets/images/platform.png'
import background from '../assets/images/background.png'

export default class InitScene extends Phaser.Scene {
  private platform!: any
  constructor() {
    super({
      key: 'GameScene',
    })
  }

  preload(): void {
    this.load.image('star', star)
    this.load.image('ground', ground)
    this.load.image('background', background)
  }

  create(): void {
    this.add.image(300, 400, 'background')
    var rect = this.add.rectangle(0, 680, 1200, 10, 0xffffff, 0)
    this.platform = this.physics.add.existing(rect, true)
    new Star(this, 300, 100, 'star', this.platform)
  }

  update(): void {}
}

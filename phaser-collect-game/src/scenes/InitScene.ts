import Star from '../model/Star'
import crystal from '../assets/images/crystal.png'

export default class InitScene extends Phaser.Scene {
  private platform!: Phaser.GameObjects.Zone
  constructor() {
    super({
      key: 'GameScene',
    })
  }

  preload(): void {
    this.load.image('crystal', crystal)
  }

  create(): void {
    this.platform = this.make.zone({
      x: 0,
      y: 300,
      width: 600,
      height: 1,
    })
    this.physics.add.world()
    new Star(this, 100, 100, 'crystal', this.platform)
  }

  update(): void {}
}

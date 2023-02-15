  export default class Star extends Phaser.GameObjects.Image {
    constructor(
      scene: Phaser.Scene,
      x: number,
      y: number,
      texture: string | Phaser.Textures.Texture,
      platform: Phaser.Physics.Arcade.StaticGroup,
      frame?: string | number
    ) {
      super(scene, x, y, texture, frame)
      const physicsImage = scene.physics.add.image(x, y, texture)
      scene.physics.add.collider(physicsImage, platform)
      this.setInteractive({ draggable: true })
        // .on( 
        //   'pointerdown',
        //   (pointer: any, localX: any, localY: any, event: any) => {
        //     console.log('pointerdown', localX, localY)
        //     // physicsImage.setGravityY(500)
        //   },
        //   scene
        // )
        .on(
          'dragstart',
          function (pointer: any, dragX: any, dragY: any) {},
          scene
        )
        .on(
          'drag',
          (pointer: any, dragX: number, dragY: number) => {
            console.log('drag', dragX, dragY)
            this.setPosition(dragX, dragY)
            scene.physics.resume()
          },
          scene
        )
        .on(
          'dragend',
          function (pointer: any, dragX: any, dragY: any, dropped: any) {},
          scene
        )
    }
  }

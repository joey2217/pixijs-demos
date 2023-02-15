import InitScene from './scenes/InitScene'

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'collect',
  version: '0.1',
  width: 600,
  height: 800,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [InitScene],
  input: {
    mouse: true,
  },
  physics: {
    default: 'arcade',
    arcade: {},
  },
  backgroundColor: '#1d2b53',
  render: { pixelArt: true, antialias: false },
}

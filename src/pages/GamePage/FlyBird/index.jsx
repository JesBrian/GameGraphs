import React from 'react';
import Phaser, {Game} from 'phaser'

import './index.less';

let imgs = [
  'background', 'title', 'startBtn', 'bird', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
], imgsPath = {};

/**
 * 游戏页面
 */
export default class Index extends React.Component {
  constructor(props) {
    console.log('FiyBird GamePage Construct');

    super(props);

    imgs.forEach(key => {
      imgsPath[key] = require(`../../../assets/games/FlyBird/img/${key}.png`);
    });

    this.state = {};
    
    let g_config = {
      w: 0,
      h: 0,
      rem: 0,
      // eslint-disable-next-line no-unused-vars
    }, bird = {};
    
    window.game = new Game({
      type: Phaser.AUTO,
      width: '100',
      height: '100',
      transparent: true,
      parent: 'root',
      // physics: {
      //   default: 'arcade',
      //   arcade: {
      //     gravity: {y: 200}
      //   }
      // },
      scene: {
        init, preload, create, update
      }
    });
    
    console.log(window.game);
    
    function init() {
      console.log('phaser init');
    }
    
    function preload() {
      console.log('phaser preload');
      
      this.load.image('background', imgsPath.background);
      this.load.image('title', imgsPath.title);
      this.load.image('startBtn', imgsPath.startBtn);
      this.load.spritesheet('bird', imgsPath.bird, {frameWidth: 34, frameHeight: 34});
      this.load.image('0', imgsPath['0']);
    }
    
    function create() {
      console.log('phaser create');
      
      g_config.w = window.game.renderer.width;
      g_config.h = window.game.renderer.height;
      
      let bg = this.add.image(0, 0, 'background').setOrigin(0, 0);
      bg.setScale(g_config.w / bg.width, g_config.h / bg.height);
      
      let title = this.add.image(g_config.w / 2, 150, 'title');
      let score = this.add.image(g_config.w / 2, 60, '0');
      let startBtn = this.add.image(g_config.w / 2, g_config.h - 100, 'startBtn');
  
      this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
      });
      bird = this.add.sprite(g_config.w / 2, 300, 'bird').setScale(1.4, 1.4).anims.play('fly');
  
      this.input.on('pointerup', gameStart);
    }
    
    function update() {
      // console.log('phaser update');
      
    }
    
    
    function gameStart() {
      console.log('gameStart')
    }
  }
  
  componentWillUnmount() {
    document.querySelector('canvas').remove();
  }
  
  render() {
    return null;
  }
}

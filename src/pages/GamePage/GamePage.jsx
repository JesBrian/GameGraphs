import React from 'react';
import Phaser, {Game} from 'phaser'

import loading from '../../assets/FlyBird/img/loading.gif';
import background from '../../assets/FlyBird/img/background.png';

/**
 * 游戏页面
 */
export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    
    let g_config = {
      w: 0,
      h: 0
    };
    
    this.state = {
    };
    
    window.game = new Game({
      type: Phaser.AUTO,
      width: '100',
      height: '100',
      transparent: true,
      parent: 'canvas',
      // physics: {
      //   default: 'arcade',
      //   arcade: {
      //     gravity: {y: 200}
      //   }
      // },
      scene: {
        preload, create
      }
    });
  
    console.log(window.game);
    
    function preload() {
      
      console.log('phaser preload');
  
      this.load.image('loading', loading);
      this.load.image('background', background);
    }
    
    function create() {
      console.log('phaser create');
  
      g_config.w = window.game.renderer.width;
      g_config.h = window.game.renderer.height;
      
      let bgImg = this.add.image(0, 0, 'background').setOrigin(0, 0);
      bgImg.setScale(g_config.w / bgImg.width, g_config.h / bgImg.height);
    }
  }
  
  render() {
    return null;
  }
}

import React from 'react';
import Phaser, { Game } from 'phaser'

/**
 * 游戏页面
 */
export default class GamePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            config: { // game配置
                type: Phaser.AUTO,
                width: '100',
                height: '100',
                transparent: true,
                parent: 'canvas',
                physics: {
                    default: 'arcade',
                    arcade: {
                        gravity: { y: 200 }
                    }
                },
                scene: {
                    preload: preload,
                    create: create
                }
            }
        };
        window.game = new Game(this.state.config);


        function preload ()
        {
            this.load.setBaseURL('http://labs.phaser.io');

            this.load.image('sky', 'assets/skies/space3.png');
            this.load.image('logo', 'assets/sprites/phaser3-logo.png');
            this.load.image('red', 'assets/particles/red.png');
        }

        function create ()
        {
            this.add.image(400, 300, 'sky');

            let particles = this.add.particles('red');

            let emitter = particles.createEmitter({
                speed: 100,
                scale: { start: 1, end: 0 },
                blendMode: 'ADD'
            });

            let logo = this.physics.add.image(400, 100, 'logo');

            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);

            emitter.startFollow(logo);
        }
    }

    render() {
        return null;
    }
}

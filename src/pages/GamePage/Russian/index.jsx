import React from 'react';

import './index.less';

import SiteComponent from './site/index';

let imgs = [
], imgsPath = {};

/**
 * 游戏页面
 */
export default class Index extends React.Component {
  constructor(props) {
    console.log('Russian GamePage Construct');

    super(props);

    imgs.forEach(key => {
      imgsPath[key] = require(`../../../assets/games/Russian/img/${key}.png`);
    });

    this.state = {};
  }
  
  componentWillUnmount() {
  }
  
  render() {
    return (
      <div id='gameContainer' >
        <SiteComponent />
      </div>
    );
  }
}

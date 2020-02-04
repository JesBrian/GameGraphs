import React from 'react';

import './index.less';

let imgs = [
], imgsPath = {};

/**
 * 游戏页面
 */
export default class Index extends React.Component {
  constructor(props) {
    console.log('BoxHead GamePage Construct');

    super(props);

    imgs.forEach(key => {
      imgsPath[key] = require(`../../../assets/games/BoxHead/img/${key}.png`);
    });

    this.state = {};
  }
  
  componentWillUnmount() {
  }
  
  render() {
    return null;
  }
}

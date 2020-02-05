import React from 'react';

import './index.less';

import SiteComponent from './site/index';

let imgsPath = {};

/**
 * 游戏页面
 */
export default class Index extends React.Component {
  constructor(props) {
    console.log('Russian GamePage Construct');

    super(props);

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

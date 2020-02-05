import React from 'react';

import './index.less';

import { GAME_CONFIG } from '../utils/config.js';

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="site" style={{
        width: GAME_CONFIG.x * (GAME_CONFIG.blockSize + GAME_CONFIG.gaps) + 'rem',
        height: GAME_CONFIG.y * (GAME_CONFIG.blockSize + GAME_CONFIG.gaps) + 'rem'
      }} >
        {
          GAME_CONFIG.blockMap.map((rowItem, rowIndex) => {
            return rowItem.map((blockItem, colIndex) => {
              return <div className="blockItem" style={{
                top: (GAME_CONFIG.blockSize + GAME_CONFIG.gaps) * rowIndex + 'rem',
                left: (GAME_CONFIG.blockSize + GAME_CONFIG.gaps) * colIndex + 'rem',
                width: GAME_CONFIG.blockSize + 'rem',
                height: GAME_CONFIG.blockSize + 'rem',
              }} key={`${rowIndex}-${colIndex}`} />
            })
          })
        }
      </div>
    );
  }
}

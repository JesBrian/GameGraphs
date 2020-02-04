import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Card } from 'antd';

import './ChooseGame.less';

import gameConfig from '../../assets/config/games.js';

/**
 * 选择游戏类型页面
 */
export default class ChooseGame extends React.Component {
  state = {
    current: 'news',
    typeInfo: {
      news: {id: 'news', label: '新游上架', icon: 'mail', games: ['BoxHead', 'FlyBird', 'Russian']},
      reaction: {id: 'reaction', label: '反应', icon: 'appstore', games: ['FlyBird', 'Russian']},
      barrier: {id: 'barrier', label: '闯关', icon: 'mail', games: ['BoxHead']},
      leisure: {id: 'leisure', label: '休闲', icon: 'appstore', games: ['FlyBird']},
      competition: {id: 'competition', label: '竞技', icon: 'mail', games: ['BoxHead']},
    },
    loading: true
  };
  
  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };
  
  toPlayGamePage = e => {
    console.log(this.state);
  };
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1500);
  }
  
  render() {
    const {
      loading, typeInfo, current
    } = this.state;
    
    return (
      <div className={'chooseGame'}>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className={'header'} >
          {
            Object.keys(typeInfo).map(key => {
              return (
                <Menu.Item key={key}>
                  <Icon type={typeInfo[key].icon} />{typeInfo[key].label}
                </Menu.Item>
              );
            })
          }
        </Menu>
        
        <div className={'nowTypeLabel'}>
          <Icon type="right" className={'icon'} />{typeInfo[current].label}
        </div>
        
        <div className={'content'}>
          {
            typeInfo[current].games.map(item => {
              return (
                <Link className={'gameLink'} to={`/${item}`}>
                  <Card
                    // onClick={this.toPlayGamePage}
                    className={'gameCard'} hoverable loading={loading}
                    cover={<img style={{width: '100%', height: '100%', borderRadius: 3}} src={require(`../../assets/games/${item}/img/preview.jpg`)} />}>
                    <Card.Meta avatar={<Icon type="appstore" />} description={gameConfig[item]} />
                  </Card>
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }
}

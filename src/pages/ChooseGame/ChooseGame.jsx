import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Card } from 'antd';

import './ChooseGame.less';

/**
 * 选择游戏类型页面
 */
export default class ChooseGame extends React.Component {
  state = {
    current: 'news',
    typeInfo: {
      news: {id: 'news', label: '新游上架', icon: 'mail'},
      reaction: {id: 'reaction', label: '反应', icon: 'appstore'},
      barrier: {id: 'barrier', label: '闯关', icon: 'mail'},
      leisure: {id: 'leisure', label: '休闲', icon: 'appstore'},
      competition: {id: 'competition', label: '竞技', icon: 'mail'},
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
      })
    }, 1500);
  }
  
  render() {
    const {
      loading, typeInfo, current
    } = this.state;
    
    return (
      <div>
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
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
              return (
                <Link to='/gamePage'>
                  <Card
                    // onClick={this.toPlayGamePage}
                    className={'gameCard'} hoverable loading={loading}
                    cover={<img style={{height: 100}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Card.Meta avatar={<Icon type="appstore" />} description={`游戏 ${item}`} />
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

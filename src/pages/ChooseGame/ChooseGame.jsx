import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Card } from 'antd';

import './ChooseGame.less';

/**
 * 选择游戏类型页面
 */
export default class ChooseGame extends React.Component {
  state = {
    current: 'mail',
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
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className={'header'} >
          <Menu.Item key="mail">
            <Icon type="mail" />
            新游上架
          </Menu.Item>
          <Menu.Item key="mail1">
            <Icon type="mail" />
            闯关
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />
            反应
          </Menu.Item>
          <Menu.Item key="app1">
            <Icon type="appstore" />
            休闲
          </Menu.Item>
          <Menu.Item key="app2">
            <Icon type="appstore" />
            竞技
          </Menu.Item>
        </Menu>
    
        <div className={'content'}>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <Link  to='/gamePage'>
                  <Card
                    // onClick={this.toPlayGamePage}
                    className={'gameCard'} hoverable loading={this.state.loading}
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

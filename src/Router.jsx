import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChooseGame from './pages/ChooseGame/ChooseGame';

import FlyBirdGamePage from './pages/GamePage/FlyBird';
import RussianGamePage from './pages/GamePage/Russian';
import BoxHeadGamePage from './pages/GamePage/BoxHead';


// const hist = createBrowserHistory();

/**
 * 页面路由
 */
export default class PageRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ChooseGame} />
          <Route exact path='/FlyBird' component={FlyBirdGamePage} />
          <Route exact path='/Russian' component={RussianGamePage} />
          <Route exact path='/BoxHead' component={BoxHeadGamePage} />
        </Switch>
      </Router>
    );
  }
}
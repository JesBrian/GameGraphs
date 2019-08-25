import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChooseGame from './pages/ChooseGame/ChooseGame';
import GamePage from './pages/GamePage/GamePage';


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
          <Route exact path='/gamePage' component={GamePage} />
        </Switch>
      </Router>
    );
  }
}
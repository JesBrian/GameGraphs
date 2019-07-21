import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChooseGame from './pages/ChooseGame/ChooseGame';
import GamePage from './pages/GamePage/GamePage';

/**
 * 页面路由
 */
export default class PageRouter extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={ChooseGame}/>
        <Route path='/gamePage' component={GamePage}/>
      </Router>
    );
  }
}
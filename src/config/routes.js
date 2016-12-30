import React from 'react';
import ReactRouter from 'react-router';
import TaskList from '../components/TaskList';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from '../App'
import LoginPage from '../components/LoginPage';


console.log('yo')
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TaskList} onEnter={requireAuth} />
      <Route path='/login' component={LoginPage}></Route>
    </Route>
  </Router>
);


function requireAuth(nextState, replace) {
  if (true) {
    console.log('suh', nextState)
    replace({
      pathname: '/login',
      state: {nextPathname: nextState.location.pathname}
    });
  }
}

export default routes;

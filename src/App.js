// @flow
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Base from './Base';
import Login from './Login';
import Dashboard from './home/Dashboard';
import Logout from './Logout';

class App extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Base} onEnter={Base.onEnter}>
          <IndexRoute component={Dashboard} />
          <Route path="login" component={Login} onEnter={Login.onEnter} />
          <Route path="logout" component={Logout} onEnter={Logout.onEnter} />
        </Route>
      </Router>
    );
  }
}

export default App;

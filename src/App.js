// @flow
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Base from './Base';
import Login from './Login';
import Dashboard from './home/Dashboard';
import Logout from './Logout';
import Plants from './plants/Plants';
import Places from './places/Places';

class App extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Base} onEnter={Base.onEnter}>
          <Route path="dashboard" component={Dashboard} onEnter={Base.onEnter} />
          <Route path="plants" component={Plants} onEnter={Base.onEnter} />
          <Route path="places" component={Places} onEnter={Base.onEnter} />
          <Route path="login" component={Login} onEnter={Login.onEnter} />
          <Route path="logout" component={Logout} onEnter={Logout.onEnter} />
        </Route>
      </Router>
    );
  }
}

export default App;

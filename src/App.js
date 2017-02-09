// @flow
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Base from './Base';
import Login from './Login';

class App extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Base}>
          <IndexRoute component={Login} />
        </Route>
      </Router>
    );
  }
}

export default App;

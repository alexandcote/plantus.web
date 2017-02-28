// @flow
import React from 'react';
import { Router, Route } from 'react-router';
import Base from './Base';
import Login from './Login';
import Dashboard from './home/Dashboard';
import Plants from './plants/Plants';
import Places from './places/Places';
import { LOGIN, HOME } from './routes';

type Props = {
  history: Object,
}

class App extends React.Component {

  constructor(props: Props) {
    super(props);

    const self: any = this;
    self.onLoginPage = this.onLoginPage.bind(this);
    self.requireAuth = this.requireAuth.bind(this);
  }

  onLoginPage(nextState: Object, replace: (string) => void, callback: () => void) {
    if (this.context.store.getState().auth) {
      replace(HOME());
    }
    callback();
  }

  requireAuth(nextState: Object, replace: (string) => void, callback: () => void) {
    const path = nextState.location.pathname;
    if (!this.context.store.getState().auth && path !== LOGIN()) {
      replace(LOGIN());
    }
    callback();
  }

  props: Props

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Base} onEnter={this.requireAuth}>
          <Route path="dashboard" component={Dashboard} onEnter={this.requireAuth} />
          <Route path="plants" component={Plants} onEnter={this.requireAuth} />
          <Route path="places" component={Places} onEnter={this.requireAuth} />
          <Route path="login" component={Login} onEnter={this.onLoginPage} />
        </Route>
      </Router>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

export default App;

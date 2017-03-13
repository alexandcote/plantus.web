// @flow
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Base from './Base';
import Login from './Login';
import Dashboard from './home/Dashboard';
import Plants from './plants/Plants';
import Plant from './plants/Plant';
import Places from './places/Places';
import Place from './places/Place';
import { selectJWT, selectAuthReady } from '../selectors';
import { LoginRoute, HomeRoute } from '../routes';

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

  onLoginPage(nextState: Object, replace: string => void, callback: () => void) {
    const jwt = selectJWT(this.context.store.getState());
    if (jwt) {
      replace(HomeRoute());
    }
    callback();
  }

  requireAuth(nextState: Object, replace: string => void, callback: () => void) {
    const path = nextState.location.pathname;
    const jwt = selectJWT(this.context.store.getState());
    const authReady = selectAuthReady(this.context.store.getState());
    if (!jwt && path !== LoginRoute() && authReady) {
      replace(LoginRoute());
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
          <Route path="plants" >
            <IndexRoute component={Plants} onEnter={this.requireAuth} />
            <Route path=":id" component={Plant} onEnter={this.requireAuth} />
          </Route>
          <Route path="places" >
            <IndexRoute component={Places} onEnter={this.requireAuth} />
            <Route path=":id" component={Place} onEnter={this.requireAuth} />
          </Route>
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

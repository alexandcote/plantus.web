// @flow
import React from 'react';
import { connect } from 'react-redux';
import Routes from './Routes';
import { selectJWT, selectAuthReady } from '../selectors';
import { LoginRoute, HomeRoute } from '../routes';

type Props = {
  history: Object,
  authReady: ?boolean,
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
    if (!jwt && path !== LoginRoute()) {
      replace(LoginRoute());
    }
    callback();
  }

  props: Props

  render() {
    if (!this.props) {
      return null;
    }
    return this.props.authReady === null || this.props.authReady ? (
      <Routes
        requireAuth={this.requireAuth}
        onLoginPage={this.onLoginPage}
        history={this.props.history} />
    ) : null;
  }
}

App.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

export default connect(state => ({ authReady: selectAuthReady(state) }))(App);

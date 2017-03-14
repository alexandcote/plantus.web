import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Base from './Base';
import Login from './Login';
import Dashboard from './home/Dashboard';
import Plants from './plants/Plants';
import Plant from './plants/Plant';
import Places from './places/Places';
import Place from './places/Place';

type RouteProps = {
  history: Object,
  onLoginPage: (nextState: Object, replace: string => void, callback: () => void) => void,
  requireAuth: (nextState: Object, replace: string => void, callback: () => void) => void,
}

class Routes extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  props: RouteProps

  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Base} onEnter={this.props.requireAuth}>
          <Route path="dashboard" component={Dashboard} onEnter={this.props.requireAuth} />
          <Route path="plants" >
            <IndexRoute component={Plants} onEnter={this.props.requireAuth} />
            <Route path=":id" component={Plant} onEnter={this.props.requireAuth} />
          </Route>
          <Route path="places" >
            <IndexRoute component={Places} onEnter={this.props.requireAuth} />
            <Route path=":id" component={Place} onEnter={this.props.requireAuth} />
          </Route>
          <Route path="login" component={Login} onEnter={this.props.onLoginPage} />
        </Route>
      </Router>
    );
  }
}

export default Routes;

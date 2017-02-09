// @flow
import React from 'react';
import { Link } from 'react-router';
import { isAuthenticated } from './services/auth';

type Props = {
  children: [],
  location: { pathname: string },
}

class Base extends React.Component {
  static onEnter(nextState, replace, callback) {
    const path = nextState.location.pathname;
    if (!isAuthenticated() && path !== '/login' && path !== '/logout') {
      replace('/login');
    }
    callback();
  }

  props: Props

  render() {
    if (!this.props) {
      return null;
    }
    let button = <Link to="/login">Login</Link>;
    if (this.props.location.pathname === '/login') {
      button = null;
    } else if (isAuthenticated()) {
      button = <Link to="/logout">Logout</Link>;
    }

    return (
      <div className="container">
        { button }
        { this.props.children }
      </div>
    );
  }
}

export default Base;

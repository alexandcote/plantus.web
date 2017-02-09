// @flow
import React from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { isAuthenticated } from './services/auth';

type Props = {
  children: [],
  location: { pathname: string },
}

class Base extends React.Component {
  static onEnter(nextState, replace, callback) {
    const path = nextState.location.pathname;
    if (!isAuthenticated() && path !== '/login') {
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
      <Grid>
        { button }
        { this.props.children }
      </Grid>
    );
  }
}

export default Base;

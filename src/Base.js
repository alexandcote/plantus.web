// @flow
import React from 'react';
import { Grid } from 'react-bootstrap';
import { isAuthenticated } from './services/auth';
import Header from './Header';

type Props = {
  children: [],
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

    return (
      <div>
        <Header />
        <Grid>
          { this.props.children }
        </Grid>
      </div>
    );
  }
}

export default Base;

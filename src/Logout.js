// @flow
import React from 'react';
import { logOut } from './services/auth';

class Base extends React.Component {

  static onEnter(nextState, replace, callback) {
    logOut();
    callback();
  }

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <div className="container">
        You have been logged out
      </div>
    );
  }
}

export default Base;

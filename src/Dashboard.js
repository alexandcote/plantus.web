// @flow
import React from 'react';

class Dashboard extends React.Component {

  render() {
    if (!this.props) {
      return null;
    }
    return <h1>Dashboard</h1>;
  }
}

export default Dashboard;

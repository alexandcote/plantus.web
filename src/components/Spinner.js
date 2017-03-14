// @flow
import React from 'react';

class Spinner extends React.Component {

  render() {
    if (!this.props) {
      return null;
    }

    return (
      <div style={{ height: '100%' }} />
    );
  }
}

export default Spinner;

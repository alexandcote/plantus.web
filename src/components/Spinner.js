// @flow
import React from 'react';
import spinnerGIF from './spinner.svg';

class Spinner extends React.Component {

  render() {
    if (!this.props) {
      return null;
    }

    return (
      <div style={{ height: '100%' }}>
        <img src={spinnerGIF} alt="spinner" className="spinner" />
      </div>
    );
  }
}

export default Spinner;

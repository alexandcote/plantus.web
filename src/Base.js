// @flow
import React from 'react';

if (process.env.NODE_ENV === 'production') {
  console.log("production!!")
}

class Base extends React.Component {
  render() {
    if (!this.props) {
      return null;
    }
    return <h1>Hello World</h1>;
  }
}

export default Base;

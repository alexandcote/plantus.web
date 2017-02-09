// @flow
import React from 'react';

type Props = {
  children: [],
};

class Base extends React.Component {
  props: Props;

  render() {
    if (!this.props) {
      return null;
    }
    return <div className="container">{ this.props.children }</div>;
  }
}

export default Base;

// @flow
import React from 'react';
import { Grid } from 'react-bootstrap';
import Header from './Header';

type Props = {
  children: [],
};

class Base extends React.Component {
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

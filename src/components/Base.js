// @flow
import React from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './Header';
import Spinner from './Spinner';
import { selectAuthReady } from '../selectors';

type Props = {
  authReady: boolean,
  location: {
    pathname: string,
  },
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
        { !this.props.authReady && this.props.location.pathname !== '/login' &&
          <Spinner />
        }
        { (this.props.authReady || this.props.location.pathname === '/login') &&
          (
            <div>
              <Header />
              <Grid>
                { this.props.children }
              </Grid>
            </div>
          )
        }
      </div>
    );
  }
}

export default connect(state => ({
  authReady: selectAuthReady(state),
}),
)(withRouter(Base));

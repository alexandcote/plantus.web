// @flow
import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/auth';
import * as Routes from '../routes';

type Props = {
  logout: () => void,
  auth: ?string,
}
type State = {}

class Header extends React.Component {

  constructor(props: Props) {
    super(props);

    const self: any = this;
    self.handleSelect = this.handleSelect.bind(this);
  }

  state: State
  props: Props

  handleSelect(key: number) {
    if (key === 1) {
      this.props.logout();
    }
  }

  render() {
    if (!this.props) {
      return null;
    }
    let loginNav = <NavItem eventKey={1}>Logout</NavItem>;
    if (!this.props.auth) {
      loginNav = (
        <LinkContainer to={Routes.LOGIN()}>
          <NavItem eventKey={1}>Login</NavItem>
        </LinkContainer>
      );
    }

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/dashboard">Plantus</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          { this.props.auth &&
            <Nav>
              <LinkContainer to={Routes.HOME()}>
                <NavItem eventKey={1}>Dashboard</NavItem>
              </LinkContainer>
              <LinkContainer to={Routes.PLANTS()}>
                <NavItem eventKey={2}>Plants</NavItem>
              </LinkContainer>
              <LinkContainer to={Routes.PLACES()}>
                <NavItem eventKey={3}>Places</NavItem>
              </LinkContainer>
            </Nav>
          }
          <Nav pullRight onSelect={this.handleSelect}>
            { loginNav }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(state => ({ auth: state.auth }), { logout })(withRouter(Header));

// @flow
import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/auth';
import { selectJWT } from '../selectors';
import * as Routes from '../routes';

type Props = {
  logout: () => void,
  jwt: ?string,
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
    if (!this.props.jwt) {
      loginNav = (
        <LinkContainer to={Routes.LoginRoute()}>
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
          { this.props.jwt &&
            <Nav>
              <LinkContainer to={Routes.HomeRoute()}>
                <NavItem eventKey={1}>Dashboard</NavItem>
              </LinkContainer>
              <LinkContainer to={Routes.PlantsRoute()}>
                <NavItem eventKey={2}>Plants</NavItem>
              </LinkContainer>
              <LinkContainer to={Routes.PlacesRoute()}>
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

export default connect(state => ({ jwt: selectJWT(state) }), { logout })(withRouter(Header));

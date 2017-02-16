// @flow
import React from 'react';
import { Link, withRouter } from 'react-router';
import { Navbar, NavDropdown, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { isAuthenticated } from './services/auth';

type Props = {
}

class Header extends React.Component {

  props: Props

  render() {
    if (!this.props) {
      return null;
    }
    let login = <NavItem eventKey={1}>Login</NavItem>;
    if (isAuthenticated()) {
      login = <NavItem eventKey={1}>Logout</NavItem>;
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
          { isAuthenticated() &&
            <Nav>
              <LinkContainer to="/dashboard">
                <NavItem eventKey={1}>Dashboard</NavItem>
              </LinkContainer>
              <LinkContainer to="/plants">
                <NavItem eventKey={2}>Plants</NavItem>
              </LinkContainer>
              <LinkContainer to="/places">
                <NavItem eventKey={3}>Places</NavItem>
              </LinkContainer>
            </Nav>
          }
          <Nav pullRight>
            { !!login &&
              <LinkContainer to={isAuthenticated() ? 'logout' : 'login'}>
                {login}
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);

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
            <Link to="/">Plantus</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          { isAuthenticated() &&
            <Nav>
              <NavItem eventKey={1}>Link</NavItem>
              <NavItem eventKey={2}>Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
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

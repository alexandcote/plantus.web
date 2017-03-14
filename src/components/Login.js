// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { loginRequest } from '../actions/auth';

type Props = {
  loginRequest: (email: string, password: string) => void,
};

class Login extends React.Component {

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: '',
    };

    const self: any = this;
    self.handleChange = this.handleChange.bind(this);
    self.handleSubmit = this.handleSubmit.bind(this);
  }

  state: {
    email: string,
    password: string,
  };

  handleSubmit(event: Event) {
    this.props.loginRequest(this.state.email, this.state.password);
    event.preventDefault();
  }

  handleChange(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) {
      throw new Error('Element is not an input');
    }
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <FormGroup>
          <ControlLabel>Email address</ControlLabel>
          <FormControl value={this.state.email} id="email" type="email" placeholder="Email" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl value={this.state.password} id="password" type="password" placeholder="Password" onChange={this.handleChange} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default connect(null, { loginRequest })(withRouter(Login));

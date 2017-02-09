import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { logIn, isAuthenticated } from './services/auth';

type Props = {
  router: {},
};

class Login extends React.Component {

  constructor(props: {}, context: {}) {
    super(props, context);
    this.props = props;
    this.context = context;
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

  onResponse() {
    this.props.router.push('/');
  }

  handleSubmit(event: Event) {
    logIn(this.state.email, this.state.password)
    .then(this.onResponse.bind(this));
    event.preventDefault();
  }

  handleChange(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) {
      throw new Error('Element is not an input');
    }
    const state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  props: Props

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <form onSubmit={this.handleSubmit}>
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

export default withRouter(Login);

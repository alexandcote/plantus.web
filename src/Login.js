// @flow
import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Panel } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { isAuthenticated, logIn } from './services/auth';

type Props = {
  router: { push: () => void },
};

class Login extends React.Component {

  static onEnter(nextState, replace, callback) {
    if (isAuthenticated()) {
      replace('/');
    }
    callback();
  }

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: '',
      validationError: null,
    };

    const self: any = this;
    self.handleChange = this.handleChange.bind(this);
    self.handleSubmit = this.handleSubmit.bind(this);
  }

  state: {
    email: string,
    password: string,
    validationError: ?string,
  };

  onResponse() {
    this.props.router.push('/');
  }

  onError(error) {
    error.json().then((json) => {
      this.setState({ validationError: JSON.stringify(json, null, 4) });
    });
  }

  handleSubmit(event: Event) {
    logIn(this.state.email, this.state.password)
    .then(this.onResponse.bind(this))
    .catch(this.onError.bind(this));
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
        { !!this.state.validationError &&
          <Panel header="Login error" bsStyle="danger">
            { this.state.validationError }
          </Panel>
        }
      </form>
    );
  }
}

export default withRouter(Login);

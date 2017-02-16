// @flow
import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Alert, ProgressBar } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { isAuthenticated, logIn } from './services/auth';

type Props = {
  router: { push: () => void },
};

const ERROR_TIMEOUT = 5000;

class Login extends React.Component {

  static onEnter(nextState, replace, callback) {
    if (isAuthenticated()) {
      replace('/dashboard');
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
      errorProgress: 0,
      errorCount: 1,
    };

    const self: any = this;
    self.onResponse = this.onResponse.bind(this);
    self.onError = this.onError.bind(this);
    self.handleChange = this.handleChange.bind(this);
    self.handleSubmit = this.handleSubmit.bind(this);
    self.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    self.updateProgess = this.updateProgess.bind(this);
  }

  state: {
    email: string,
    password: string,
    validationError: ?string,
    errorProgress: number,
    errorCount: number,
  };

  onResponse() {
    this.props.router.push('/dashboard');
  }

  onError(error) {
    error.json().then((json) => {
      this.setState({ validationError: json.non_field_errors[0] });
      this.errorTimeout = setTimeout(this.handleAlertDismiss, ERROR_TIMEOUT + 1000);
      this.errorInterval = setInterval(this.updateProgess, 1000);
    });
  }

  errorInterval: number
  errorTimeout: number

/* eslint-disable */
  updateProgess() {
    this.setState((prevState) => {
      return {
        errorProgress: (prevState.errorCount * (100000 / ERROR_TIMEOUT)),
        errorCount: prevState.errorCount + 1,
      };
    });
  }
/* eslint-enable */

  handleSubmit(event: Event) {
    logIn(this.state.email, this.state.password)
    .then(this.onResponse)
    .catch(this.onError);
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

  handleAlertDismiss() {
    this.setState({
      validationError: null,
      errorProgress: 0,
      errorCount: 1,
    });
    clearInterval(this.errorInterval);
    clearTimeout(this.errorTimeout);
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
          <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
            <ProgressBar bsStyle="danger" now={this.state.errorProgress} />
            <h4>Login Error</h4>
            <p>{ this.state.validationError }</p>
            <p>
              <Button onClick={this.handleAlertDismiss}>Ok</Button>
            </p>
          </Alert>
        }
      </form>
    );
  }
}

export default withRouter(Login);

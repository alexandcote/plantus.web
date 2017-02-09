// @flow
import React from 'react';

import { logIn } from './services/auth';

class Login extends React.Component {

  constructor(props: {}) {
    super(props);
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

  componentWillMount() {
  }

  handleChange(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) {
      throw new Error('Element is not an input');
    }

    const state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event: Event) {
    logIn(this.state.email, this.state.password);
    event.preventDefault();
  }

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default Login;

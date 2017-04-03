// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Button, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import update from 'immutability-helper';
import { usersRequest } from '../../actions/users';
import { selectUsers } from '../../selectors';
import type User from '../../types/user';
import type Place from '../../types/place';

type Props = {
  place?: Place,
  users: [User],
  onSubmit: (place: Place) => void,
  usersRequest: () => void,
};

type State = {
  place: Place,
}

class PlaceForm extends React.Component {

  constructor(props: Props) {
    super(props);

    this.state = {
      place: this.props.place ? this.props.place : { name: '', identifier: '', users: [], picture: null },
    };

    const self: any = this;
    self.handleSubmit = this.handleSubmit.bind(this);
  }

  state: State

  componentDidMount() {
    this.props.usersRequest();
  }

  handleSubmit(event: Event) {
    const formData = new FormData();
    for (const key in this.state.place) {
      if (key !== 'users') {
        formData.append(key, this.state.place[key]);
      }
    }
    this.state.place.users.forEach(user => formData.append('users', user));
    this.props.onSubmit(formData);
    event.preventDefault();
  }

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            value={this.state.place.name} id="name" name="name" type="text" placeholder="Name"
            onChange={(event) => {
              this.setState(
                update(this.state, { place: { name: { $set: event.target.value } } }),
              );
            }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Image</ControlLabel>
          <FormControl
            id="picture" name="picture" type="file"
            onChange={(event) => {
              this.setState(
                update(this.state, { place: { picture: { $set: event.target.files[0] } } }),
              );
            }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Identifier</ControlLabel>
          <FormControl
            value={this.state.place.identifier} id="identifier" name="identifier" type="text" placeholder="Identifier"
            onChange={(event) => {
              this.setState(
                update(this.state, { place: { identifier: { $set: event.target.value } } }),
              );
            }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Users</ControlLabel>
          {this.props.users.map(user => (
            <Checkbox
              key={user.id} value={user.id}
              onChange={(event) => {
                if (event.target.checked) {
                  this.setState(
                    update(this.state, { place: { users: { $push: [event.target.value] } } }),
                  );
                } else {
                  this.setState(
                    update(this.state, { place: { users: { $splice: [[
                      this.state.place.users.indexOf(event.target.value),
                      1,
                    ]] } } }),
                  );
                }
              }}
            >{`${user.firstName} ${user.lastName}`}</Checkbox>
          ))}
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default connect(state => ({ users: selectUsers(state) }), { usersRequest })(PlaceForm);

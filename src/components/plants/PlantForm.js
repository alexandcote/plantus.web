// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';
import update from 'immutability-helper';
import { placesRequest } from '../../actions/places';
import { selectPlaces } from '../../selectors';
import type Plant from '../../types/plant';
import type Place from '../../types/place';

type Props = {
  plant?: Plant,
  places: [Place],
  onSubmit: (plant: Plant) => void,
  placesRequest: () => void,
};

type State = {
  plant: Plant,
}

class PlantForm extends React.Component {

  constructor(props: Props) {
    super(props);

    this.state = {
      plant: this.props.plant ? this.props.plant : { name: '', plant: 1 },
    };

    const self: any = this;
    self.handleSubmit = this.handleSubmit.bind(this);
  }

  state: State

  componentDidMount() {
    this.props.placesRequest();
  }

  handleSubmit(event: Event) {
    let plant = this.state.plant;
    if (!plant.place) {
      plant = update(plant, { place: { $set: this.props.places[0].id } });
    }
    this.props.onSubmit(plant);
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
            value={this.state.plant.name} id="name" type="name" placeholder="Name"
            onChange={(event) => {
              this.setState(
                update(this.state, { plant: { name: { $set: event.target.value } } }),
              );
            }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            id="place" type="place" componentClass="select"
            onChange={(event) => {
              this.setState(
                update(this.state, { plant: { place: { $set: event.target.value } } }),
              );
            }}
          >
            {this.props.places.map(place => (
              <option key={place.id} value={place.id}>{place.name}</option>
            ))}
            <option value={1}>Place 1</option>
            <option value={2}>Place 2</option>
          </FormControl>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default connect(state => ({ places: selectPlaces(state) }), { placesRequest })(PlantForm);

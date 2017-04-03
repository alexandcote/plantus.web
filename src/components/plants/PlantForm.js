// @flow
import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap';
import update from 'immutability-helper';
import { placesRequest } from '../../actions/places';
import { plantTypeRequest } from '../../actions/plant-type';
import { selectPlaces, selectPlantTypes } from '../../selectors';
import type Plant from '../../types/plant';
import type PlantType from '../../types/plant-type';
import type Place from '../../types/place';

type Props = {
  plant?: Plant,
  places: [Place],
  plantTypes: [PlantType],
  onSubmit: (plant: Plant) => void,
  placesRequest: () => void,
  plantTypeRequest: () => void,
};

type State = {
  plant: Plant,
}

class PlantForm extends React.Component {

  constructor(props: Props) {
    super(props);

    this.state = {
      plant: this.props.plant ? this.props.plant : { name: '', identifier: '', picture: null },
    };

    const self: any = this;
    self.handleSubmit = this.handleSubmit.bind(this);
  }

  state: State

  componentDidMount() {
    this.props.placesRequest();
    this.props.plantTypeRequest();
  }

  handleSubmit(event: Event) {
    let plant = this.state.plant;
    if (!plant.place) {
      plant = update(plant, { place: { $set: this.props.places[0].id } });
    }
    if (!plant.plant) {
      plant = update(plant, { plant: { $set: this.props.plantTypes[0].id } });
    }
    const formData = new FormData();
    for (const key in plant) {
      formData.append(key, plant[key]);
    }
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
            value={this.state.plant.name} id="name" name="name" type="text" placeholder="Name"
            onChange={(event) => {
              this.setState(
                update(this.state, { plant: { name: { $set: event.target.value } } }),
              );
            }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Image</ControlLabel>
          <FormControl
            id="picture" name="picture" type="file"
            onChange={(event) => {
              this.setState(
                update(this.state, { plant: { picture: { $set: event.target.files[0] } } }),
              );
            }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Identifier</ControlLabel>
          <FormControl
            value={this.state.plant.identifier} id="identifier" name="identifier" type="text" placeholder="Identifier"
            onChange={(event) => {
              this.setState(
                update(this.state, { plant: { identifier: { $set: event.target.value } } }),
              );
            }} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Plant type</ControlLabel>
          <FormControl
            id="plant" name="plant" componentClass="select"
            onChange={(event) => {
              this.setState(
                update(this.state, { plant: { plant: { $set: event.target.value } } }),
              );
            }}
          >
            {this.props.plantTypes.map(plantType => (
              <option key={plantType.id} value={plantType.id}>{plantType.name}</option>
            ))}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Place</ControlLabel>
          <FormControl
            id="place" name="place" componentClass="select"
            onChange={(event) => {
              this.setState(
                update(this.state, { plant: { place: { $set: event.target.value } } }),
              );
            }}
          >
            {this.props.places.map(place => (
              <option key={place.id} value={place.id}>{place.name}</option>
            ))}
          </FormControl>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default connect(
  state => ({ places: selectPlaces(state), plantTypes: selectPlantTypes(state) }),
  { placesRequest, plantTypeRequest },
)(PlantForm);

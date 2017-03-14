// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'react-bootstrap';
import { placesRequest, changePlacesModalVisibility, newPlaceRequest } from '../../actions/places';
import { selectPlaces, selectPlacesModalVisibility } from '../../selectors';
import Card from '../common/Card';
import FormModal from '../common/FormModal';
import PlaceForm from './PlaceForm';
import { PlaceRoute } from '../../routes';
import type Place from '../../types/place';

type Props = {
  placesRequest: () => void,
  newPlaceRequest: (place: Place) => void,
  changePlacesModalVisibility: (visibility: boolean) => void,
  show: boolean,
  places: [Place],
};

const placeCard = place => (
  <Card
    key={place.id}
    img="http://pinandpin.com/wp-content/uploads/2013/11/395_2CL_2175_VILLA_IVY_x-1200x798.jpg"
    alt={place.name}
    title={place.name}
    link={PlaceRoute(place.id)} />
);

class Places extends React.Component {

  constructor(props: Props) {
    super(props);

    const self: any = this;
    self.showAdd = this.showAdd.bind(this);
    self.hideAdd = this.hideAdd.bind(this);
    self.onSubmitNew = this.onSubmitNew.bind(this);
  }

  componentDidMount() {
    this.props.placesRequest();
  }

  onSubmitNew(plant: Place) {
    this.props.newPlaceRequest(plant);
    this.props.changePlacesModalVisibility(false);
  }

  showAdd() {
    this.props.changePlacesModalVisibility(true);
  }

  hideAdd() {
    this.props.changePlacesModalVisibility(false);
  }

  props: Props;

  render() {
    if (!this.props) {
      return null;
    }

    const modal = this.props.show ? (
      <FormModal show={this.props.show} title="Add Place" onClose={this.hideAdd}>
        <PlaceForm onSubmit={this.onSubmitNew} />
      </FormModal>
    ) : null;

    return (
      <div>
        <h1>Places
          <Button style={{ marginLeft: '18px' }} bsStyle="primary" bsSize="xsmall" onClick={this.showAdd}>Add new</Button>
        </h1>
        <Row>
          { this.props.places.map(placeCard) }
        </Row>
        {modal}
      </div>
    );
  }
}

export default connect(
  state => ({
    places: selectPlaces(state),
    show: selectPlacesModalVisibility(state),
  }),
  {
    placesRequest,
    newPlaceRequest,
    changePlacesModalVisibility,
  },
)(Places);

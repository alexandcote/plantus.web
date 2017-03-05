// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { placesRequest } from '../../actions/places';
import Card from '../common/Card';
import { PlaceRoute } from '../../routes';
import type Place from '../../types/place';

type Props = {
  placesRequest: () => void,
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

  componentDidMount() {
    this.props.placesRequest();
  }

  props: Props;

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <div>
        <h1>Places</h1>
        <Row>
          { this.props.places.map(placeCard) }
        </Row>
      </div>
    );
  }
}

export default connect(state => ({ places: state.places }), { placesRequest })(Places);

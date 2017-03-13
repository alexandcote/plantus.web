// @flow
import React from 'react';
import { connect } from 'react-redux';
import { placeRequest } from '../../actions/places';
import { selectPlace } from '../../selectors';
import type PlaceType from '../../types/place';

type Props = {
  place: PlaceType,
  placeRequest: (id: string) => void,
  params: { id: string },
};

class Place extends React.Component {

  componentDidMount() {
    this.props.placeRequest(this.props.params.id);
  }

  props: Props;

  render() {
    if (!this.props || !this.props.place) {
      return null;
    }
    return (
      <h1>{this.props.place.name}</h1>
    );
  }
}

export default connect(state => ({ place: selectPlace(state) }), { placeRequest })(Place);

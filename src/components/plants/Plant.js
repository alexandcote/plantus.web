// @flow
import React from 'react';
import { connect } from 'react-redux';
import { plantRequest } from '../../actions/plants';
import type PlantType from '../../types/plant';

type Props = {
  plant: PlantType,
  plantRequest: (id: string) => void,
  params: { id: string },
};

class Plant extends React.Component {

  componentDidMount() {
    this.props.plantRequest(this.props.params.id);
  }

  props: Props;

  render() {
    if (!this.props || !this.props.plant) {
      return null;
    }
    return (
      <h1>{this.props.plant.name}</h1>
    );
  }
}

export default connect(state => ({ plant: state.plant }), { plantRequest })(Plant);

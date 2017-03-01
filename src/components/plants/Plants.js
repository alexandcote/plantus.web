// @flow
import React from 'react';
import { connect } from 'react-redux';
import { plantsRequest } from '../../actions/plants';
import type Plant from '../../types/plant';

type Props = {
  plantsRequest: () => void,
  plants: [Plant],
};

class Plants extends React.Component {

  componentDidMount() {
    this.props.plantsRequest();
  }

  props: Props;

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <div>
        <h1>Plants</h1>
        { this.props.plants.map(plant => <p key={plant.id}>{plant.name}</p>) }
      </div>
    );
  }
}

export default connect(state => ({ plants: state.plants }), { plantsRequest })(Plants);

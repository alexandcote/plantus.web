// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { plantsRequest } from '../../actions/plants';
import PlantCard from './PlantCard';
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
        <Row>
          { this.props.plants.map(plant => <PlantCard
            key={plant.id}
            plant={plant} />)
          }
        </Row>
      </div>
    );
  }
}

export default connect(state => ({ plants: state.plants }), { plantsRequest })(Plants);

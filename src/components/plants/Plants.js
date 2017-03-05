// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { plantsRequest } from '../../actions/plants';
import Card from '../common/Card';
import PlantInfo from './PlantInfo';
import { PlantRoute } from '../../routes';
import type Plant from '../../types/plant';

type Props = {
  plantsRequest: () => void,
  plants: [Plant],
};

const plantCard = plant => (
  <Card
    key={plant.id}
    img="http://www.ikea.com/gb/en/images/range-introduction/ikea-plant-and-pot__1364310122805-s4.jpg"
    alt={plant.name}
    title={plant.name}
    link={PlantRoute(plant.id)}
  >
    <PlantInfo luminosity={12500} humidity={30} />
  </Card>
);

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
          { this.props.plants.map(plantCard) }
        </Row>
      </div>
    );
  }
}

export default connect(state => ({ plants: state.plants }), { plantsRequest })(Plants);

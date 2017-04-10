// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'react-bootstrap';
import { plantsRequest, newPlantRequest, changePlantsModalVisibility } from '../../actions/plants';
import { operationRequest } from '../../actions/operation';
import Card from '../common/Card';
import PlantInfo from './PlantInfo';
import FormModal from '../common/FormModal';
import PlantForm from './PlantForm';
import { selectPlantsModalVisibility, selectPlants } from '../../selectors';
import type Plant from '../../types/plant';

type Props = {
  plantsRequest: () => void,
  newPlantRequest: (plant: Plant) => void,
  changePlantsModalVisibility: (visibility: boolean) => void,
  operationRequest: (id: string) => void,
  show: boolean,
  plants: [Plant],
};

class Plants extends React.Component {

  constructor(props: Props) {
    super(props);

    const self: any = this;
    self.showAdd = this.showAdd.bind(this);
    self.hideAdd = this.hideAdd.bind(this);
    self.onSubmitNew = this.onSubmitNew.bind(this);
    self.addWater = this.addWater.bind(this);
    self.plantCard = this.plantCard.bind(this);
  }

  componentDidMount() {
    this.props.plantsRequest();
  }

  onSubmitNew(plant: Plant) {
    this.props.newPlantRequest(plant);
    this.props.changePlantsModalVisibility(false);
  }

  showAdd() {
    this.props.changePlantsModalVisibility(true);
  }

  hideAdd() {
    this.props.changePlantsModalVisibility(false);
  }

  addWater(id) {
    this.props.operationRequest(id);
  }

  plantCard(plant) {
    return (
      <Card
        key={plant.id}
        img={plant.picture}
        alt={plant.name}
        title={plant.name}
      >
        <Button onClick={() => this.addWater(plant.id)} bsStyle="primary">Add water</Button>
        <hr />
        <PlantInfo spec={plant.spec} />
      </Card>
    );
  }

  props: Props;

  render() {
    if (!this.props) {
      return null;
    }
    const modal = this.props.show ? (
      <FormModal show={this.props.show} title="Add Plant" onClose={this.hideAdd}>
        <PlantForm onSubmit={this.onSubmitNew} />
      </FormModal>
    ) : null;
    return (
      <div>
        <h1>Plants
          <Button style={{ marginLeft: '18px' }} bsStyle="primary" bsSize="xsmall" onClick={this.showAdd}>Add new</Button>
        </h1>
        <Row>
          { this.props.plants.map(this.plantCard) }
        </Row>
        {modal}
      </div>
    );
  }
}

export default connect(
  state => ({
    plants: selectPlants(state),
    show: selectPlantsModalVisibility(state),
  }),
  {
    plantsRequest,
    newPlantRequest,
    changePlantsModalVisibility,
    operationRequest,
  },
)(Plants);

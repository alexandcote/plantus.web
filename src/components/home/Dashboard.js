// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { FormControl, ControlLabel } from 'react-bootstrap';
import { selectPlants, selectDashboardSelectedPlant } from '../../selectors';
import { changeSelectedPlant } from '../../actions/dashboard';
import { plantsRequest } from '../../actions/plants';
import { timeseriesRequest } from '../../actions/timeseries';
import Graph from './Graph';
import type Plant from '../../types/plant';

type Props = {
  currentPlant: number,
  changeSelectedPlant: (id: ?number) => void,
  plantsRequest: () => void,
  timeseriesRequest: (id: number) => void,
  router: {
    setRouteLeaveHook: (route: string, callback: (nextLocation: string) => void) => void,
  },
  route: string,
  plants: [Plant],
}

class Dashboard extends React.Component {

  constructor(props: Props) {
    super(props);
    this.interval = null;
    const self: any = this;
    self.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.plantsRequest();
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this));
    if (this.props.currentPlant) {
      this.props.timeseriesRequest(this.props.currentPlant);
    }
  }

  props: Props
  interval: ?number

  handleChange(event) {
    if (event.target.value !== '') {
      this.props.changeSelectedPlant(event.target.value);
    } else {
      if (this.interval) clearInterval(this.interval);
      this.props.changeSelectedPlant(null);
    }
  }

  routerWillLeave() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    if (!this.props) {
      return null;
    }

    if (this.props.currentPlant) {
      if (this.interval) clearInterval(this.interval);
      this.interval = setInterval(() => this.props.timeseriesRequest(this.props.currentPlant), 5000);
    }

    const options = this.props.plants.map(plant => <option key={plant.id} value={plant.id}>{plant.name}</option>);
    return (
      <div>
        <ControlLabel>Plant</ControlLabel>
        <FormControl
          value={this.props.currentPlant || ''}
          componentClass="select"
          onChange={this.handleChange}
          placeholder="select"
        >
          <option value="">Select plant</option>
          {options}
        </FormControl>
        {this.props.currentPlant && <Graph />}
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    plants: selectPlants(state),
    currentPlant: selectDashboardSelectedPlant(state),
  }),
  {
    timeseriesRequest,
    plantsRequest,
    changeSelectedPlant,
  },
)(Dashboard));

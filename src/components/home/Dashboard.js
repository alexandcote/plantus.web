// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import StatsLineChart from '../common/StatsLineChart';
import { selectTimeseries } from '../../selectors';
import { timeseriesRequest } from '../../actions/timeseries';
import type Timeseries from '../../types/timeseries';

const lineKeys = [
  'humidity',
  'temperature',
  'luminosity',
  'waterLevel',
];

type Props = {
  timeseriesRequest: () => void,
  timeseries: [Timeseries],
}

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.timeseriesRequest();
  }

  props: Props

  render() {
    if (!this.props) {
      return null;
    }
    const stats = _.groupBy(this.props.timeseries, time => time.pot);
    const graphs = [];
    for (const key in stats) {
      const graph = (
        <Col key={key} md={6}>
          <StatsLineChart key={key} title={key} data={stats[key]} xDataKey="date" lineDataKeys={lineKeys} />
        </Col>
      );
      graphs.push(graph);
    }
    return (
      <Row>
        {graphs}
      </Row>
    );
  }
}

export default connect(
  state => ({
    timeseries: selectTimeseries(state),
  }),
  {
    timeseriesRequest,
  },
)(Dashboard);

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
    const stats = _.groupBy(this.props.timeseries, time => time.pot.name);
    const graphs = [];
    let i = 0;
    for (const key in stats) {
      const orderStats = _.orderBy(stats[key], 'date');
      const graph = (
        <div key={key}>
          <h1 key={`h1-${key}`}>{key}</h1>
          <Col key={`col-${key}`} md={12}>
            <StatsLineChart key={`hum-${i}`} title={key} data={orderStats} xDataKey="date" lineDataKeys={[lineKeys[0]]} />
            <StatsLineChart key={`temp-${i}`} title={key} data={orderStats} xDataKey="date" lineDataKeys={[lineKeys[1]]} />
            <StatsLineChart key={`lum-${i}`} title={key} data={orderStats} xDataKey="date" lineDataKeys={[lineKeys[2]]} />
            {/* <StatsLineChart key={`wat-${i}`} title={key} data={orderStats} xDataKey="date" lineDataKeys={[lineKeys[3]]} />*/}
          </Col>
        </div>
      );
      ++i;
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

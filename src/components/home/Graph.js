// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import StatsLineChart from '../common/StatsLineChart';
import { selectTimeseries } from '../../selectors';
import type Timeseries from '../../types/timeseries';

const lineKeys = [
  'humidity',
  'temperature',
  'luminosity',
  'waterLevel',
];

type Props = {
  timeseries: [Timeseries],
}

class Graph extends React.Component {

  graph(stats) {
    if (stats.length === 0) {
      return <p>No data</p>;
    }
    const s = stats[0];
    return (
      <div key={stats[0].id}>
        <h1 key={`h1-${s.id}`}>{s.pot.name}</h1>
        <Col key={`col-${s.id}`} md={12}>
          <StatsLineChart key={lineKeys[0]} data={stats} xDataKey="date" lineDataKeys={[lineKeys[0]]} />
          <StatsLineChart key={lineKeys[1]} data={stats} xDataKey="date" lineDataKeys={[lineKeys[1]]} />
          <StatsLineChart key={lineKeys[2]} data={stats} xDataKey="date" lineDataKeys={[lineKeys[2]]} />
        </Col>
      </div>
    );
  }

  render() {
    if (!this.props) {
      return null;
    }
    const stats = _.orderBy(this.props.timeseries, 'date');
    const graphs = this.graph(stats);
    return (
      <Row>
        {graphs}
      </Row>
    );
  }
}

export default withRouter(connect(
  state => ({
    timeseries: selectTimeseries(state),
  }),
)(Graph));

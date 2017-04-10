// @flow
import React from 'react';
import { withRouter } from 'react-router';
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
  router: {
    setRouteLeaveHook: (route: string, callback: (nextLocation: string) => void) => void,
  },
  route: string,
}

class Dashboard extends React.Component {

  constructor(props: Props) {
    super(props);
    this.interval = null;
    const self: any = this;
    self.routerWillLeave = this.routerWillLeave.bind(this);
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    this.props.timeseriesRequest();
    this.interval = setInterval(() => {
      this.props.timeseriesRequest();
    }, 5000);
  }

  props: Props
  interval: ?number

  routerWillLeave() {
    clearTimeout(this.interval);
  }

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

export default withRouter(connect(
  state => ({
    timeseries: selectTimeseries(state),
  }),
  {
    timeseriesRequest,
  },
)(Dashboard));

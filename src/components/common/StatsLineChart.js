// @flow
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

type Props = {
  data: [{}],
  xDataKey: string,
  lineDataKeys: [string],
  title: string,
}

class StatsLineChart extends React.Component {

  props: Props

  render() {
    if (!this.props) {
      return null;
    }
    this.props.data.map((stat) => {
      this.props.lineDataKeys.forEach((key) => {
        stat[key] = +stat[key];
        stat[this.props.xDataKey] = new Date(stat[this.props.xDataKey]).toDateString();
      });
      return stat;
    });
    return (
      <div>
        <h1>{this.props.title}</h1>
        <LineChart
          width={600} height={300} data={this.props.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey={this.props.xDataKey} />
          <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
          <Tooltip />
          {this.props.lineDataKeys.map(key => <Line key={key} type="monotone" dataKey={key} stroke="#8884d8" activeDot={{ r: 8 }} />)}
        </LineChart>
      </div>
    );
  }
}

export default StatsLineChart;

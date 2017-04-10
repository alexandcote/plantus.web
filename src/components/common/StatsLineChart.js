// @flow
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
  data: [{}],
  xDataKey: string,
  lineDataKeys: [string],
  title: string,
}

const colors = {
  humidity: 'blue',
  luminosity: 'purple',
  temperature: 'red',
  waterLevel: 'green',
};

class StatsLineChart extends React.Component {

  props: Props

  render() {
    if (!this.props) {
      return null;
    }
    this.props.data.map((stat) => {
      this.props.lineDataKeys.forEach((key) => {
        stat[key] = +stat[key];
        const date = new Date(stat[this.props.xDataKey]);
        if (!isNaN(date.getTime())) {
          stat[this.props.xDataKey] = date.toTimeString().replace(/G.*/g, '');
        }
      });
      return stat;
    });
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={this.props.data}>
            <XAxis dataKey={this.props.xDataKey} />
            <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
            <Tooltip />
            {this.props.lineDataKeys.map(key => <Line key={key} type="monotone" dataKey={key} stroke={colors[key]} activeDot={{ r: 8 }} />)}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default StatsLineChart;

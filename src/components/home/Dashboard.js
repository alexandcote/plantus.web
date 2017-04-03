// @flow
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class Dashboard extends React.Component {

  render() {
    if (!this.props) {
      return null;
    }
    const data = [
      { name: '1', temp: 24 },
      { name: '2', temp: 23 },
      { name: '3', temp: 18 },
      { name: '4', temp: 19 },
      { name: '5', temp: 18 },
      { name: '6', temp: 18 },
      { name: '7', temp: 23 },
    ];
    return (
      <LineChart
        width={600} height={300} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}

export default Dashboard;

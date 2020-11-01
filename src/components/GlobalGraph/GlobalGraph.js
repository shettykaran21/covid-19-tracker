import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Title from '../Title/Title';

const GlobalGraph = ({ dayOneData }) => {
  // console.log(dayOneData);

  return (
    <div>
      <Title title="Global Graph" />
      <ResponsiveContainer width={'100%'} height={400}>
        <LineChart
          width={1200}
          height={600}
          data={dayOneData.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis tick={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Cases" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GlobalGraph;

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

const GlobalGraph = ({ data }) => {
  // console.log(data);

  return (
    <div>
      <Title title="Line Graph (India)" />
      <ResponsiveContainer width={'100%'} height={400}>
        <LineChart
          width={1200}
          height={600}
          data={data.data}
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

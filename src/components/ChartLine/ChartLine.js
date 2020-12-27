import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from 'recharts';

import TitleSecondary from '../Title/Title';

const ChartLine = ({ data }) => {
  // console.log(data);
  let newData = [];
  if (data) {
    newData = data.slice(Math.max(data.length - 30, 0));
  }

  return (
    <div style={{ marginTop: '5rem' }}>
      <TitleSecondary title="Line Graph" />
      <div>
        <div>
          <AreaChart
            width={1150}
            height={400}
            data={newData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Confirmed"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="Recovered"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
          <h4
            style={{
              marginBottom: '7rem',
              textAlign: 'center',
              fontWeight: 'normal',
            }}
          >
            Confirmed and Recovered Cases Growth (Since last 30 days)
          </h4>
        </div>

        <div>
          <AreaChart
            width={600}
            height={300}
            data={newData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" stopOpacity={0.8} />
                <stop offset="95%" stopColor="red" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              label={{ value: 'pv of page', position: 'insideLeft' }}
            />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Deaths"
              stroke="red"
              fillOpacity={1}
              fill="url(#colorSv)"
            />
          </AreaChart>
          <h4
            style={{
              marginBottom: '7rem',
              textAlign: 'center',
              fontWeight: 'normal',
            }}
          >
            Deaths Growth (Since last 30 days)
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ChartLine;

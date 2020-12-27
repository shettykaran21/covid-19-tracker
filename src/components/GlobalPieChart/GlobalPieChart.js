import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

import { formatNumber } from '../utils';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const GlobalPieChart = ({ totalConfirmed, totalDeaths, totalRecovered }) => {
  const data = [
    { name: 'Total Confirmed', value: totalConfirmed },
    { name: 'Total Deaths', value: totalDeaths },
    { name: 'Total Recovered', value: totalRecovered },
  ];

  const COLORS = ['#ff073a70', '#00C49F', '#FFBB28'];

  return (
    <PieChart width={385} height={385} style={{ margin: '0 auto' }}>
      <Pie
        dataKey="value"
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
        visibility={'visible'}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        `
      </Pie>
      <Tooltip formatter={formatNumber} />
      <Legend />
    </PieChart>
  );
};

export default GlobalPieChart;

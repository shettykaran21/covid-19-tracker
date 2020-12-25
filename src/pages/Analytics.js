import React, { useContext } from 'react';

import Title from '../components/Title/Title';
import AnalyticsTable from '../components/AnalyticsTable/AnalyticsTable';

const Analytics = () => {
  return (
    <div className="analytics" style={{ marginTop: 'var(--nav-height)' }}>
      <Title title="Analytics" />
      <AnalyticsTable />
    </div>
  );
};

export default Analytics;

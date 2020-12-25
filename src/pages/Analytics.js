import React, { useContext } from 'react';

import Title from '../components/Title/Title';
import AnalyticsTable from '../components/AnalyticsTable/AnalyticsTable';
import { SummaryContext } from '../contexts/SummaryContext';

const Analytics = () => {
  const { countriesData } = useContext(SummaryContext);

  return (
    <div className="analytics" style={{ marginTop: 'var(--nav-height)' }}>
      <Title title="Analytics" />
      <AnalyticsTable countriesData={countriesData} />
    </div>
  );
};

export default Analytics;

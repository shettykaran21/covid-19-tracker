import React, { useContext } from 'react';

import Overview from '../components/Overview/Overview';
import { SummaryContext } from '../contexts/SummaryContext';

const Home = () => {
  const { totalConfirmed, totalDeaths, totalRecovered } = useContext(
    SummaryContext
  );

  return (
    <div>
      <Overview
        totalConfirmed={totalConfirmed}
        totalDeaths={totalDeaths}
        totalRecovered={totalRecovered}
      />
    </div>
  );
};

export default Home;

import React, { useContext } from 'react';

import Overview from '../components/Overview/Overview';
import { SummaryContext } from '../contexts/SummaryContext';

const Home = () => {
  const {
    totalConfirmed,
    totalDeaths,
    totalRecovered,
    date,
    newConfirmed,
    newDeaths,
    newRecovered,
  } = useContext(SummaryContext);

  return (
    <div className="home" style={{ marginTop: 'var(--nav-height)' }}>
      <Overview
        totalConfirmed={totalConfirmed}
        totalDeaths={totalDeaths}
        totalRecovered={totalRecovered}
        date={date}
        newConfirmed={newConfirmed}
        newDeaths={newDeaths}
        newRecovered={newRecovered}
      />
    </div>
  );
};

export default Home;

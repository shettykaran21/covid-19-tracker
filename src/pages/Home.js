import React, { useContext } from 'react';

import Overview from '../components/Overview/Overview';
import GlobalGraph from '../components/GlobalGraph/GlobalGraph';
import { SummaryContext } from '../contexts/SummaryContext';
import { DayOneContext } from '../contexts/DayOneContext';

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

  const dayOneData = useContext(DayOneContext);

  return (
    <div
      className="home"
      style={{ marginTop: 'var(--nav-height)', paddingBottom: '5rem' }}
    >
      <Overview
        totalConfirmed={totalConfirmed}
        totalDeaths={totalDeaths}
        totalRecovered={totalRecovered}
        date={date}
        newConfirmed={newConfirmed}
        newDeaths={newDeaths}
        newRecovered={newRecovered}
      />
      <GlobalGraph dayOneData={dayOneData} />
    </div>
  );
};

export default Home;

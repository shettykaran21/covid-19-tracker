import React, { useContext, useState, useEffect } from 'react';

import covid from '../api/covid';

import Overview from '../components/Overview/Overview';
import { SummaryContext } from '../contexts/SummaryContext';

const Home = () => {
  const { totalConfirmed, totalDeaths, totalRecovered, date } = useContext(
    SummaryContext
  );

  return (
    <div className="home" style={{ marginTop: '10rem' }}>
      <Overview
        totalConfirmed={totalConfirmed}
        totalDeaths={totalDeaths}
        totalRecovered={totalRecovered}
        date={date}
      />
    </div>
  );
};

export default Home;

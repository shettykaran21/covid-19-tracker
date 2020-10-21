import React, { createContext, useState, useEffect } from 'react';

import covid from '../api/covid';

export const SummaryContext = createContext();

const SummaryContextProvider = (props) => {
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);

  const setData = async () => {
    const response = await covid.get('/summary');

    // console.log(response.data);
    const responseData = response.data;
    const global = responseData.Global;

    setTotalConfirmed(global.TotalConfirmed);
    setTotalDeaths(global.TotalDeaths);
    setTotalRecovered(global.TotalRecovered);

    console.log(totalConfirmed);
    console.log(totalDeaths);
    console.log(totalRecovered);
  };

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    setData();
  }, [totalConfirmed, totalDeaths, totalRecovered]);

  return (
    <SummaryContext.Provider
      value={(totalDeaths, totalRecovered, totalConfirmed)}
    >
      {props.children}
    </SummaryContext.Provider>
  );
};

export default SummaryContextProvider;

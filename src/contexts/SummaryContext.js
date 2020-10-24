import React, { createContext, useState, useEffect } from 'react';

import covid from '../api/covid';

export const SummaryContext = createContext();

const SummaryContextProvider = (props) => {
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [newConfirmed, setNewConfirmed] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  const [newRecovered, setNewRecovered] = useState(0);
  const [date, setDate] = useState('');

  const setData = async () => {
    const response = await covid.get('/summary');

    // console.log(response.data);
    const responseData = response.data;
    const global = responseData.Global;

    setTotalConfirmed(global.TotalConfirmed);
    setTotalDeaths(global.TotalDeaths);
    setTotalRecovered(global.TotalRecovered);
    setDate(responseData.Date);
    setNewConfirmed(global.NewConfirmed);
    setNewDeaths(global.NewDeaths);
    setNewRecovered(global.NewRecovered);

    // console.log(totalConfirmed);
    // console.log(totalDeaths);
    // console.log(totalRecovered);
  };

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    setData();
  }, [totalConfirmed, totalDeaths, totalRecovered, date]);

  return (
    <SummaryContext.Provider
      value={{
        totalDeaths,
        totalRecovered,
        totalConfirmed,
        date,
        newConfirmed,
        newDeaths,
        newRecovered,
      }}
    >
      {props.children}
    </SummaryContext.Provider>
  );
};

export default SummaryContextProvider;

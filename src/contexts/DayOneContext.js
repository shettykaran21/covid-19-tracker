import React, { createContext, useEffect, useState } from 'react';

import covid from '../api/covid';

export const DayOneContext = createContext();

const DayOneContextProvider = (props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await covid.get('/dayone/country/india');

    const responseData = response.data;

    setData(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DayOneContext.Provider value={{ data }}>
      {props.children}
    </DayOneContext.Provider>
  );
};

export default DayOneContextProvider;

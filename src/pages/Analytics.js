import React, { useContext, useState, useEffect } from 'react';

import Title from '../components/Title/Title';
import AnalyticsTable from '../components/AnalyticsTable/AnalyticsTable';
import AnalyticsTableSearch from '../components/AnalyticsTableSearch/AnalyticsTableSearch';
import { SummaryContext } from '../contexts/SummaryContext';

const Analytics = () => {
  const { countriesData } = useContext(SummaryContext);
  const [searchValue, setSearchValue] = useState('');
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);

  useEffect(() => {
    setFilteredCountriesData(
      countriesData.filter((countryData) => {
        return countryData.Country.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
    );
  }, [searchValue, countriesData]);

  const handleInput = (value) => {
    setSearchValue(value);
  };

  return (
    <div
      className="analytics"
      style={{
        marginTop: 'var(--nav-height)',
        position: 'relative',
        padding: '3rem 0',
      }}
    >
      <Title title="Analytics" />
      <AnalyticsTableSearch handleInput={handleInput} />
      <AnalyticsTable countriesData={filteredCountriesData} />
    </div>
  );
};

export default Analytics;

import React, { useContext, useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

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
      {countriesData ? (
        <div>
          <AnalyticsTableSearch handleInput={handleInput} />
          <AnalyticsTable countriesData={filteredCountriesData} />
        </div>
      ) : (
        <Loader
          type="Puff"
          color="cyan"
          height={80}
          width={80}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40vh',
          }}
        />
      )}
    </div>
  );
};

export default Analytics;

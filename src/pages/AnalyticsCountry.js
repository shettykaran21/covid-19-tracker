import React, { useState, useEffect } from 'react';
import covid from '../api/covid';

import InfoCard from '../components/InfoCard/InfoCard';
import InfoCardContainer from '../components/InfoCardContainer/InfoCardContainer';
import CountryName from '../components/CountryName/CountryName';
import ChartLine from '../components/ChartLine/ChartLine';

const AnalyticsCountry = (props) => {
  const [data, setData] = useState([]);
  const [slug] = useState(props.match.params.slug);
  const {
    Country,
    CountryCode,
    imgSrc,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  } = props.location.state;

  const getData = async () => {
    const response = await covid.get(`/dayone/country/${slug}`);
    const responseData = response.data;
    setData(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ marginTop: 'var(--nav-height)' }}>
      <CountryName
        countryName={Country}
        imgSrc={imgSrc}
        countryCode={CountryCode}
      />
      <InfoCardContainer>
        <InfoCard data={TotalConfirmed} title="Total Confirmed" />
        <InfoCard
          data={TotalDeaths}
          title="Total Deaths"
          textColor="var(--color-red)"
        />
        <InfoCard
          data={TotalRecovered}
          title="Total Recovered"
          textColor="var(--color-green)"
        />
        <InfoCard data={TotalConfirmed - TotalRecovered} title="Active Cases" />
        <InfoCard
          data={((TotalDeaths / TotalConfirmed) * 100).toFixed(2)}
          title="Fatality Rate"
          textColor="var(--color-red)"
          countUp="false"
        >
          %
        </InfoCard>
        <InfoCard
          data={((TotalRecovered / TotalConfirmed) * 100).toFixed(2)}
          title="Recovery Rate"
          textColor="var(--color-green)"
          countUp="false"
        >
          %
        </InfoCard>
      </InfoCardContainer>
      <ChartLine data={data} />
    </div>
  );
};

export default AnalyticsCountry;

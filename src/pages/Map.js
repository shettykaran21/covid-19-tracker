import React, { useState, useContext } from 'react';
import ReactTooltip from 'react-tooltip';

import MapChart from '../components/MapChart/MapChart';
import Title from '../components/Title/Title';
import { SummaryContext } from '../contexts/SummaryContext';

const Map = () => {
  const [content, setContent] = useState({});

  const { countriesData } = useContext(SummaryContext);

  return (
    <div style={{ marginTop: '10rem', padding: '' }}>
      {/* <Title title="Covid-19 Map" /> */}
      <MapChart setTooltipContent={setContent} countriesData={countriesData} />
      <ReactTooltip>
        <div style={{ fontSize: '1.6rem', textAlign: 'center' }}>
          <div>{content.NAME}</div>
          <div>
            {content.TotalConfirmed
              ? `Total Confirmed: ${content.TotalConfirmed}`
              : ''}{' '}
          </div>
          <div>
            {' '}
            {content.TotalDeaths
              ? `Total Deaths: ${content.TotalDeaths}`
              : ''}{' '}
          </div>
        </div>
      </ReactTooltip>
    </div>
  );
};

export default Map;

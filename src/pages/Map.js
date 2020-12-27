import React, { useState, useContext } from 'react';
import ReactTooltip from 'react-tooltip';

import MapChart from '../components/MapChart/MapChart';
import { SummaryContext } from '../contexts/SummaryContext';

const Map = () => {
  const [content, setContent] = useState({});
  const { countriesData } = useContext(SummaryContext);

  return (
    <div style={{ marginTop: 'var(--nav-height)', padding: '' }}>
      {/* <Title title="Covid-19 Map" /> */}
      {countriesData ? (
        <div>
          <MapChart
            setTooltipContent={setContent}
            countriesData={countriesData}
          />
          <ReactTooltip>
            <div style={{ fontSize: '1.6rem', textAlign: 'center' }}>
              <h2>{content.NAME}</h2>
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
              <div>
                {' '}
                {content.TotalRecovered
                  ? `Total Recovered: ${content.TotalRecovered}`
                  : ''}{' '}
              </div>
            </div>
          </ReactTooltip>
        </div>
      ) : null}
    </div>
  );
};

export default Map;

import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import MapChart from '../components/MapChart/MapChart';
import Title from '../components/Title/Title';

const Map = () => {
  const [content, setContent] = useState('');

  return (
    <div style={{ marginTop: '10rem' }}>
      <Title title="Covid-19 Map" />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default Map;

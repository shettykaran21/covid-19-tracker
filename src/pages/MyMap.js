import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import Map from '../components/Map/Map';
import Title from '../components/Title/Title';

const MyMap = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <Title title="Covid-19 Map" />
      <Map setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default MyMap;

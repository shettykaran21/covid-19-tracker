import React from 'react';

import Myths from '../components/Myths/Myths';
import Background from '../components/Background/Background';

const AboutCovid19 = () => {
  return (
    <div
      style={{
        marginTop: '12rem',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '5rem',
      }}
    >
      <Background />
      <Myths />
    </div>
  );
};

export default AboutCovid19;

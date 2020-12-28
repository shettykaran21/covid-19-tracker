import React from 'react';

import Myths from '../components/Myths/Myths';
import Background from '../components/Background/Background';
import Symptoms from '../components/Symptoms/Symptoms';

const AboutCovid19 = () => {
  return (
    <div>
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
      <div>
        <Symptoms />
      </div>
    </div>
  );
};

export default AboutCovid19;

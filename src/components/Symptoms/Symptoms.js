import React from 'react';
import { FaThermometerFull, FaQuestion } from 'react-icons/fa';

import TitleSecondary from '../TitleSecondary/TitleSecondary';
import './Symptoms.css';

const symptoms = [
  {
    icon: <FaThermometerFull fontSize="2rem" />,
    title: 'Fever',
    description:
      'A temporary increase in your body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body. Usually results in body temperature to exceed 98.6°F (37°C).',
  },
  {
    icon: <FaThermometerFull fontSize="2rem" />,
    title: 'Dyspnea',
    description:
      'Difficult or labored breathing. It is often described as an intense tightening in the chest, air hunger, difficulty breathing, breathlessness or a feeling of suffocation.',
  },
  {
    icon: <FaThermometerFull fontSize="2rem" />,
    title: 'Cough',
    description:
      'A sudden, forceful hacking sound to release air and clear an irritation in the throat or airway. Prolonged, vigorous coughing can irritate the lungs and cause sleeplessness, dizziness or fainting, urinary incontinence, and even broken ribs.',
  },
  {
    icon: <FaQuestion fontSize="2rem" />,
    title: 'Unknown',
    description:
      'Many of the symptoms for Coronavirus are currently unknown and often disguise themselves in symptoms of a common cold. In extreme cases, the virus can cause lung or organ failure.',
  },
];

const Symptoms = () => {
  return (
    <section className="section-features">
      <TitleSecondary title="Symptoms" />
      <div className="container section-features-container">
        {symptoms.map((symptom) => {
          return (
            <div className="feature-box">
              {symptom.icon}
              <h3
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                {symptom.title}
              </h3>
              <p className="feature-box__text">{symptom.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Symptoms;

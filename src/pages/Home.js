import React, { useContext, useState, useEffect } from 'react';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import Overview from '../components/Overview/Overview';
import GlobalGraph from '../components/GlobalGraph/GlobalGraph';
import GlobalPieChart from '../components/GlobalPieChart/GlobalPieChart';
import { SummaryContext } from '../contexts/SummaryContext';
import { DayOneContext } from '../contexts/DayOneContext';
import ChartLine from '../components/ChartLine/ChartLine';

const Home = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  const progressIconStyle = {
    position: 'fixed',
    top: '15%',
    right: '20px',
    width: '7rem',
    height: '7  rem',
  };

  const {
    totalConfirmed,
    totalDeaths,
    totalRecovered,
    date,
    newConfirmed,
    newDeaths,
    newRecovered,
  } = useContext(SummaryContext);

  const dayOneData = useContext(DayOneContext);

  console.log(dayOneData.data);

  return (
    <div
      className="home"
      style={{ marginTop: 'var(--nav-height)', paddingBottom: '5rem' }}
    >
      <svg
        className="progress-icon"
        viewBox="0 0 60 60"
        style={progressIconStyle}
      >
        <motion.path
          fill="none"
          strokeWidth="3"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
      </svg>

      <Overview
        totalConfirmed={totalConfirmed}
        totalDeaths={totalDeaths}
        totalRecovered={totalRecovered}
        date={date}
        newConfirmed={newConfirmed}
        newDeaths={newDeaths}
        newRecovered={newRecovered}
      />
      <div>
        <ChartLine data={dayOneData.data} />
        <GlobalPieChart
          totalConfirmed={totalConfirmed}
          totalDeaths={totalDeaths}
          totalRecovered={totalRecovered}
        />
      </div>
    </div>
  );
};

export default Home;

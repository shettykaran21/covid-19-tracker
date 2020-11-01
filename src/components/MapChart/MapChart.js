import React from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';

import styles from './MapChart.module.css';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = ({ setTooltipContent, countriesData }) => {
  const COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618',
  ];

  console.log(countriesData);

  const DEFAULT_COLOR = '#EEE';

  const colorScale = scaleQuantile()
    .domain(countriesData.map((d) => d.TotalConfirmed))
    .range(COLOR_RANGE);

  const geographyStyle = {
    default: {
      outline: 'none',
    },
    hover: {
      // fill: '#eee',
      transition: 'all 250ms',
      outline: 'none',
    },
    pressed: {
      outline: 'none',
    },
  };

  return (
    <div className={styles.mapChart}>
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const current = countriesData.find((s) => {
                  if (s !== undefined) {
                    return s.CountryCode === geo.properties.ISO_A2;
                  }
                });

                // console.log(current);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      current !== undefined
                        ? colorScale(current.TotalConfirmed)
                        : DEFAULT_COLOR
                    }
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;

                      setTooltipContent({
                        NAME: NAME,
                        TotalConfirmed:
                          current !== undefined ? current.TotalConfirmed : '',
                        TotalDeaths:
                          current !== undefined ? current.TotalDeaths : '',
                        TotalRecovered:
                          current !== undefined ? current.TotalRecovered : '',
                      });
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={geographyStyle}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;

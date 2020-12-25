import React, { useState } from 'react';

import styles from './AnalyticsTableSearch.module.css';

const AnalyticsTableSearch = ({ handleInput }) => {
  const [value, setValue] = useState('');

  const onKeyUp = () => {
    handleInput(value);
  };

  return (
    <div onKeyUp={onKeyUp} className={styles.container}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search a country"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div class={styles.search}></div>
    </div>
  );
};

export default AnalyticsTableSearch;

import React, { useState } from 'react';

const AnalyticsTableSearch = ({ handleInput }) => {
  const [value, setValue] = useState('');

  const onKeyUp = () => {
    handleInput(value);
  };

  return (
    <div onKeyUp={onKeyUp}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search a country"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default AnalyticsTableSearch;

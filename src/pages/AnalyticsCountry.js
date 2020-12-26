import React, { useState, useEffect } from 'react';
import covid from '../api/covid';

const AnalyticsCountry = (props) => {
  const [data, setData] = useState([]);
  const [slug] = useState(props.match.params.slug);

  const getData = async () => {
    const response = await covid.get(`/dayone/country/${slug}`);
    const responseData = response.data;
    setData(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div style={{ marginTop: 'var(--nav-height)' }}>Analytics Country</div>
  );
};

export default AnalyticsCountry;

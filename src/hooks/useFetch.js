import React, { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch(url)
      .then((res) => res.json())
      .then(({results})=>setData(results))
      .catch(setError)
      .finally(()=>setLoading(false))
  
  }, [url]);

 

  return { data,error,loading };
};

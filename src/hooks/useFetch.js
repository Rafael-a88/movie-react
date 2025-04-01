import { useState, useEffect } from 'react';

export default function useFetch(url, options) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await res.json();
        setResult(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]); 

  return { result, loading, error }; 
}

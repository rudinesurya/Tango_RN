import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'Dublin',
          limit: 20
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('deli');
  }, []);

  const restaurants = results;
  return [searchApi, restaurants, errorMsg];
};
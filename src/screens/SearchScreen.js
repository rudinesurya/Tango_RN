import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        term,
        location: 'Dublin'
      }
    });
    setResults(response.data.businesses);
  }

  return (
    <View>
      <SearchBar
        searchText={term}
        onSearchChange={setTerm}
        onSearchSubmit={searchApi}
      />
      <Text>Results: {results.length}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
});

export default SearchScreen;

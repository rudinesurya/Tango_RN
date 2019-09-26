import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMsg] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price && result.price.length === price.length;
    });
  };

  return (
    <>
      <SearchBar
        searchText={term}
        onSearchChange={setTerm}
        onSearchSubmit={() => searchApi(term)}
      />

      {errorMsg ? <Text>{errorMsg}</Text> : null}

      <ScrollView>
        <RestaurantList
          results={filterResultsByPrice('$')}
          title="Cheapest"
        />
        <RestaurantList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <RestaurantList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
});

export default HomeScreen;

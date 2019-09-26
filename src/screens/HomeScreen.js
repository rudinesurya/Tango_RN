import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import RestaurantList from '../components/RestaurantList';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMsg] = useResults();

  const filterRestaurantsByPrice = price => {
    return restaurants.filter(restaurant => {
      return restaurant.price && restaurant.price.length === price.length;
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
          restaurants={filterRestaurantsByPrice('$')}
          title="Cheapest"
        />
        <RestaurantList
          restaurants={filterRestaurantsByPrice('$$')}
          title="Bit Pricier"
        />
        <RestaurantList
          restaurants={filterRestaurantsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
});

export default HomeScreen;

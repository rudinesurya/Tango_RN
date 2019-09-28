import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import { fetchDataAction } from '../../redux';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const restaurants = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction('deli'))
  }, []);

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
        onSearchSubmit={() => dispatch(fetchDataAction(term))}
      />

      {/* {errorMsg ? <Text>{errorMsg}</Text> : null} */}

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

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { fetchRestaurantAction } from '../reducers/productReducer';

const RestaurantDetailScreen = ({ navigation }) => {
  const restaurant = useSelector((state) => state.product.restaurant);
  const loading = useSelector((state) => state.product.pending);
  const errorMessage = useSelector((state) => state.product.error);
  const dispatch = useDispatch();

  const id = navigation.getParam('id');

  useEffect(() => {
    dispatch(fetchRestaurantAction(id))
  }, []);

  if (loading || !restaurant)
    return null;

  return <View>
    <FlatList
      data={restaurant.photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => {
        return <Image style={styles.image} source={{ uri: item }} />
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default RestaurantDetailScreen;
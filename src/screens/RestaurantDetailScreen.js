import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantDetailScreen = ({ navigation }) => {
  const [result, setResult] = useState();
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result)
    return null;

  return <View>
    <FlatList
      data={result.photos}
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
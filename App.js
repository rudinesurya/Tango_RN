import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    RestaurantDetail: RestaurantDetailScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

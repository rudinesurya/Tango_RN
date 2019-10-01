import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import RestaurantListScreen from './src/screens/RestaurantListScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import AccountScreen from './src/screens/AccountScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    restaurantListFlow: createStackNavigator({
      RestaurantList: RestaurantListScreen,
      RestaurantDetail: RestaurantDetailScreen
    }),

    Account: AccountScreen
  })
})

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

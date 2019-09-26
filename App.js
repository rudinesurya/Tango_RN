import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';

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

export default createAppContainer(navigator);

import { createDrawerNavigator, createStackNavigator } from 'react-navigation';


import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import SideMenu from './SideMenu';
import Configuration from '../utils/header-configuration';


const DrawerNavigator = createDrawerNavigator({
  Feed: createStackNavigator({ Feed }, Configuration),
  Profile: createStackNavigator({ Profile }, Configuration),
}, {
  initialRouteName: 'Feed',
  contentComponent: SideMenu,
});


DrawerNavigator.navigationOptions = { header: null };

export default DrawerNavigator;

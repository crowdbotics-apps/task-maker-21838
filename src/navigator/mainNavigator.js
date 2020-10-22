import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial156118Navigator from '../features/Tutorial156118/navigator';
import NotificationList156090Navigator from '../features/NotificationList156090/navigator';
import Settings156089Navigator from '../features/Settings156089/navigator';
import Settings156081Navigator from '../features/Settings156081/navigator';
import UserProfile156079Navigator from '../features/UserProfile156079/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial156118: { screen: Tutorial156118Navigator },
NotificationList156090: { screen: NotificationList156090Navigator },
Settings156089: { screen: Settings156089Navigator },
Settings156081: { screen: Settings156081Navigator },
UserProfile156079: { screen: UserProfile156079Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

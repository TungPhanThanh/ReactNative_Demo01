import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import HomeTab from './src/screens/HomeTab';
import MenuTab from './src/screens/MenuTab';
import PersonTab from './src/screens/PersonTab';
import SettingTab from './src/screens/SettingTab';
import DetailsPlaylist from './src/screens/DetailsPlaylist';

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={2} />;
};

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: {
      header: null,
    },
  },
  DetailsPlaylist: {
    screen: DetailsPlaylist,
    navigationOptions: {
      headerTitle: 'Playlist',
      headerStyle: {
        backgroundColor: '#fff',
        height: 50,
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let IconComponent = Ionicons;
          let iconName;
          IconComponent = HomeIconWithBadge;
          iconName = `ios-globe${focused ? '' : ''}`;
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
        tabBarLabel: 'Discover',
      },
    },
    Menu: {
      screen: MenuTab,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let iconName;
          iconName = `ios-grid${focused ? '' : ''}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
        tabBarLabel: 'Menu',
      },
    },
    Person: {
      screen: PersonTab,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let iconName;
          iconName = `ios-person${focused ? '' : ''}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
        tabBarLabel: 'Person',
      },
    },
    Setting: {
      screen: SettingTab,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let iconName;
          iconName = `ios-settings${focused ? '' : ''}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
        tabBarLabel: 'Settings',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#ab1aad',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: true,
  });

export default createAppContainer(TabNavigator);

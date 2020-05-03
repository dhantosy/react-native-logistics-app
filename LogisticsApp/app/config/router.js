import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import colors from '../config/colors';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import PickUpRequest from '../screens/PickUpRequest';
import PickUpDetails from '../screens/PickUpDetails';
import PickUpPage from '../screens/PickUpPage';
import CreateOrder from '../screens/CreateOrder';
import History from '../screens/History';
import UserAccount from '../screens/UserAccount';

const HomeNavigator = createStackNavigator({
  PickUpRequest: {
    screen: PickUpRequest,
    navigationOptions: () => ({
      title: 'Company Logo'
    })
  },
  PickUpDetails: {
    screen: PickUpDetails,
    navigationOptions: () => ({
      title: 'Pickup Details'
    })
  }
});

const PickUpPageNavigator = createStackNavigator({
  PickUpPage: {
    screen: PickUpPage,
    navigationOptions: () => ({
      title: 'Pick Up'
    })
  }
});

const CreateOrderNavigator = createStackNavigator({
  CreateOrder: {
    screen: CreateOrder,
    navigationOptions: () => ({
      title: 'Create Order'
    })
  }
});

const HistoryNavigator = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: () => ({
      title: 'History'
    })
  }
});

const UserAccountNavigator = createStackNavigator({
  UserAccount: {
    screen: UserAccount,
    navigationOptions: () => ({
      title: 'User Account'
    })
  }
});

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarOptions: {
        activeTintColor: colors.redText
      },
      tabBarIcon: ({ tintColor }) => <IconFontAwesome name='home' size={23} color={tintColor} />
    }
  },
  Pickup: {
    screen: PickUpPageNavigator,
    navigationOptions: {
      tabBarLabel: 'Pick Up',
      tabBarOptions: {
        activeTintColor: colors.redText
      },
      tabBarIcon: ({ tintColor }) => <IconFontAwesome name='calendar-day' size={23} color={tintColor} />
    }
  },
  CreateOrder: {
    screen: CreateOrderNavigator,
    navigationOptions: {
      tabBarLabel: 'Create Order',
      tabBarOptions: {
        activeTintColor: colors.redText
      },
      tabBarIcon: ({ tintColor }) => <IconFontAwesome name='box-open' size={23} color={tintColor} />
    }
  },
  History: {
    screen: HistoryNavigator,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarOptions: {
        activeTintColor: colors.redText
      },
      tabBarIcon: ({ tintColor }) => <IconFontAwesome name='list-alt' size={23} color={tintColor} />
    }
  },
  UserAccount: {
    screen: UserAccountNavigator,
    navigationOptions: {
      tabBarLabel: 'User Account',
      tabBarOptions: {
        activeTintColor: colors.redText
      },
      tabBarIcon: ({ tintColor }) => <IconFontAwesome name='user-circle' size={23} color={tintColor} />
    }
  },
});

export default createAppContainer(Tabs);

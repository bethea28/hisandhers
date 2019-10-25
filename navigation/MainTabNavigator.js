import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import FormScreen from '../screens/FormScreen'
import SettingsScreen from '../screens/SettingsScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Form: FormScreen
  },
  {
    initialRouteName: 'Home'
  }
)

const tabNavigator = createAppContainer(RootStack)

export default tabNavigator

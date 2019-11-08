import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'


// tab页
import TabNavigator from './src/tabnav/tabnav'

//注册页面路由
import Login from './src/pages/login/login'
import Views from "./src/pages/indexpages/view"
import Texts from './src/pages/indexpages/texts'
import ScrollViews from "./src/pages/indexpages/ScrollView"
import SectionList from "./src/pages/indexpages/SectionList"

const AppNavigator = createStackNavigator({
  Main:{
    screen : TabNavigator,
    navigationOptions:{
      header:null
    }
  },
  Login: {
    screen: Login,
  },
  Views: {
    screen: Views,
  },  
  ScrollViews:{
    screen: ScrollViews
  },
  SectionList:{
    screen: SectionList
  },
  Texts:{
    screen: Texts
  },
 
});

export default createAppContainer(AppNavigator);
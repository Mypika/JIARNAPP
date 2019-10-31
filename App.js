import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Index from './src/tabs/index'
import User from './src/tabs/user'
import Login from './src/pages/login/login'
import TabNavigator from './src/tabnav/tabnav'

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

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
 
});

export default createAppContainer(AppNavigator);
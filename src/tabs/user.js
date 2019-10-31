import React from 'react'
import{
    View,
    Text,
    Image
}from 'react-native'
import { HeaderTitle } from 'react-navigation-stack';

class User extends React.Component {
    static navigationOptions = {
        tabBarLabel: '个人中心',
        tabBarIcon: ({focused}) => {
            // console.log(focused)
            if (focused) {
                return (
                    <Image style={{width:30,height:30}} source={{uri:"http://g.hiphotos.baidu.com/image/pic/item/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg"}}/>
                );
            }
            return (
                <Image style={{width:30,height:30}} source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg'}}/>
            );
        },
    };

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settingslkjlkl000000000!</Text>
        </View>
      );
    }
  }

export default User
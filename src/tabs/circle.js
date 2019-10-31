import React from 'react'
import{
    View,
    Text,
    Image,
}from 'react-native'


class Circle extends React.Component {
    static navigationOptions = {
        tabBarLabel: '朋友圈',
        tabBarIcon: ({focused}) => {
            // console.log(focused)
            if (focused) {
                return (
                    <Image style={{width:30,height:30}} source={{uri:"https://hbimg.huabanimg.com/4d73f80087eb376cfa02c8cd3fef8b104ad9705537485-PGAvsZ_fw658"}}/>
                );
            }
            return (
                <Image style={{width:30,height:30}} source={{uri:'https://anime-pictures.net/pictures/get_image/461282-2048x1152-wan+nyan+a+la+mode%21-nekohara+korone-nae-nae-long+hair-single-blush.png'}}/>
            );
        },
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text onPress={()=>{this.props.navigation.navigate('User')}}>圈子!</Text>
        </View>
      );
    }
  }

export default Circle
import React from 'react'
import{
    View,
    Text,
    Image,
}from 'react-native'


class Index extends React.Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({focused}) => {
            // console.log(focused)
            if (focused) {
                return (
                    <Image style={{width:30,height:30}} source={{uri:"http://www.ziticq.com/upload/image/20190829/5d6753180abc8.png"}}/>
                );
            }
            return (
                <Image style={{width:30,height:30}} source={{uri:'https://images.anime-pictures.net/34f/34f97bbfc5e84a10c2a7602e10185fa3.jpg?if=ANIME-PICTURES.NET_-_90007-1925x1083-babycat+%28observerz%29-highres-open+mouth-blue+eyes-wide+image-twintails.jpg'}}/>
            );
        },
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text onPress={()=>{this.props.navigation.navigate('Login')}}>????4564564?????!</Text>
        </View>
      );
    }
  }

export default Index
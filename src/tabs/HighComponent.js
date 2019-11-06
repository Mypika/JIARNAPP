import React from 'react'
import{
    View,
    Text,
    Image,
    Picker
}from 'react-native'


class HighComponent extends React.Component {
    static navigationOptions = {
        tabBarLabel: '高阶组件',
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
    state={
      language:[1,2,3,4]
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text onPress={()=>{this.props.navigation.navigate('Login')}}>去登录</Text>
            <Picker
              selectedValue={this.state.language}
              mode={"dialog"}
              prompt={'ssdfa'}
              style={{height: 50, width: 300}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="123456" value="12va" />
              <Picker.Item label="123456" value="12" />
              <Picker.Item label="123456" value="12va" />
              <Picker.Item label="123456" value="12" />
              <Picker.Item label="123456" value="12va" />
              <Picker.Item label="123456" value="12" />
              <Picker.Item label="123456" value="12va" />
              <Picker.Item label="123456" value="12" />
              <Picker.Item label="123456" value="12va" />
              <Picker.Item label="123456" value="12" />
              <Picker.Item label="123456" value="12va" />
              <Picker.Item label="123456" value="12" />
              <Picker.Item label="123456" value="12va" />
              <Picker.Item label="123456" value="12" />
            </Picker>
        </View>
      );
    }
  }

export default HighComponent
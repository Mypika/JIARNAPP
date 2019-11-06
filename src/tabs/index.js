import React from 'react'
import{
    View,
    Text,
    Image,
    Picker,
    ScrollView,
    StatusBar,
    StyleSheet,
    Dimensions
}from 'react-native'
import AntDesign from'react-native-vector-icons/AntDesign'
const moules = [{msg:'容器组件',id:1},
                {msg:'基础组件',id:2},
                {msg:'表单组件',id:3},
                {msg:'交互控件',id:4},
                {msg:'列表视图',id:5},
                {msg:'ios组件',id:6},
                {msg:'Android组件',id:7}
              ]
class Index extends React.Component {
    static navigationOptions = {
        tabBarLabel: '内置组件',
        tabBarIcon: ({focused}) => {
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
      const win = Dimensions.get('window').width;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
            <View style={{height:40,borderBottomWidth:1,
                          backgroundColor:'#fff',width:win,
                          justifyContent:"center",alignItems:"center",
                          borderBottomColor:'#f0f0f0'}}>
                <Text>基础组件</Text>
            </View>
            <ScrollView>
                <View style={{...styles.title,width:win,color:'#fff'}}>
                  <AntDesign name = {'codesquareo'}     
                            size =  {56}    
                            color  = { '#ccc' } />
                  <Text style={{marginTop:20,}}>React Native 提供了一些内置的组件</Text>
                </View>
                <View style={styles.content}>
                    {moules.map(item=>{
                      return <View key={item.id} style={styles.contentList}>
                            <Text>{item.msg}</Text>
                            <AntDesign name = {'down'}     
                                      size =  {16}    
                                      color  = { '#777' } />
                        </View>
                    })}
                </View>
            </ScrollView>
        </View>
      );
    }
  }
const  styles = StyleSheet.create({
    title:{
      flexDirection:'column',
      backgroundColor:'#f5f5f5',
      color:'#fff',
      alignItems:"center",
      justifyContent:'center',
      paddingTop:30,
      paddingBottom:30
    },
    content:{
      backgroundColor:"#f5f5f5"
    },
    contentList:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#fff',
      margin:10,
      marginBottom:5,
      marginTop:5,
      padding:10
    }
})

export default Index
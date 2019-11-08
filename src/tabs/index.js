import React from 'react'
import{
    View,
    Text,
    Image,
    Picker,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableHighlight,
    Dimensions
}from 'react-native'

import Header from '../../src/component/header/header'

import AntDesign from'react-native-vector-icons/AntDesign'

import {MoulesList} from '../json/Moule';
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
      language:[1,2,3,4],
      downID:-1
    }
    cutDown=(data)=>{
      let id = data.id
      if(data.id===this.state.downID){
        id = -1
      }
        this.setState({
          downID:id
        })
    }
    rightSkip=(data)=>{
      console.log(data.link)
      this.props.navigation.push(data.link)
    }
    render() {
      const win = Dimensions.get('window').width;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Header name='基础组件' />
            <ScrollView>
                <View style={{...styles.title,width:win,color:'#fff'}}>
                  <AntDesign name = {'codesquareo'}     
                            size =  {56}    
                            color  = { '#ccc' } />
                  <Text style={{marginTop:20,}}>React Native提供了一些内置的组件</Text>
                </View>
                <View style={styles.content}>
                    {MoulesList.map(item=>{
                      return <View  style={styles.contentList} key={item.id}>
                                 <TouchableHighlight underlayColor="#f0f0f0" style={styles.Touch} onPress={this.cutDown.bind(this,item)}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',
                                                  padding:20,flex:1,
                                                  backgroundColor:this.state.downID===item.id?'#f0f0f0':'#fff'}}>
                                      <Text>{item.msg}</Text>
                                      <AntDesign name = {this.state.downID===item.id?'up':'down'}     
                                              size =  {16}    
                                              color  = { '#777' }/>
                                    </View>
                                </TouchableHighlight>
                                {this.state.downID===item.id&&item.list.map(item=>{
                                      return <TouchableHighlight underlayColor="#f0f0f0" key={item.id} onPress={this.rightSkip.bind(this,item)}>
                                               <View style={{flexDirection:'row',justifyContent:'space-between',
                                                          padding:20,flex:1,marginLeft:10,
                                                          borderTopColor:'#f0f0f0',borderTopWidth:1}}>
                                                  <Text>{item.msg}</Text>
                                                  <AntDesign name = {'right'}     
                                                          size =  {16}    
                                                          color  = { '#777' } />
                                                </View>
                                            </TouchableHighlight>
                                  })}
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
    Touch:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    contentList:{
      flexDirection:'column',
      backgroundColor:'#fff',
      margin:10,
      marginBottom:5,
      marginTop:5,
    }
})

export default Index
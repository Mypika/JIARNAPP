import React from 'react'
import{
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet
}from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const zuijin = [
  {uri:'https://anime-pictures.net/pictures/get_image/304187-2048x1152-negai+no+kakera+to+hakugin+no+agreement-jessica+francoise+magritte-manyako+%28mohumohu%29-long+hair-single-highres.png',
  tit:'壹二③'},
  {uri:'https://anime-pictures.net/pictures/get_image/235824-2048x1152-koiken+otome-yasukuni+akane-tateha+%28marvelous+grace%29-long+hair-blush-highres.png',
  tit:'三四五'},
  {uri:'https://anime-pictures.net/pictures/get_image/166599-1920x1080-sora+no+woto-a-1+pictures-suminoya+kureha-kishida+mel-single-short+hair.jpg',
  tit:'五六七'},
  {uri:'https://anime-pictures.net/pictures/get_image/415496-2560x1440-shirogane+x+spirits%21-giga-nakano+mei-kino+%28kino+konomi%29-long+hair-single.png',
  tit:'柒佰玖'},
  {uri:'https://anime-pictures.net/pictures/get_image/166599-1920x1080-sora+no+woto-a-1+pictures-suminoya+kureha-kishida+mel-single-short+hair.jpg',
  tit:'哈？!?!'},
]
class Circle extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'API',
        labelStyle: {
        fontSize: 0,
        margin: 1
      },
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                  <View>
                    <Image style={{width:30,height:30}} source={{uri:"https://anime-pictures.net/pictures/get_image/166599-1920x1080-sora+no+woto-a-1+pictures-suminoya+kureha-kishida+mel-single-short+hair.jpg"}}/>
                  </View>
                );
            }
            return (
                <Image style={{width:30,height:30}} source={{uri:'https://anime-pictures.net/pictures/get_image/461282-2048x1152-wan+nyan+a+la+mode%21-nekohara+korone-nae-nae-long+hair-single-blush.png'}}/>
            );
        },
    };
    render() {
      return (
        <View style={{flexDirection:"column"}}>
          <View style={styles.header}>
              <Text style={{color:'#fff'}}>我的书架</Text>
          </View>
          <ScrollView>
            <View style={styles.content}>
              <View style={{borderBottomColor:'#cfcfcf', borderBottomWidth:1,padding:15,}}>
                <Text style={{fontSize:12,paddingLeft:15,color:'#747474'}}>最近阅读</Text>
              </View>
              <View style={{margin:15,flexDirection:'row',flexWrap:"wrap"}}>
                {zuijin.map((item,index)=>{
                    return <View key={index+1} style={{margin:8,justifyContent:"center",borderRadius:5,alignItems:"center",}}>
                    <Image resizeMode={'stretch'} style={{width:80,height:140,borderRadius:50,}} source={{uri:item.uri}} />
                    <View style={styles.shadow}></View>
                    <Text>{item.tit}</Text>
                  </View>
                })}
              </View>
            </View>
            <View style={styles.content}>
              <View style={{borderBottomColor:'#cfcfcf', borderBottomWidth:1,padding:15,}}>
                <Text style={{fontSize:12,paddingLeft:15,color:'#747474'}}>我的添加</Text>
              </View>
              <View style={{margin:15,flexDirection:'row',flexWrap:"wrap"}}>
                {zuijin.map((item,index)=>{
                    return <View key={index+1} style={{margin:8,justifyContent:"center",alignItems:"center",}}>
                    <Image resizeMode={'stretch'} 
                    style={{width:80,height:140,borderRadius:50,shadowColor:'#000',shadowOffset:{width:10,height:10},shadowOpacity:1,}} source={{uri:item.uri}} />
                    <Text>{item.tit}</Text>
                  </View>
                })}
              </View>
            </View>
            </ScrollView>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
    header:{
        height:44,
        backgroundColor:'#87cefa',
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        height:44,
        justifyContent:"center",
        alignItems:"center",
    }
})
export default Circle
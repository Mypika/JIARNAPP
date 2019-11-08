import React, { Component } from 'react';

import { View,
         Text,
         StyleSheet,
         ScrollView,
         TouchableHighlight} from "react-native";

import Header from '../../component/header/header'
class Views extends Component {
    static navigationOptions = {
            header:null
      }
    state = { 
            
    }
    backSkip=()=>{
        this.props.navigation.goBack();
    }
    render() { 
        return ( 
            <View style={{flex:1}}>
                <Header SkipBack={this.backSkip} back name='View' />
               <ScrollView>
               <View style={styles.titletxt}>
                    <Text style={styles.titletxtA}>
                        View
                    </Text>
                    <Text style={styles.titletxtB}>
                        作为创建 UI 时最基础的组件，View 是一个支持 Flexbox 布局、样式、一些触摸处理、和一些无障碍功能的容器，并且它可以放到其它的视图里，
                        也可以有任意多个任意类型的子视图。
                        不论在什么平台上，View 都会直接对应一个平台的原生视图，无论它是 UIView、div还是 android.view.View。
                    </Text>
                </View>
                <View style={styles.contentA}>
                    <View style={{backgroundColor:'#ff0000',width:120,height:120}}>
                    </View>
                    <View style = {{backgroundColor:'#789456',width:120,height:120}}>
                    </View>
                </View>
                <View style={styles.contentAtxt}>
                    <Text style={{color:'#747474'}}>
                        View 的设计初衷是和 StyleSheet 搭配使用，这样可以使代码更清晰并且获得更高的性能。尽管内联样式也同样可以使用。
                    </Text>
                </View>
                <View style={{backgroundColor:'#fefefe',marginLeft:20,marginRight:20}}>
                    <Text style={{color:'rgba(255,229,100,1)'}}>
                        &&:view标签内不能直接放置文本，文本内容需要使用Text标签包裹
                    </Text>
                </View>
                <View style={styles.contentAtxt}>
                    <Text style={{color:'#747474'}}>
                        View布局使用flex布局
                    </Text>
                </View>
                <View style={{padding:20,paddingTop:0}}>
                    <Text style={{color:'#111'}}>
                        横向布局：flexDirection:'row'
                    </Text>
                </View>
                <View style={{padding:20,paddingTop:0,flexDirection:'row',justifyContent:"center"}}>
                        <View style={{width:80,height:120,backgroundColor:'#ff0000'}}></View>
                        <View style={{width:80,height:120,backgroundColor:'#ffc107'}}></View>
                        <View style={{width:80,height:120,backgroundColor:'#03a9f4'}}></View>
                </View>
                <View style={{padding:20,paddingTop:0}}>
                    <Text style={{color:'#111'}}>
                        纵向布局：flexDirection:'column'
                    </Text>
                </View>
                <View style={{padding:20,paddingTop:0,flexDirection:'column',justifyContent:"center"}}>
                        <View style={{width:280,height:40,backgroundColor:'#ff0000'}}></View>
                        <View style={{width:280,height:40,backgroundColor:'#ffc107'}}></View>
                        <View style={{width:280,height:40,backgroundColor:'#03a9f4'}}></View>
                </View>
                {/* <View style={{backgroundColor:'#fefefe',marginLeft:20,marginRight:20}}>
                    <Text style={{color:'rgba(255,229,100,1)'}}>
                        &&:view组件还
                    </Text>
                </View> */}
                </ScrollView>
            </View>
         );
    }
}
const styles = StyleSheet.create({
        titletxt:{
            padding:10,
            justifyContent:"center",
            alignItems:"center"
        },
        titletxtA:{
            padding:10,
            color:'#747474',
            borderBottomColor:'#747474',
            borderBottomWidth:0.5
        },
        titletxtB:{
            padding:5,
            color:'#474747'
        },
        contentA:{
            flexDirection:'row',
            justifyContent:"center",
            alignItems:"center"
        },
        contentAtxt:{
            padding:20,
        },
})
export default Views;
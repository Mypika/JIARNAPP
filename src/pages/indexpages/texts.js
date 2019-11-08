import React, { Component } from 'react';

import { View,
         Text,
         StyleSheet,
         ScrollView,
         TouchableHighlight,  } from "react-native";
import Header from '../../component/header/header';
class SectionList extends Component {
    static navigationOptions = {
        header:null
    }
    state = { 
        TxtList:['第1行文本']
    }
    backSkip=()=>{
        this.props.navigation.goBack();
    }
    addline=()=>{
        this.setState({
            TxtList:[...this.state.TxtList,'第'+this.state.TxtList.length+'行文本']
        })
    }
    render() { 
        return ( 
            <View>
                <Header SkipBack={this.backSkip} back name='Text' />
                <ScrollView>
                    <View style={styles.titletxt}>
                        <Text style={styles.titletxtA}>Text</Text>
                        <Text style={styles.titletxtB}>
                            一个用于显示文本的React组件，并且它也支持嵌套、样式，以及触摸处理
                        </Text>
                    </View>
                    <ScrollView nestedScrollEnabled={true} style={{height:180,margin:20}}>
                        <View style={styles.content}>
                            {this.state.TxtList.map(item=>{
                                return <Text>{item}</Text>
                            })}
                        </View>
                    </ScrollView>
                    <View style={{justifyContent:"center",alignItems:"center"}}>
                        <TouchableHighlight style={{backgroundColor:'#03a9f4',borderRadius:5,padding:10,
                                        margin:10,width:150,justifyContent:"center",alignItems:"center"}} onPress={this.addline}>
                            <View>
                                <Text style={{color:'#fff'}}>添加一行</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{backgroundColor:'#f44336',padding:10,
                                        margin:10,width:150,borderRadius:5,
                                        justifyContent:"center",alignItems:"center"}} onPress={this.removeline}>
                            <View>
                                <Text style={{color:'#fff'}}>删除一行</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
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
    content:{
        padding:20,
        borderRadius:5,
        height:180,
        backgroundColor:'#f0f0f0',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center"
    },
    contentAtxt:{
        padding:20,
    },
})
export default SectionList;
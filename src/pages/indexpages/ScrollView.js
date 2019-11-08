import React, { Component } from 'react';

import { View,
        Text,
        StyleSheet,
        ScrollView,
        TouchableHighlight} from "react-native";

import Header from '../../component/header/header'
class ScrollViews extends Component {
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
                        <Text style={styles.titletxtA}>ScrollView</Text>
                        <Text style={styles.titletxtB}>
                        一个封装了平台的ScrollView（滚动视图）的组件，同时还集成了触摸锁定的“响应者”系统。记住ScrollView必须有一个确定的高度才能正常工作，
                        因为它实际上所做的就是将一系列不确定高度的子组件装进一个确定高度的容器（通过滚动操作）。
                        要给ScrollView一个确定的高度的话，要么直接给它设置高度（不建议），要么确定所有的父容器都有确定的高度。
                        一般来说我们会给ScrollView设置flex: 1以使其自动填充父容器的空余空间，但前提条件是所有的父容器本身也设置了flex或者指定了高度，
                        否则就会导致无法正常滚动，你可以使用元素查看器来查找具体哪一层高度不正确。
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{marginBottom:10}}>纵向滚动视图</Text>
                        <ScrollView nestedScrollEnabled={true} style={{height:260,padding:5}}>
                            <View style={{height:180,width:280,backgroundColor:'#ff0000',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅰ</Text>
                            </View>
                            <View style={{height:180,width:280,backgroundColor:'#789456',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅱ</Text>
                            </View>
                            <View style={{height:180,width:280,backgroundColor:'#ff0000',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅲ</Text>
                            </View>
                            <View style={{height:180,width:280,backgroundColor:'#789456',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅳ</Text>   
                            </View>
                            <View style={{height:180,width:280,backgroundColor:'#ff0000',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅴ</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.titletxt}>
                        <Text style={styles.titletxtB}>
                            设置horizontal={'{false}'}将改变ScrollView布局为横向布局，并且可以横向滑动
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{marginBottom:10}}>横向滚动视图</Text>
                        <ScrollView nestedScrollEnabled={true} horizontal={true} showsHorizontalScrollIndicator={true} style={{height:185,padding:5}}>
                            <View style={{height:180,width:280,backgroundColor:'#ff0000',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅰ</Text>
                            </View>
                            <View style={{height:180,width:280,backgroundColor:'#789456',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅱ</Text>
                            </View>
                            <View style={{height:180,width:280,backgroundColor:'#ff0000',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅲ</Text>
                            </View>
                            <View style={{height:180,width:280,backgroundColor:'#789456',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅳ</Text>   
                            </View>
                            <View style={{height:180,width:280,backgroundColor:'#ff0000',justifyContent:"center",alignItems:'center'}}>
                                <Text style={styles.ScrollYtxt}>Ⅴ</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.titletxt}>
                        <Text style={styles.titletxtB}>
                        ScrollView会简单粗暴地把所有子元素一次性全部渲染出来。
                        其原理浅显易懂，使用上自然也最简单。然而这样简单的渲染逻辑自然带来了性能上的不足。
                        想象一下你有一个特别长的列表需要显示，可能有好几屏的高度。创建和渲染那些屏幕以外的JS组件和原生视图，
                        显然对于渲染性能和内存占用都是一种极大的拖累和浪费。
                        除非你要渲染的数据特别少，否则你都应该尽量使用FlatList，哪怕它们用起来更麻烦。
                        </Text>
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
        flexDirection:'column',
        padding:20
    },
    ScrollYtxt:{
        fontSize:28,
        color:'#fff'
    },
})
 
export default ScrollViews;
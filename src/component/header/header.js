import React, { Component } from 'react';

import { View, 
         Text,
         StatusBar,
         Dimensions,
         TouchableHighlight } from 'react-native'

import AntDesign from'react-native-vector-icons/AntDesign'
class Header extends Component {

    state = { 

     }
    render() { 
        const win = Dimensions.get('window').width;
        return (<View>
                    <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
                        <View style={{height:40,borderBottomWidth:1,
                                    backgroundColor:'#fff',width:win,
                                    justifyContent:"center",alignItems:"center",
                                    borderBottomColor:'#f0f0f0',flexDirection:'row'}}>
                           {this.props.back&&<TouchableHighlight underlayColor='#f0f0f0'  style={{justifyContent:"center",alignItems:"center",
                                                         position:"absolute",left:10}} onPress={this.props.SkipBack}>
                                        <View>
                                            <AntDesign name = {'left'}     
                                                        size =  {20}    
                                                        color  = { '#444' } />
                                        </View>
                            </TouchableHighlight>}
                            <View style={{width:win,justifyContent:"center",flexDirection:"row",
                                            }}>
                                <Text>{this.props.name}</Text>
                            </View> 
                        </View>
                </View>);
    }
}
Header.defaultProps={
    back:false
}
export default Header;
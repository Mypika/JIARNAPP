import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
    // ActivityIndicator
}from 'react-native'


class Login extends React.Component {
    state={
        inputmsg:''
    }
    logins=()=>{
        console.log('登录')
    }
    onChange=(e)=>{
      this.setState({
          inputmsg:e
      })
    }
    render() {
      return (
        <View style={Styles.indexstyle}>
            <View style={Styles.activity}>
                <TextInput style={Styles.TextInputstyle} onChangeText={this.onChange} />
                <TextInput style={Styles.TextInputstyle} value={this.state.inputmsg}/>
            </View>
            <View style={{   alignItems:"center", justifyContent:'center'}}>
                <TouchableHighlight onPress={this.logins}>
                    <View style={Styles.LoginButton}>
                        <Text>LEMO RESO</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
      );
    }
  }
export default Login

const Styles = StyleSheet.create({
    indexstyle:{
        flex:1,
        paddingTop:100,
    },
    LoginButton:{
        width:100,
        height:30,
        backgroundColor:'#45876a',
        alignItems:"center",
        justifyContent:'center'
    },
    activity:{
     
    },
    TextInputstyle:{
        borderStyle:'dashed',
        borderWidth:1,
        borderColor:'#000',
        marginLeft:15,
        marginRight:15,
        marginTop:15,
        marginBottom:15,
    }
})
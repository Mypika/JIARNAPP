import React, { Component } from 'react';

import { View,
         Text,   } from "react-native";
class SectionList extends Component {
    state = { 
            
    }
    backSkip=()=>{
        this.props.navigation.goBack();
    }
    render() { 
        return ( 
            <View>
                {/* <Header SkipBack={this.backSkip} back name='View' /> */}
                <Text>SectionList</Text>
            </View>
         );
    }
}
 
export default SectionList;
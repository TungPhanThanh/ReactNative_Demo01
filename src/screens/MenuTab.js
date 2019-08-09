import React, { Component } from 'react';
import { Icon, Image ,Text, View } from 'react-native';

export default class MenuTab extends Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Person Tab</Text>
            </View>
        )
    }
}
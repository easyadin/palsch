import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EasyTextInput from '../customComponents/textInput';


export default class Login extends Component {
    
  render() {
    return (
        <View>
            <Text style={styles.logo}> Palsch </Text>
            <Text style={styles.signinText}> Signin to continue </Text>
            <EasyTextInput />
        </View>
      );
  }
}

const styles = StyleSheet.create({
    logo:{    
        alignSelf:"center",    
        marginTop:93,
        height: 42,
        width: 105,
        color: '#39F',
        fontWeight:'bold',
        fontSize: 33,
        letterSpacing: -1.1,
        lineHeight: 42,
    },
    signinText:{
        fontSize:17,
        paddingLeft:22,
        marginTop:40,
        height:20,
        width:200,
        color:'#ABADAF',
        letterSpacing:-0.57,
        lineHeight:20,    
    }
});

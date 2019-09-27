import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EasyTextInput from '../customComponents/textInput';
import {Dimensions } from "react-native";


export default class Login extends Component {
 
    constructor(){
        super();
        this.state = {screenWidth:Math.round(Dimensions.get('window').width)}
    }

  render() {
    return (
        <View>
            <Text style={styles.logo}> Palsch </Text>
            <Text style={styles.signinText}> Signin to continue </Text>

            <View style={{width:this.state.screenWidth,
                          padding:30,
                          }}>
              <EasyTextInput />
            </View>
           
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
        paddingLeft:27,
        marginTop:40,
        height:20,
        width:200,
        color:'#ABADAF',
        letterSpacing:-0.57,
        lineHeight:20,    
    }
});

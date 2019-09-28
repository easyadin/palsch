import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import EasyTextInput from '../customComponents/textInput';
import {Dimensions } from "react-native";

export default class Login extends Component {
 
    constructor(){
        super();
        this.state = {screenWidth:Math.round(Dimensions.get('window').width),
        usernameIcon_48px:require('../assets/user-3-line_48px.png'),
        usernameIcon_24px:require('../assets/user-3-line_24px.png'),
        passwordIcon_48px:require('../assets/lock-unlock-line_48px.png'),
        passwordIcon_24px:require('../assets/lock-unlock-line_24px.png'),

        }
    }

  render() {
    return (
        <View>
            <View>
                <Text style={styles.logo}> Palsch </Text>
                <Text style={styles.signinText}> Signin to continue </Text>

                <View style={{width:this.state.screenWidth,
                            padding:20,
                            }}>
                        <EasyTextInput
                                icon48px={this.state.usernameIcon_48px}
                                icon24px={this.state.usernameIcon_24px}
                                placeholder={"enter your username"}
                                name={"username"}
                                />
                </View>
                <View style={{width:this.state.screenWidth,
                            paddingLeft:20,
                            paddingRight:20,
                        }}>
                            <EasyTextInput 
                            icon48px={this.state.passwordIcon_48px}
                            icon24px={this.state.passwordIcon_24px}
                            placeholder={"enter your password"}
                            name={"password"}
                            secureTextEntry={true}
                            />
                </View>
                <View style={{width:this.state.screenWidth,
                            padding:20,
                        
                        }}>
                            <Button title="Sign in" style={{height:60}}/>
                            <Text style={{paddingTop:20}}>Forgot password?</Text>
                </View>
            
            </View>
            <View style={{width:this.state.screenWidth,
                        padding:20, 
                        marginTop:30,
                        position: 'relative',
                        left: 0, 
                        right: 0, 
                        bottom: 0
                    }}>
                        <Text 
                            style={{marginBottom:10,alignSelf:'center'
                        }}>Don't have an account yet?</Text>
                        <Button 
                             title="Create account"
                             type="outline"
                        />
                        <Text 
                            style={{alignSelf:'center',paddingTop:30,
                        }}>Terms and conditions</Text>
                        <View style={{
                            paddingTop:10,
                            width:60,
                            alignSelf:'center',
                            borderBottomColor:'black',
                            borderBottomWidth:1,
                        }}></View>
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
        paddingLeft:20,
        marginTop:40,
        height:20,
        width:200,
        color:'#ABADAF',
        letterSpacing:-0.57,
        lineHeight:20,    
    }
});

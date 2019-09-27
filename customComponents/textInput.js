import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class textInput extends Component {
    constructor(){
        super();
        this.state = {
            usernameIcon_48px:require('../assets/user-3-line_48px.png'),
            usernameIcon_24px:require('../assets/user-3-line_24px.png'),
            passwordIcon:require('../assets/lock-unlock-line.png'),
            isFocused:false,
        }
        onFocusChange = () =>{
            this.setState({isFocused:true});
            console.log(this.isFocused)
        }
    }
    render(){

        //get the image or icon has prop
        //scale it to right size
        return (
            <View style={styles.rectangle}>
               <View style={styles.container}>
                    <Image source={this.state.isFocused ? this.state.usernameIcon_24px : this.state.usernameIcon_48px}>
                    </Image>
                    <View>
                        <Text>Username</Text>
                        <TextInput
                           placeholder={"enter your username"}
                           autoCompleteType={'username'}
                           onFocus={this.onFocusChange}>
                        </TextInput>
                    </View>
               </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    rectangle:{
        height: 70,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#E5E6E6',
    },
    container:{
      flex:1,
      flexDirection:'row',
      margin: 10,
    },
    textStyle:{    

    }

});
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class textInput extends Component {
    constructor(props){
        super();
        this.state = {
            isFocused:false,
        }
     }
    onFocus(){
            this.setState({isFocused:true})     
      }

    render(){

        //get the image or icon has prop
        //pass the image || icon of 48px and 24px to the props
        //pass the properties 
        return (
            <View style={styles.rectangle}>
               <View style={styles.container}>
                    <Image source={this.state.isFocused ? this.props.icon24px : this.props.icon48px}>
                    </Image>
                    <View>
                        <Text>Username</Text>
                        <TextInput
                           placeholder={this.props.placeholder}
                           autoCompleteType={'username'}
                           onFocus={ () => this.onFocus()}
                           name={this.props.name}
                           secureTextEntry={this.props.secureTextEntry}
                           >
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
});
import { Text } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class FontText extends Component {
Loadtext(){
    if(this.props.fontLoaded){
      return (<Text style={this.props.style}>{this.props.children}</Text>) ;
    }
  }
render(){
    return (
      this.Loadtext()
    );
  }
}
const mapStateToProps = (state) => {
 const {fontLoaded}= state.loader;
  return { fontLoaded };
};
export default connect(mapStateToProps ,{})(FontText) ;
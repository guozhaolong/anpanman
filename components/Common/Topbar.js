import {Dimensions, StyleSheet, Text, View, TouchableOpacity, Image} from "react-native"
import { Constants } from 'expo'
import { FontAwesome } from '@expo/vector-icons'
import React, {Component} from 'react'

const {width} = Dimensions.get('window')

class Topbar extends Component {

  static defaultProps = {
    leftClick: ()=>{},
    rightClick: ()=>{},
  };

  render() {
    return <View style={styles.container}>
      <TouchableOpacity onPress={this.props.leftClick} style={styles.titleBtn}>
        {this.props.leftIcon && <FontAwesome name={this.props.leftIcon} size={20} color={'gray'} />}
        {this.props.leftText && <Text style={{ marginLeft:5,fontSize: 16,opacity:.8 }}>{this.props.leftText}</Text>}
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>{this.props.title}</Text>
      </View>
      <TouchableOpacity onPress={this.props.rightClick} style={styles.titleBtn}>
        {this.props.rightIcon && <FontAwesome name={this.props.rightIcon} size={20} color={'gray'} />}
        {this.props.rightText && <Text style={{ marginLeft:5,fontSize: 16,opacity:.8 }}>{this.props.rightText}</Text>}
      </TouchableOpacity>
    </View>
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    width:width,
    height:40,
    justifyContent:'space-between',
    paddingHorizontal: 10,
    marginTop: Constants.statusBarHeight,
    shadowColor: '#ccc',
    shadowRadius: 1,
    shadowOpacity: .5,
    shadowOffset: {width:1,height:1},
  },
  titleBtn: {
    flexDirection:'row',
    alignItems:'center',
    width:40
  },
  title: {
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 18,
    opacity: .9
  },
});

export default Topbar

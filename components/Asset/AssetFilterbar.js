import {Dimensions, StyleSheet, Text, View, TouchableOpacity, Image} from "react-native"
import { Constants } from 'expo'
import { FontAwesome } from '@expo/vector-icons'
import React, {Component} from 'react'
import { withNavigation } from 'react-navigation'

const {width,height} = Dimensions.get('window')

class AssetFilterbar extends Component {

  render() {
    return <View style={styles.menu}>
      <TouchableOpacity onPress={()=>{}} style={styles.menuItem}>
        <Text style={styles.menuText}>综合</Text>
        <FontAwesome name="angle-down" size={14} color={'gray'} style={styles.menuIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}} style={styles.menuItem}>
        <Text style={styles.menuText}>状态</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}} style={styles.menuItem}>
        <Text style={styles.menuText}>数量</Text>
        <FontAwesome name="sort" size={14} color={'gray'} style={styles.menuIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}} style={styles.menuItem}>
        <Text style={styles.menuText}>筛选</Text>
        <FontAwesome name="filter" size={14} color={'gray'} style={styles.menuIcon}/>
      </TouchableOpacity>
    </View>
  }
}

const styles = StyleSheet.create({
  menu:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#f5f5f5',
    width:width,
    height:40,
    justifyContent: 'space-around',
    marginTop: Constants.statusBarHeight,
  },
  menuItem: {
    flexDirection:'row',
    alignItems:'center',
  },
  menuText: {
    fontSize: 16,
  },
  menuIcon: {
    marginLeft:5,
  },
});

export default withNavigation(AssetFilterbar)

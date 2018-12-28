import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import {Dimensions, StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import { Constants } from 'expo';
import { FontAwesome } from '@expo/vector-icons'
import React, {Component} from "react";
import Drawer from 'react-native-drawer'

const {width,height} = Dimensions.get('window');
const drawerStyles = {
  drawer: { shadowColor: '#000', shadowOpacity: 0.7, shadowRadius: 3},
};
const ControlPanel = () => {
  return <View style={styles.filter}>
    <Text>aaa</Text>
    <Text>bbb</Text>
    <Text>ccc</Text>
    </View>
};

class FilterBar extends Component {
  state = {
    showMask: false,
    showMask2: false,
  };

  render() {
    return <Drawer
      side='right'
      ref="drawer1"
      type="overlay"
      content={<ControlPanel />}
      tapToClose={true}
      openDrawerOffset={0.1}
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      onOpen={()=>this.setState({showMask:true})}
      onClose={()=>this.setState({showMask:false})}
    >
      <View style={styles.menu}>
        <TouchableOpacity onPress={()=>this.refs.drawer1.open()} style={[styles.menuItem,{marginLeft: 20}]}>
          <Text style={styles.menuText}>综合</Text>
          <FontAwesome name="angle-down" size={14} color={'gray'} style={styles.menuIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.refs.drawer1.open()} style={[styles.menuItem,{marginLeft: width/4-40}]}>
          <Text style={styles.menuText}>状态</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.refs.drawer1.open()} style={[styles.menuItem,{marginLeft: width/4-40}]}>
          <Text style={styles.menuText}>数量</Text>
          <FontAwesome name="angle-down" size={14} color={'gray'} style={styles.menuIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.refs.drawer1.open()} style={[styles.menuItem,{marginLeft: width/4-40}]}>
          <Text style={styles.menuText}>筛选</Text>
          <FontAwesome name="filter" size={14} color={'gray'} style={styles.menuIcon}/>
        </TouchableOpacity>
      </View>
      {this.state.showMask && <View style={styles.mask}/>}
      {this.props.children}
    </Drawer>
  }
}

const styles = StyleSheet.create({
  mask:{
    position:'absolute',
    backgroundColor: '#000',
    opacity: .7,
    width:width,
    height:height,
    zIndex:1,
  },
  menu:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#f5f5f5',
    width:width,
    height:40,
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
  filter: {
    backgroundColor: '#fff',
    height:height,
  },
});

export default FilterBar

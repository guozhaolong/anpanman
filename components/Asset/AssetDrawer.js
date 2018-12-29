import { Component } from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import Tag from "../Common/Tag";
import React from "react";
import {Constants} from "expo";

const {width,height} = Dimensions.get('window');

class AssetDrawer extends Component {

  state = {
    showAllLocations: false,
  };

  render() {
    return <View style={styles.container}>
      <ScrollView style={styles.filter}>
        <View style={styles.filterContainer}>
          <View style={styles.filterTitleContainer}>
            <Text style={styles.filterTitle}>位置</Text>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Text style={styles.filterBtnText}>全部</Text>
              <FontAwesome name="angle-down" size={14} color={'gray'} style={styles.filterBtnIcon}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.filterTags]}>
            <Tag title="中石油" checked={true} style={styles.tag}/>
            <Tag title="钻井四公司" style={styles.tag}/>
            <Tag title="中石油大庆钻探工程公司" style={styles.tag}/>
            <Tag title="钻井一公司" checked={true} style={styles.tag}/>
            <Tag title="钻井三公司" style={styles.tag}/>
            <Tag title="中石油渤海钻探工程公司" style={styles.tag}/>
            <Tag title="中石油西部钻探工程公司" style={styles.tag}/>
          </View>
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.filterTitleContainer}>
            <Text style={styles.filterTitle}>状态</Text>
          </View>
          <View style={[styles.filterTags]}>
            <Tag title="已停机" style={styles.tag}/>
            <Tag title="运行中" style={styles.tag}/>
          </View>
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.filterTitleContainer}>
            <Text style={styles.filterTitle}>位置</Text>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Text style={styles.filterBtnText}>全部</Text>
              <FontAwesome name="angle-down" size={14} color={'gray'} style={styles.filterBtnIcon}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.filterTags]}>
            <Tag title="中石油" style={styles.tag}/>
            <Tag title="钻井四公司" style={styles.tag}/>
            <Tag title="中石油大庆钻探工程公司" style={styles.tag}/>
            <Tag title="钻井一公司" style={styles.tag}/>
            <Tag title="钻井三公司" style={styles.tag}/>
            <Tag title="中石油渤海钻探工程公司" style={styles.tag}/>
            <Tag title="中石油西部钻探工程公司" style={styles.tag}/>
          </View>
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.filterTitleContainer}>
            <Text style={styles.filterTitle}>位置</Text>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Text style={styles.filterBtnText}>全部</Text>
              <FontAwesome name="angle-down" size={14} color={'gray'} style={styles.filterBtnIcon}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.filterTags]}>
            <Tag title="中石油" style={styles.tag}/>
            <Tag title="钻井四公司" style={styles.tag}/>
            <Tag title="中石油大庆钻探工程公司" style={styles.tag}/>
            <Tag title="钻井一公司" style={styles.tag}/>
            <Tag title="钻井三公司" style={styles.tag}/>
            <Tag title="中石油渤海钻探工程公司" style={styles.tag}/>
            <Tag title="中石油西部钻探工程公司" style={styles.tag}/>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={() => {}} style={styles.resetBtn}>
          <Text style={styles.resetBtnText}>重置</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.okBtn}>
          <Text style={styles.okBtnText}>确定</Text>
        </TouchableOpacity>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    height:height,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  btnGroup:{
    flexDirection:'row',
    shadowColor: '#ccc',
    shadowRadius: 1,
    shadowOpacity: .3,
    shadowOffset: {width:0,height:-1},
  },
  resetBtn:{
    paddingVertical: 12,
    backgroundColor: '#fff',
    width:(width-40)/2,
    alignItems:'center',
    height: 60,
  },
  resetBtnText:{
    fontSize: 16,
    fontWeight: '400',
    color:'gray',
  },
  okBtn:{
    paddingVertical: 12,
    backgroundColor: '#F5222D',
    width:(width-40)/2,
    alignItems:'center',
    height: 60,
  },
  okBtnText:{
    fontSize: 16,
    fontWeight: '400',
    color:'white',
  },
  filter:{
    padding: 10,
  },
  filterContainer:{
    marginBottom: 20,
  },
  filterBtn: {
    flexDirection:'row',
    alignItems:'center',
  },
  filterBtnText: {
    color: 'gray'
  },
  filterBtnIcon: {
    marginLeft:5,
  },
  filterTitleContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  filterTags: {
    flexDirection:'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    marginRight: 10,
    marginBottom: 10,
  }
});

export default AssetDrawer
import {Dimensions, StyleSheet, View, ScrollView,Text,TextInput,} from "react-native"
import React, {Component} from "react"
import Topbar from "../Common/Topbar"
import Chart from "../Common/Chart"
const {width,height} = Dimensions.get('window')
class AssetDetail extends Component {

  render() {
    const {id,title,assetnum,model,amount,unit,manufacturer,serial,createdate,rfid,status} = this.props.navigation.state.params
    return (
      <View>
        <Topbar title={title} leftText="返回" leftIcon="angle-left" leftClick={()=>this.props.navigation.goBack()}/>
        <ScrollView style={styles.container}>
          <View style={styles.inputItem}>
            <Text style={styles.label}>设备编号</Text>
            <TextInput style={styles.input} value={assetnum}/>
          </View>
          <View style={styles.inputItem}>
            <Text style={styles.label}>序列号</Text>
            <TextInput style={styles.input} value={serial}/>
          </View>
          <Chart />
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputItem: {
    flexDirection: 'row',
    borderBottomColor:'#f5f5f5',
    borderBottomWidth: 1,
    height: 44,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    opacity: .8,
    width: 80,
  },
  input: {
    fontSize: 16,
    height:44,
    width: width-100,
  }
})

export default AssetDetail
import {StyleSheet, Text, View,} from "react-native"
import React, {Component} from "react"
import {FontAwesome} from "@expo/vector-icons"
import Button from "../Common/Button"

class AssetDetail extends Component {
  static navigationOptions = {}

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>This is a modal!</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="Dismiss"/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
  },
  cover: {
    width: 88,
    height: 66,
    marginRight: 10
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    color: '#000',
  },
  content: {
    paddingTop:5,
    fontSize: 12,
    color: '#999',
  },
  itemRightContent: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding:12,
  },
})

export default AssetDetail
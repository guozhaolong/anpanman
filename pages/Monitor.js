import React, { Component } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'

import AssetFilterbar from "../components/Asset/AssetFilterbar";
import AssetList from "../components/Asset/AssetList";

const {width,height} = Dimensions.get('window');


@connect(({ asset }) => ({ ...asset }))
class Monitor extends Component {
  static navigationOptions = {
    tabBarLabel: '在线监测',
    tabBarIcon: ({ focused, tintColor }) => (
      <FontAwesome name="line-chart" size={24} color={focused ? '#409EFF' : 'gray'} />
    ),
  };

  componentDidMount() {

  }

  render() {
    return (
        <View style={styles.container}>
          <AssetFilterbar navigation={this.props.navigation}/>
          <AssetList style={{width:width}} items={this.props.items} loading={this.props.loading} dispatch={this.props.dispatch}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Monitor

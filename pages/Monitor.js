import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Button } from '../components/Button'

@connect(({ asset }) => ({ ...asset }))
class Monitor extends Component {
  static navigationOptions = {
    tabBarLabel: '在线监测',
    tabBarIcon: ({ focused, tintColor }) => (
      <FontAwesome name="line-chart" size={24} color={focused ? '#409EFF' : 'gray'} />
    ),
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.items.map(i => <Text key={i.id}>{i.title}</Text>)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Monitor

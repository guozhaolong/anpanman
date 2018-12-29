import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Button } from '../components/Common/Button'

@connect(({ asset }) => ({ ...asset }))
class WO extends Component {
  static navigationOptions = {
    tabBarLabel: '维保记录',
    tabBarIcon: ({ focused, tintColor }) => (
      <FontAwesome name="wrench" size={24} color={focused ? '#409EFF' : 'gray'} />
    ),
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.gotoDetail} title="detail" />
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

export default WO

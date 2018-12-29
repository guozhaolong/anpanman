import React, { Component } from 'react'
import {StyleSheet, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'


const {width,height} = Dimensions.get('window');

@connect(({ asset }) => ({ ...asset }))
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon: ({ focused, tintColor }) => (
      <FontAwesome name="home" size={24} color={focused ? '#409EFF' : 'gray'} />
    ),
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate('Monitor'))
  }

  componentDidMount() {
    this.props.dispatch({type:'asset/fetch'})
  }

  render() {

    return (
      <View style={styles.container}>
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
});

export default Home

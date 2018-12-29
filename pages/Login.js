import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Button } from '../components/Common/Button'

@connect(({ app }) => ({ ...app }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  onLogin = () => {
    this.props.dispatch({type:'login',payload:{}})
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <Button onPress={this.onLogin}  title={"Login"}/>
        )}
        {!fetching && (
          <Touchable style={styles.close} onPress={this.onClose}>
            <FontAwesome name="close" size={32} color="green"/>
          </Touchable>
        )}
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
  close: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
})

export default Login
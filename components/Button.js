import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

export const Button = ({ title, children, style, textStyle, ...rest }) => (
  <TouchableOpacity activeOpacity={0.8} style={[styles.button, style]} {...rest}>
    <Text style={[styles.text, textStyle]}>{title || children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#037aff',
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 16,
    color: '#037aff',
  },
})

export default Button
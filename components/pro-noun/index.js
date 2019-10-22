import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class ProNoun extends Component {
  render() {
    const { pronoun, styles, color, onPress } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color,
            height: 200,
            width: 200,
            borderRadius: 10
          },
          styles
        ]}
      >
        <Text style={{ fontSize: 30 }}>{pronoun.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}

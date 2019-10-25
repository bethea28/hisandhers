import React from 'react'
import { ScrollView, StyleSheet, View, TextInput } from 'react-native'
import { ExpoLinksView } from '@expo/samples'

export default function FormScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        // onChangeText={text => onChangeText(text)}
        // value={value}
        multiline={true}
        disableFullscreenUI={false}
      />
    </View>
  )
}

FormScreen.navigationOptions = {
  title: 'Form'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})

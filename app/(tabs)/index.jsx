import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import wallpaper from "@/assets/images/wallp.jpg"

const app = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={wallpaper} style={styles.wallp}>
      <Text style={styles.titleText}>Stablesend</Text>
    </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleText: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 4,
  },
  wallp: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
})
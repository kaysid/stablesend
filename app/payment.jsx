import { StyleSheet, ImageBackground } from 'react-native';
import wallpaper from "@/assets/images/wallp.jpg"



import { View, Text } from 'react-native'
import React from 'react'

const payment = () => {
  return (
    <View style={styles.container}>

    <ImageBackground source={wallpaper} style={styles.wallp}>
      <Text style={styles.text}>Enter amount</Text>
      
    </ImageBackground>
    
    </View>
  )
}
export default payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textShadowColor: '#000',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 3,
  },
  wallp: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
  }
});

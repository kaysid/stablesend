import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import wallpaper from "@/assets/images/wallp.jpg"
import { useEffect, useState } from 'react'
import * as LocalAuthentication from 'expo-local-authentication'

export default app = () => {
  let [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    async function authenticate(params) {
      const result = await LocalAuthentication.authenticateAsync()
      console.log(result)
      setIsAuthenticated(result.success) 
      // Works fine on android, was unable to test on iOS device but should work the same way. NOTE: if device does not have a security pin to access phone, authentication popup will not work. FaceID can also be implemented with a couple more steps if need be.
    }
    authenticate()
  }, [])

  return (
    <View style={styles.container}>
    <ImageBackground source={wallpaper} style={styles.wallp}>
      <Text style={styles.titleText}>Stablesend{"\n"}
      {isAuthenticated ? "Authenticated Successfully" : "Unauthenticated"} 
      {/* will state Unathenticated on Web but works fine on Android */}
      </Text>
    </ImageBackground>
    </View>
  )
}




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
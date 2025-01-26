import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
const index = () => {
  return (
    <View>
      <Text style={styles.welcome}>Welcome</Text>
      <Link href="/protected" asChild>
        <Button title="Login" />
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 3,
  },
});

import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

export default app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Stablesend{"\n"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  titleText: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 4,
  },
});

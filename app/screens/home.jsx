import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        contentFit="cover"
        style={styles.image}
        source={require("../../assets/images/itsy.gif")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});

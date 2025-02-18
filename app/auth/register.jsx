import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
const loginImage = require("../../assets/images/coinicon.png");

export default function Register({ navigation }) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => router.replace("/tabs/settings")} // Navigating to Payment screen inside Tab
      >
        <Text style={styles.loginText}>Setup for Business</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    textAlign: "center",
  },
  loginText: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginBtn: {
    width: 150,
    height: 150,
    backgroundColor: "#121212",
    padding: 10,
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 175,
  },
});

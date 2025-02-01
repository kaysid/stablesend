import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
const loginImage = require("../../assets/images/coinicon.png");
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const checkLocalStorageAddys = async (params) => {
    //user is signed up state check
    const ethAddy = await AsyncStorage.getItem("localEthAddy");
    const solAddy = await AsyncStorage.getItem("localSolAddy");
  };
  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("NavBar")}
      >
        <Text style={styles.loginText}>Login</Text>
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

import { SafeAreaView, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import React from "react";

const Payment = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Enter amount</Text>
      </View>
    </SafeAreaView>
  );
};
export default Payment;

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 3,
  },
  wallp: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
  },
});

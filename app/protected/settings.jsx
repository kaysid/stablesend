import { StyleSheet, TextInput, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const settings = () => {
  const [text, onChangeText] = React.useState();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.textLabel}>Ethereum Network:</Text>
        <TextInput
          style={styles.input}
          placeholder="Etherum USDC Receiving Address"
          placeholderTextColor={"gray"}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
        <Text style={styles.textLabel}>Solana Network:</Text>
        <TextInput
          style={styles.input}
          placeholder="Solana USDC Receiving Address"
          placeholderTextColor={"gray"}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
        <Button title="Save"></Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  textLabel: {
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default settings;

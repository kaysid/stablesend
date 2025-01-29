import { StyleSheet, TextInput, Text, Button, View } from "react-native";
import React from "react";

const Settings = () => {
  const [text, onChangeText] = React.useState();

  return (
    <View>
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
    </View>
  );
};

export default Settings;

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

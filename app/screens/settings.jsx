import { StyleSheet, TextInput, Text, Button, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  const [localEthAddy, onChangeTextEth] = React.useState();
  const [localSolAddy, onChangeTextSol] = React.useState();

  const populateFromLocalStorage = async (params) => {
    //all functionality of this screen is done except for repopulation of text fields after page refresh. states seem to get stuck on populated or empty (unable to type). dont know how to fix yet
    const ethAddy = await AsyncStorage.getItem("localEthAddy");
    const solAddy = await AsyncStorage.getItem("localSolAddy");
    onChangeTextEth(ethAddy);
    onChangeTextSol(solAddy);
  };

  const storeEth = async (params) => {
    try {
      await AsyncStorage.setItem("localEthAddy", localEthAddy);
    } catch (error) {}
  };

  const storeSol = async (params) => {
    try {
      await AsyncStorage.setItem("localSolAddy", localSolAddy);
    } catch (error) {}
  };

  const clearAddresses = async (params) => {
    await AsyncStorage.clear();
    onChangeTextEth("");
    onChangeTextSol("");
    console.log(await AsyncStorage.getAllKeys());
  };

  const print = async (params) => {
    const keys = await AsyncStorage.getAllKeys();
    console.log(await AsyncStorage.multiGet(keys));
  };

  return (
    <View>
      <Text style={styles.textLabel}>Ethereum Network:</Text>
      <TextInput
        style={styles.input}
        placeholder="Etherum USDC Receiving Address"
        placeholderTextColor={"gray"}
        onChangeText={onChangeTextEth}
        value={localEthAddy}
      ></TextInput>
      <Button onPress={storeEth} title="Save"></Button>
      <Text style={styles.textLabel}>Solana Network:</Text>
      <TextInput
        style={styles.input}
        placeholder="Solana USDC Receiving Address"
        placeholderTextColor={"gray"}
        onChangeText={onChangeTextSol}
        value={localSolAddy}
      ></TextInput>
      <Button onPress={storeSol} title="Save"></Button>
      <Button onPress={clearAddresses} title="Clear Addresses"></Button>
      <Button onPress={print} title="print"></Button>
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

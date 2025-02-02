import { StyleSheet, TextInput, Text, Button, View } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";

const Settings = () => {
  const [localEthAddy, onChangeTextEth] = React.useState();
  const [localSolAddy, onChangeTextSol] = React.useState();
  const [clipboardText, setClipboardText] = useState(""); //need to implement paste button

  const populateFromLocalStorage = async (params) => {
    //populate from asyncStorage to text input fields
    const ethAddy = await AsyncStorage.getItem("localEthAddy");
    const solAddy = await AsyncStorage.getItem("localSolAddy");
    onChangeTextEth(ethAddy);
    onChangeTextSol(solAddy);
  };

  useEffect(() => {
    //wait for comp to mount before calling
    populateFromLocalStorage();
  }, []);

  const storeEth = async (params) => {
    //store eth address to local storage
    try {
      await AsyncStorage.setItem("localEthAddy", localEthAddy);
    } catch (error) {}
  };

  const storeSol = async (params) => {
    //store sol address to local storage
    try {
      await AsyncStorage.setItem("localSolAddy", localSolAddy);
    } catch (error) {}
  };

  const clearAddresses = async (params) => {
    //clear from both local storage
    await AsyncStorage.clear();
    onChangeTextEth("");
    onChangeTextSol("");
    console.log(await AsyncStorage.getAllKeys());
  };

  const print = async (params) => {
    //for dev use only
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
      {/* <Button onPress={handlePaste} title="Paste"></Button> */}
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

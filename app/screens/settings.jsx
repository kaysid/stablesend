import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";
import Feather from "@expo/vector-icons/Feather";

const Settings = () => {
  const [localEthAddy, onChangeTextEth] = React.useState();
  const [localSolAddy, onChangeTextSol] = React.useState();

  const pasteClipboardEth = async () => {
    const s = await Clipboard.getStringAsync();
    onChangeTextEth(s);
  };

  const pasteClipboardSol = async () => {
    const s = await Clipboard.getStringAsync();
    onChangeTextSol(s);
  };

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

  useEffect(() => {
    //making sure stored address updates on variable change
    storeSol();
  }, [localSolAddy]);

  useEffect(() => {
    //making sure stored address updates on variable change
    storeEth();
  }, [localEthAddy]);

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
      <View style={styles.pasteContainer}>
        <TextInput
          editable={false}
          style={styles.input}
          placeholder="Etherum USDC Receiving Address"
          placeholderTextColor={"gray"}
          onChangeText={onChangeTextEth}
          value={localEthAddy}
        ></TextInput>
        <TouchableOpacity style={styles.touchableO} onPress={pasteClipboardEth}>
          <Feather name="clipboard" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.textLabel}>Solana Network:</Text>
      <View style={styles.pasteContainer}>
        <TextInput
          editable={false}
          style={styles.input}
          placeholder="Solana USDC Receiving Address"
          placeholderTextColor={"gray"}
          onChangeText={onChangeTextSol}
          value={localSolAddy}
        ></TextInput>
        <TouchableOpacity style={styles.touchableO} onPress={pasteClipboardSol}>
          <Feather name="clipboard" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Button onPress={clearAddresses} title="Clear Addresses"></Button>
      <Button onPress={print} title="print"></Button>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  pasteContainer: {
    flexDirection: "row",
    height: 50,
    padding: 10,
    alignItems: "center",
  },
  input: {
    height: "100%",
    borderWidth: 2,
    padding: 3,
    marginRight: 15,
    flex: 1,
  },
  textLabel: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  touchableO: {
    marginRight: 10,
  },
});

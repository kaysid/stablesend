import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Clipboard from "expo-clipboard";
import Feather from "@expo/vector-icons/Feather";
import localAuth from "../../utils/localAuth";

const Settings = () => {
  const [localEthAddy, onChangeTextEth] = useState("");
  const [localSolAddy, onChangeTextSol] = useState("");
  const screenWidth = Dimensions.get("window").width;

  const pasteClipboardEth = async () => {
    const s = await Clipboard.getStringAsync();
    let res = null;
    localEthAddy == null || localEthAddy == ""
      ? onChangeTextEth(s)
      : (res = await localAuth());

    res ? onChangeTextEth(s) : console.log("auth failed");
  };

  const pasteClipboardSol = async () => {
    const s = await Clipboard.getStringAsync();
    let res = null;
    localSolAddy == null || localSolAddy == ""
      ? onChangeTextSol(s)
      : (res = await localAuth());

    res ? onChangeTextSol(s) : console.log("auth failed");
  };

  const formatWalletAddress = (address) => {
    if (screenWidth < 500) {
      if (!address) return ""; //null check

      return `${address.slice(0, 8)}....${address.slice(-8)}`;
    } else {
      return address;
    }
  };

  const populateFromLocalStorageEth = async (params) => {
    //populate from asyncStorage to text input fields
    const ethAddy = await AsyncStorage.getItem("localEthAddy");
    onChangeTextEth(ethAddy);
  };

  const populateFromLocalStorageSol = async (params) => {
    //populate from asyncStorage to text input fields
    const solAddy = await AsyncStorage.getItem("localSolAddy");
    onChangeTextSol(solAddy);
  };

  useEffect(() => {
    //wait for comp to mount before calling
    populateFromLocalStorageEth();
    populateFromLocalStorageSol();
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

  const clearEthAddy = async (params) => {
    let res = await localAuth();

    if (res) {
      await AsyncStorage.removeItem("localEthAddy");
      onChangeTextEth("");
    } else {
    }
    console.log("auth failed");
  };

  const clearSolAddy = async (params) => {
    let res = await localAuth();

    if (res) {
      await AsyncStorage.removeItem("localSolAddy");
      onChangeTextSol("");
    } else {
    }
    console.log("auth failed");
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
          value={formatWalletAddress(localEthAddy)}
        ></TextInput>
        <TouchableOpacity style={styles.touchableO} onPress={pasteClipboardEth}>
          <Feather name="clipboard" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableO} onPress={clearEthAddy}>
          <Feather name="x" size={24} color="black" />
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
          value={formatWalletAddress(localSolAddy)}
        ></TextInput>
        <TouchableOpacity style={styles.touchableO} onPress={pasteClipboardSol}>
          <Feather name="clipboard" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableO} onPress={clearSolAddy}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
      </View>

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

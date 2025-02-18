import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Index() {
  const [registeredCheck, setRegisteredCheck] = useState(null);

  useEffect(() => {
    const checkLocalStorageAddys = async () => {
      const res = await AsyncStorage.multiGet(["localEthAddy", "localSolAddy"]);
      const isRegistered = res[0][1] != null || res[1][1] != null;
      setRegisteredCheck(isRegistered);

      if (!isRegistered) {
        router.replace("/auth/register"); // Redirect to register page if not registered
      }
    };
    checkLocalStorageAddys();
  }, []);

  if (registeredCheck === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return null; // If registered, do nothing (it will stay on index, handled by _layout)
}

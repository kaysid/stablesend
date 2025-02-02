import Home from "./screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Payment from "./screens/payment";
import Settings from "./screens/settings";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/register";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavBar(params) {
  //main navigation bar and screens for app
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Payment") {
            iconName = focused ? "card" : "card-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "cog" : "cog-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation(props) {
  //checks if there are saved addresses in AsyncStorage and if so, continue to home page instead of registration page
  const [registeredCheck, setRegisteredCheck] = useState(null);

  const checkLocalStorageAddys = async () => {
    //get status from local
    const res = await AsyncStorage.multiGet(["localEthAddy", "localSolAddy"]);
    res[0][1] != null || res[1][1] != null
      ? setRegisteredCheck(true)
      : console.log(false);
  };

  useEffect(() => {
    //call async function when component mounts
    checkLocalStorageAddys();
  }, []);

  return (
    //conditionally render just the navbar or navbar and register screen
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {registeredCheck ? (
        <Stack.Screen name="NavBar" component={NavBar}></Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Register" component={Register}></Stack.Screen>
          <Stack.Screen name="NavBar" component={NavBar}></Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
}

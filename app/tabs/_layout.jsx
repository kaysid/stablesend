import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "payment") {
            iconName = focused ? "card" : "card-outline";
          } else if (route.name === "settings") {
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
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="payment" options={{ title: "Payment" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}

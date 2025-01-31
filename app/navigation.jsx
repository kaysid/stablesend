import Home from "./screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Payment from "./screens/payment";
import Settings from "./screens/settings";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

//bottom tab
const Tab = createBottomTabNavigator();

function TabGroup(params) {
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
        tabBarStyle: { height: 60 },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return <TabGroup />;
}

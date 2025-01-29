import Home from "./screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Payment from "./screens/payment";
import Settings from "./screens/settings";

//bottom tab
const Tab = createBottomTabNavigator();

function TabGroup(params) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarPosition: "bottom", // Default for bottom tabs, but safe to add
        tabBarStyle: { backgroundColor: "black", height: 60 }, // Adjust styles if needed
        tabBarShowLabel: true, // Show/hide labels
      }}
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

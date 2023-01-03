import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurant.navigator";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
  };
};

const Settings = () => {
  return <Text variant="caption">settings</Text>;
};

const Map = () => {
  return <Text variant="caption">map</Text>;
};

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Settings} />
      <Tab.Screen name="Settings" component={Map} />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};

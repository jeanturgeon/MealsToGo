import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";

import { RestaurantsNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../screens/map/map.screen";
import { AuthenticationContext } from "../../services/auth/authentication.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";


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
  const { onLogout } = useContext(AuthenticationContext);
  return <Button onPress={()=>onLogout()}>Logout</Button>;
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
      <Tab.Screen name="Map" component={MapScreen} />    
      <Tab.Screen name="Settings" component={Settings} />
       
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationTabs />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  )
  
};

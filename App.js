import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from "./src/screens/restaurants/restaurants.screen";
import { Text } from "./src/UI/text.component";
import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";


import { SafeArea } from "./src/UI/safe-area.component";
import {theme} from './src/UI/theme/index';
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: 'md-map',
  Settings: 'md-settings'
};

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Settings = () => {
  return <Text variant='caption'>settings</Text>
};

const Map = () => {
  return <Text variant='caption'>map</Text>
};

const NavigationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}        
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Settings} />
      <Tab.Screen name="Settings" component={Map} />
    </Tab.Navigator>
  )

}

export default function App() {

  const [oswaldLoaded] = useOswald({Oswald_400Regular});
  const [latoLoaded] = useLato({Lato_400Regular});

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
    <>
      <ThemeProvider theme={theme} >
        <SafeArea>
          <RestaurantContextProvider>
            <NavigationContainer>
                <NavigationTabs />
            </NavigationContainer>   
          </RestaurantContextProvider>     
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


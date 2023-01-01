import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from "./src/screens/restaurants/restaurants.screen";

import {theme} from './src/UI/theme/index';


export default function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


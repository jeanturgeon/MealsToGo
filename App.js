import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from "./src/screens/restaurants/restaurants.screen";
import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'
import {theme} from './src/UI/theme/index';



export default function App() {

  const [oswaldLoaded] = useOswald({Oswald_400Regular});
  const [latoLoaded] = useLato({Lato_400Regular});

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
    <>
      <ThemeProvider theme={theme} >
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


import { SafeArea } from "./src/UI/safe-area.component";
import { theme } from "./src/UI/theme/index";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigator } from "./src/UI/navigation/app.navigator";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <LocationContextProvider>
            <RestaurantContextProvider>
             <Navigator />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import * as firebase from "firebase";

import { firebaseConfig} from './firebase.config';
import { SafeArea } from "./src/UI/safe-area.component";
import { theme } from "./src/UI/theme/index";
import { Navigation } from './src/UI/navigation/nav-index';
import { AuthenticationContextProvider } from './src/services/auth/authentication.context';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {  
 
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <SafeArea>            
            <Navigation />            
          </SafeArea>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import { Searchbar } from "react-native-paper";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight + 5 : 0,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
